# Insights aprendidos

- Triggers do S3 podem causar loops se não filtrar prefixos.
- Para arquivos grandes, use SQS para desacoplar.
- Monitoramento: CloudWatch logs + métricas customizadas.
- Segurança: criptografia no bucket e políticas restritas.
- Versionamento do bucket facilita recuperação de dados.
