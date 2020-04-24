const BaseService = require('./base.service');
let _ProductRepository = null;

class ProductService extends BaseService{
    constructor({ProductRepository}){
        super(ProductRepository);
        _ProductRepository = ProductRepository;
    }
}

module.exports = ProductService;