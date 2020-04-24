const {createContainer,asClass,asFunction,asValue} = require('awilix');
// MAIN CONFIG
const config = require('../config');
// MODELS
const {ProductModel} = require('../models');
// REPOSITORIES
const {ProductRepository} = require('../repositories');
// SERVICES
const {ProductService} = require('../services');
// CONTROLLERS
const {ProductController} = require('../controllers');
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
    .register({
        ProductRepository:asClass(ProductRepository).singleton()
    })
    .register({
        ProductService:asClass(ProductService).singleton()
    })
    .register({
        ProductController:asClass(ProductController.bind(ProductController)).singleton()
    })

module.exports = container;