const routes = require('express').Router();
const stateController = require('../controller/StateController');

routes.post('/addstate', stateController.addState);
routes.get('/getstates', stateController.getAllState);

module.exports = routes;