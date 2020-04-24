const {createContainer,asClass,asFunction,asValue} = require('awilix');
// MAIN CONFIG
const config = require('../config');

const container = createContainer();

container
    .register({
        config:asValue(config)
    })

module.exports = container;