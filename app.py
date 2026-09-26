from pathlib import Path
import os
import re
import smtplib
import ssl
from email.message import EmailMessage

from dotenv import load_dotenv
from flask import Flask, jsonify, request, send_from_directory
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address


BASE_DIR = Path(__file__).resolve().parent

# Carrega as variáveis do arquivo .env local.
load_dotenv(BASE_DIR / ".env")

app = Flask(__name__)

# Evita requisições muito grandes no formulário.
app.config["MAX_CONTENT_LENGTH"] = 32 * 1024  # 32 KB


# ============================================================
# CONFIGURAÇÕES DE E-MAIL
# ============================================================

EMAIL_USER = os.getenv("EMAIL_USER", "").strip()
EMAIL_APP_PASSWORD = os.getenv("EMAIL_APP_PASSWORD", "").replace(" ", "")
EMAIL_DESTINO = os.getenv("EMAIL_DESTINO", EMAIL_USER).strip()

SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587


# ============================================================
# RATE LIMIT REAL
# ============================================================

limiter = Limiter(
    key_func=get_remote_address,
    app=app,
    default_limits=[],
    storage_uri="memory://",
)


# ============================================================
# ARQUIVOS DO SITE
# ============================================================

@app.get("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.get("/css/<path:filename>")
def css_files(filename):
    return send_from_directory(BASE_DIR / "css", filename)


@app.get("/js/<path:filename>")
def js_files(filename):
    return send_from_directory(BASE_DIR / "js", filename)


@app.get("/assets/<path:filename>")
def asset_files(filename):
    return send_from_directory(BASE_DIR / "assets", filename)


# ============================================================
# VALIDAÇÃO
# ============================================================

EMAIL_PATTERN = re.compile(
    r"^[^@\s]+@[^@\s]+\.[^@\s]+$"
)


def email_configurado():
    return all([
        EMAIL_USER,
        EMAIL_APP_PASSWORD,
        EMAIL_DESTINO,
    ])


# ============================================================
# ENVIO DE E-MAIL
# ============================================================

def enviar_email_contato(nome, email_visitante, mensagem):
    if not email_configurado():
        raise RuntimeError(
            "As variáveis de e-mail não foram configuradas no arquivo .env."
        )

    email_msg = EmailMessage()

    # O remetente precisa ser a conta autenticada no Gmail.
    email_msg["From"] = EMAIL_USER
    email_msg["To"] = EMAIL_DESTINO
    email_msg["Subject"] = "Nova mensagem pelo portfólio"

    # Ao clicar em Responder no Gmail, a resposta vai para o visitante.
    email_msg["Reply-To"] = email_visitante

    email_msg.set_content(
        f"""Você recebeu uma nova mensagem pelo seu portfólio.

Nome: {nome}
E-mail: {email_visitante}

Mensagem:
{mensagem}
"""
    )

    contexto_ssl = ssl.create_default_context()

    with smtplib.SMTP(
        SMTP_HOST,
        SMTP_PORT,
        timeout=15
    ) as servidor:
        servidor.ehlo()
        servidor.starttls(context=contexto_ssl)
        servidor.ehlo()

        servidor.login(
            EMAIL_USER,
            EMAIL_APP_PASSWORD
        )

        servidor.send_message(email_msg)


# ============================================================
# CONTATO
# ============================================================

@app.post("/contato")
@limiter.limit("3 per 15 minutes")
def contato():
    # Honeypot: bots costumam preencher campos escondidos.
    website = request.form.get("website", "").strip()

    if website:
        # Não informamos ao bot que ele foi detectado.
        return jsonify({
            "ok": True
        }), 200

    nome = request.form.get("nome", "").strip()
    email = request.form.get("email", "").strip()
    mensagem = request.form.get("mensagem", "").strip()

    if not nome or len(nome) > 120:
        return jsonify({
            "ok": False,
            "message": "Informe um nome válido."
        }), 400

    if (
        not email
        or len(email) > 254
        or "\n" in email
        or "\r" in email
        or not EMAIL_PATTERN.match(email)
    ):
        return jsonify({
            "ok": False,
            "message": "Informe um e-mail válido."
        }), 400

    if (
        not mensagem
        or len(mensagem) > 3000
    ):
        return jsonify({
            "ok": False,
            "message": "Informe uma mensagem válida."
        }), 400

    try:
        enviar_email_contato(
            nome=nome,
            email_visitante=email,
            mensagem=mensagem,
        )

    except RuntimeError:
        app.logger.error(
            "Configuração de e-mail ausente no servidor."
        )

        return jsonify({
            "ok": False,
            "message": (
                "O formulário ainda não está configurado "
                "para envio de e-mail."
            )
        }), 503

    except (
        smtplib.SMTPAuthenticationError,
        smtplib.SMTPException,
        OSError
    ):
        app.logger.exception(
            "Falha ao enviar mensagem pelo Gmail."
        )

        return jsonify({
            "ok": False,
            "message": (
                "Não foi possível enviar a mensagem agora. "
                "Tente novamente em alguns instantes."
            )
        }), 502

    return jsonify({
        "ok": True,
        "message": "Mensagem enviada com sucesso!"
    }), 200


# ============================================================
# RESPOSTA PARA RATE LIMIT
# ============================================================

@app.errorhandler(429)
def too_many_requests(error):
    return jsonify({
        "ok": False,
        "message": (
            "Muitas tentativas. "
            "Aguarde alguns minutos antes de tentar novamente."
        )
    }), 429


# ============================================================
# HEADERS BÁSICOS DE SEGURANÇA
# ============================================================

@app.after_request
def security_headers(response):
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = (
        "camera=(), microphone=(), geolocation=()"
    )

    return response


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )
