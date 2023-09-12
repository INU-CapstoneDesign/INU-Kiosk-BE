'use strict';

const Sequelize = require('sequelize');
const config = require('../config/config.json');

// Sequelize('database', 'username', 'password', 'details{}')
const sequelize = new Sequelize('KIOSK', 'root', 'wktlr011226!', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 8080,
});

const db = {};

db.sequelize = sequelize;

module.exports = db;