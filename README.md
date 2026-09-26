# Portfólio | Monithelle

Portfólio em **HTML, CSS e JavaScript**, servido localmente pelo Flask. O Flask
também valida o formulário de contato e envia mensagens ao Gmail por SMTP.

## Estrutura

```text
Portifólio/
├── app.py
├── requirements.txt
├── .env.example
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── imagens/
│   │   ├── desenvolvedora.png
│   │   └── projetos/
│   └── icons/
└── README.md
```

## O que cada arquivo faz

- `index.html`: contém o conteúdo e a estrutura da página.
- `css/style.css`: controla cores, tamanhos, posicionamento e responsividade.
- `js/script.js`: controla o menu no celular e o ano automático do rodapé.
- `assets/imagens/`: guarda as imagens usadas no site.
- `assets/imagens/projetos/`: coloque aqui screenshots dos seus projetos.
- `assets/icons/`: coloque aqui ícones que quiser usar.

## Executar localmente

No terminal CMD, na pasta do projeto:

```bat
python -m venv .venv
.venv\Scripts\activate.bat
pip install -r requirements.txt
```

Crie o arquivo local `.env` a partir do `.env.example` e preencha as variáveis
com suas credenciais. Não envie `.env` ao GitHub.

Inicie o servidor:

```text
python app.py
```

Abra `http://127.0.0.1:5000`. O Live Server não executa o backend Flask nem o
envio do formulário.

## Vercel

A Vercel detecta o Flask pelo `app.py` e instala as dependências de
`requirements.txt`. O `vercel.json` inclui o HTML, CSS, JavaScript e as imagens
no pacote da função, mantendo a estrutura atual do projeto.

Na Vercel, configure `EMAIL_USER`, `EMAIL_APP_PASSWORD` e `EMAIL_DESTINO` nas
variáveis de ambiente do projeto. O `.env` permanece apenas no computador.

O Flask-Limiter continua habilitado com `memory://`. Em produção serverless,
esse armazenamento não é compartilhado entre instâncias, então o limite é
local a cada instância. Para um limite global, será necessário configurar um
armazenamento compartilhado, como Redis.

## Onde editar

No `index.html`, altere os textos do início, projetos, sobre e contato.
No `css/style.css`, as cores principais estão no começo do arquivo em `:root`.

Paleta atual:

- Fundo: `#181A1E`
- Superfície: `#1B181C`
- Laranja: `#EF7019`
- Azul: `#4C56ED`
- Texto: `#D6D3D4`
