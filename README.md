# Comandos:

- npx prisma init

- `yarn prisma migrate save --experimental` => cria uma pasta com as informações das migrations

- `yarn prisma migrate up --experimental` => cria as migrations no db

- `yarn prisma studio --experimental` => cria uma interface de administração para o db

- `yarn prisma introspect` => suponhamos que o banco esteja criado, mas vc queira trazer os dados de maneira rápida, este comando ele trás todas as informações das tabelas, com as colunas, os tipos, etc, e atribui para o arquivo `schema.prisma`, ele executa uma engenharia reversa para o arquivo schema

- `yarn prisma generage` => Gera as configurações do prisma, com a base de dados atual, dentro de node_modules
