const {Router} = require('express');
const {CastIntQuery} = require('../middlewares');
module.exports = function({ProductController}){
    const router = Router();

    router.get('/',[CastIntQuery],ProductController.getAll);
    router.get('/:id',ProductController.get);
    router.post('/',ProductController.create);
    router.put('/:id',ProductController.update);
    router.delete('/:id',ProductController.delete);

    return router;
}