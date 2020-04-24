const {createContainer,asClass,asFunction,asValue} = require('awilix');
// MAIN CONFIG
const config = require('../config');
const router = require('../routers');
const server = require('.');
const adminSpanish = require('../config/admin.spanish');
// MODELS
const {ProductModel,UserModel} = require('../models');
// REPOSITORIES
const {ProductRepository} = require('../repositories');
// SERVICES
const {ProductService} = require('../services');
// CONTROLLERS
const {ProductController} = require('../controllers');
// ROUTERS
const {ProductRouter,AdminBroRouter} = require('../routers/index.router');


const container = createContainer();

container
    .register({
        config:asValue(config),
        router:asFunction(router).singleton(),
        server:asClass(server).singleton(),
        adminSpanish:asValue(adminSpanish)
    })
    .register({
        ProductModel:asValue(ProductModel),
        UserModel:asValue(UserModel)
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
    .register({
        ProductRouter:asFunction(ProductRouter).singleton(),
        AdminBroRouter:asFunction(AdminBroRouter).singleton(),
    })

module.exports = container;