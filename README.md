# Lambda + S3 Automation — Repositório de estudo

Objetivo: consolidar conhecimentos em automação usando AWS Lambda acionadas por eventos do S3 e documentar as decisões e aprendizados.

Conteúdo do repositório:
- Infraestrutura como código (SAM / CloudFormation): `template.yaml`.
- Parâmetros de implantação: `params.yml`.
- Função Lambda (Node.js): `lambda/index.js`.
- Scripts de deploy: `deploy.sh`.
- Documentação técnica: `docs/`.

## Como usar
1. Preencha `params.yml` com seus valores (bucket, nomes, prefixo, região).
2. Execute `./deploy.sh` para empacotar e implantar via AWS CLI / SAM.

# Feito por Rafaela Nascimento Sant Ana @ 2025

