const routes = require('express').Router();
const AreaController = require('../controller/AreaController');

routes.post('/addarea', AreaController.addArea);
routes.get('/getareas', AreaController.getAllArea);

module.exports = routes;