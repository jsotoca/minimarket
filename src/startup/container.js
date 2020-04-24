const {createContainer,asClass,asFunction,asValue} = require('awilix');
// MAIN CONFIG
const config = require('../config');
const router = require('../routers');
const server = require('.');
const adminSpanish = require('../config/admin.spanish');
// MODELS
const {ProductModel,UserModel} = require('../models');
// REPOSITORIES
const {ProductRepository,UserRepository} = require('../repositories');
// SERVICES
const {ProductService,UserService} = require('../services');
// CONTROLLERS
const {ProductController,UserController} = require('../controllers');
// ROUTERS
const {ProductRouter,AdminBroRouter,UserRouter} = require('../routers/index.router');


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
        ProductRepository:asClass(ProductRepository).singleton(),
        UserRepository:asClass(UserRepository).singleton(),
    })
    .register({
        ProductService:asClass(ProductService).singleton(),
        UserService:asClass(UserService).singleton()
    })
    .register({
        ProductController:asClass(ProductController.bind(ProductController)).singleton(),
        UserController:asClass(UserController.bind(UserController)).singleton()
    })
    .register({
        ProductRouter:asFunction(ProductRouter).singleton(),
        AdminBroRouter:asFunction(AdminBroRouter).singleton(),
        UserRouter:asFunction(UserRouter).singleton()
    })

module.exports = container;