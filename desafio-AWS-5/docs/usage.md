# Como rodar localmente e deploy

1. Configure AWS CLI: `aws configure`
2. Instale SAM CLI e yq (opcional)
3. Edite `params.yml` e defina nomes/region
4. Rode `./deploy.sh`

## Testando
- Carregue um arquivo no S3 (prefixo `uploads/` se usado).
- Verifique logs no CloudWatch da Lambda.
