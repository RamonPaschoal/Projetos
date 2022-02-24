# Projetos

Neste projeto foram utilizadas as bibliotecas:
 - Express;
 - dotenv
 - jsonwebtoken
 - mongodb
 - cipher
 - crypto

Utilizei a arquitetura MSC para esturturar o projeto. Onde as camadas:
 - Model: Está responsável pela conexão com o banco de dados e execução das querys;
 - Service: As regras de negógio de cada arquivo;
 - Controller: Captação dos dados, execução do Service e tratamento de erros.

Além disso, incluí uma pasta de middleware contendo 3 arquivos:
 - erro.js: Arquivo para tratamento de erros;
 - token.js: Arquivo que cria e valida o token, necessário para execução dos controllers;
 - crypt.js: Arquivo para criptografar as senhas cadastradas.
