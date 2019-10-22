# Tubiba, gerenciando notas desde (tomara que) Dezembro de 2019

TODO: adicionar suporte à web3


## Passos pra iniciar o servidor:
1. Obter algum servidor MongoDB (recomendo o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), já que é gratuito e vps)
2. Instalar o [Node.JS](https://nodejs.org/en/download/)
3. Clonar o repositório
4. Criar um arquivo .env na pasta raiz do projeto
5. Popular ele com a connection string do servidor MongoDB
6. Após o acima ser feito, 
>$ nodemon src/server.js

Recomendo usar o [POSTMAN](https://www.getpostman.com/downloads/) pra testar os endpoints da API.


TODO: fazer a documentação da API

## .ENV
insira a connection string como valor da variável MONGOURL.
