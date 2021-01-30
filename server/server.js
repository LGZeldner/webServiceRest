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

const Products = sequelize.define("products", {
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

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`)
});
// получение всех продуктов
app.get("/api/products", async (req, res) => {
  try {
    let result = await Products.findAll();
    res.send(result)
  }
  catch (e) {
    console.error(e);
    res.status(500).send({
      message: "Error: could not get all products"
    })
  }
});
// получение продукта по id
app.get("/api/products/:id", async (req, res) => {
  try {
    let result = await Products.findAll({
      where: { product_id: req.params.id }
    });
    res.send(result)
  }
  catch (e) {
    console.error(e);
    res.status(500).send({
      message: "Error: could not get product"
    })
  }
});

// удаление продукта по id
app.delete("/api/delete/product/:id", async (req, res) => {
  try {
    let result = await Products.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.send(result.status)
  }
  catch (e) {
    console.error(e);
    res.status(500).send({
      message: "Error: could not delete product"
    })
  }
});
// редактирование продукта
app.put("/api/edit/product", async (req, res) => {
  try {
    let result = await Products.update({
      title: req.body.title,
      article: req.body.article,
      price: req.body.price,
      manufact: req.body.manufact,
      year: req.body.year,
      orders: req.body.orders,
      camera: req.body.camera,
      screen: req.body.screen
    }, {
      where: {
        id: req.body.id,
      }
    });
    res.send(result)
  }
  catch (e) {
    console.error(e);
    res.status(500).send({
      message: "Error: could not update product"
    })
  }
});
