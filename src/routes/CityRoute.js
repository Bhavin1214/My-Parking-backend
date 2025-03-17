const routes = require('express').Router();
const cityController = require('../controller/CityController');

routes.post('/addcity', cityController.addCity);
routes.get('/getcities', cityController.getAllCity);

module.exports = routes;