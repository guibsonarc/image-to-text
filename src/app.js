const express = require('express');
const expressReactViews = require('express-react-views');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded({ extended: true }));

    this.server.set('views', path.resolve(__dirname, 'app', 'views'));
    this.server.set('view engine', 'jsx');
    this.server.engine('jsx', expressReactViews.createEngine());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
