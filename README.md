# Tubiba, gerenciando notas desde (tomara que) Dezembro de 2019

TODO: Guidelines


## Passos pra iniciar o servidor:
1. Instalar o [MySQL](https://dev.mysql.com/downloads/)
2. Instalar o [Node.JS](https://nodejs.org/en/download/)
3. Clonar o repositório
5. Criar um banco de dados MySQL (não faça nenhuma tabela, o typeORM já vai fazer isso pra você, só segue a lista)
4. Criar um arquivo .env na pasta raiz do projeto
5. Popular ele com os dados necessários pra acessar o banco de dados (exemplo de um arquivo .env na pasta raiz do projeto)
6. Após o acima ser feito, digitar npm start

Recomendo usar o [POSTMAN](https://www.getpostman.com/downloads/) pra testar os endpoints da API.
Dá pra usar qualquer editor de texto/IDE que quiserem, mas recomendo o [VS Code](https://code.visualstudio.com/download) por ser uma delicia que tem uma caralhada de extensão e linter, recomendado em 9 paises da Africa pra aumentar a produtividade

### Pros lascado que vão dar uma ajudinha aqui, 

Dá uma checada em como o git funciona antes, abre uma branch sempre que for editar algo, tenha 100% de certeza que tudo tá funcionando antes de dar push, e por favor, por favor, não falem o nome do proibido em voz alta ou o ronaldinho gaucho aparece

TODO: fazer a documentação da API

## .ENV
Com as configurações usadas no .env de exemplo, o servidor vai tentar se conectar no banco de dados de nome proibido no localhost pela porta 3306, usando o usuário root e a senha xurumelos123

TODO: adicionar um socket pra jogar truco online no server
