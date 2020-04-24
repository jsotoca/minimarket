const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const {Errors,NotFound} = require('../middlewares');
require('express-async-errors');

module.exports = function({ProductRouter,AdminBroRouter,UserRouter}){
    const router = express.Router();
    const apiRouter = express.Router();

    apiRouter
        .use(express.json())
        .use(express.urlencoded({extended:false}))
        .use(cors())
        .use(helmet())
        .use(compression());

        apiRouter.use('/producto',ProductRouter);
        apiRouter.use('/usuario',UserRouter);

    router.use('/admin',AdminBroRouter);
    router.use('/v1/api',apiRouter);
    router.use(Errors);
    router.use(NotFound);

    return router;
}