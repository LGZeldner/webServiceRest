// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

// подключение настроек для БД
const dbConfig = require("./db.config.js");
const history = require("connect-history-api-fallback");
const PORT = 3000;
// создаем парсер для для получения данных из запроса
const bodyParser = require('body-parser');
const cors = require('cors');

// парсим application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// парсим application/json
app.use(bodyParser.json());

app.use(cors());

// подключаемся к базе данных
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  dialect: dbConfig.DIALECT,
  host: dbConfig.HOST
});

// опишем стуктуру хранящихся в бд данных

const Phones = sequelize.define("phones", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  article: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  manufact: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false
  },
  orders: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  camera: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  screen: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

// синхронизируем структуру базы данных с определением моделей
sequelize.sync().then(result=>{
  console.log(result);
})
  .catch(err=> console.log(err));
