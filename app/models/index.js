const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');
const {user} = require('./app/models');
const db = {};
const sequelize = new Sequelize(config);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

app.post('/create', (req, res) => {}); //Criar
app.put('/description', (req, res) => {}); // Descrever
app.get('/creationDate', (req, res) => {}); //Data de criação
app.get('/status', (req, res) => {}); // Status
app.post('/pending', (req, res) => {}); //Pendente
app.post('/progress', (req, res) => {}); //Andamento
app.post('/completed', (req, res) => {}); //Completo

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});