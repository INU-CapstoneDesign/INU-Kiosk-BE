'use strict';

const Sequelize = require('sequelize');
const config = require('../config/config.json');

// Sequelize('database', 'username', 'password', 'details{}')
const sequelize = new Sequelize('####', 'root', '####', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: '####', // port 번호
});

// model export 하기
const Menu = require('./menu.js')(sequelize, Sequelize.DataTypes);
const Restaurant = require('./restaurant.js')(sequelize, Sequelize.DataTypes);

const db = {};

db.Menu = Menu;
db.Restaurant = Restaurant;

db.sequelize = sequelize;

module.exports = db;
