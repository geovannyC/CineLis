const Sequelize = require('sequelize');
const sequelize = new Sequelize('basejose', 'postgres', 'marcelo272', 
  {
    host: 'localhost',
    dialect: 'postgres',
  });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const listado = sequelize.define("pedidos",{
    producto: Sequelize.TEXT,
    envio: Sequelize.TEXT
  },
  {
    timestamps: false
  })
  exports.listado = listado;