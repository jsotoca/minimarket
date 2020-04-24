const BaseService = require('./base.service');
let _ProductRepository = null;

class ProductService extends BaseService{
    constructor({ProductRepository}){
        super(ProductRepository);
        _ProductRepository = ProductRepository;
    }
    async getProductsByCategory(category,numPag,numSize){
        return await _ProductModel.getProductsByCategory(category,numPag,numSize);
    }
}

module.exports = ProductService;