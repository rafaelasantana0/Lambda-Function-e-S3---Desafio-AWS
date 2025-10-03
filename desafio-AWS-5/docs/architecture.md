# Arquitetura

Descrição:
- Um bucket S3 armazena arquivos colocados por usuários/sistemas.
- A função Lambda é acionada por eventos `s3:ObjectCreated:*`.
- A função processa o arquivo (ex.: validação, transformação, metadados) e grava resultados no mesmo bucket.

Pontos de atenção:
- Permissões IAM mínimas.
- Evitar loops (se Lambda grava no mesmo prefixo que ativa o trigger).
- Idempotência: tratar eventos duplicados.
