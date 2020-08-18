const { Router } = require('express');
const path = require('path');

const ImageToTextController = require('./app/controllers/ImageToTextController');

const multer = require('multer');
const upload = multer();

const routes = new Router();

routes.get('/', ImageToTextController.index);

routes.post('/image', upload.single('image'), ImageToTextController.imageToText);

module.exports = routes;
