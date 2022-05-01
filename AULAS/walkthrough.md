COMANDOS EXECUTADOS:

npm i --save mysql2 express sequelize sequelize-cli nodemon

npx sequelize db:create
npx sequelize migration:create --name=create-user
npx sequelize db:migrate