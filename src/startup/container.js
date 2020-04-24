const {createContainer,asClass,asFunction,asValue} = require('awilix');
// MAIN CONFIG
const config = require('../config');
// MODELS
const {ProductModel} = require('../models');
// REPOSITORIES
const {ProductRepository} = require('../repositories');
// SERVICES
const {} = require('');
// CONTROLLERS
const {} = require('');
// ROUTERS
const {} = require('');


const container = createContainer();

container
    .register({
        config:asValue(config)
    })
    .register({
        ProductModel:asValue(ProductModel)
    })

module.exports = container;