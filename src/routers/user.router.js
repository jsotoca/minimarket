const {Router} = require('express');

module.exports = function({UserController}){
    const router = Router();

    router.post('/',UserController.create);

    return router;
}