const BaseRepository = require('./base.repository');
let _ProductModel = null;

class ProductRepository extends BaseRepository{
    constructor({ProductModel}) {
        super(ProductModel);
        _ProductModel = ProductModel;
    }
}

module.exports = ProductRepository;