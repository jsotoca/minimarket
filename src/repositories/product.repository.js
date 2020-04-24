const BaseRepository = require('./base.repository');
let _ProductModel = null;

class ProductRepository extends BaseRepository{
    constructor(ProductModel) {
        _ProductModel = ProductModel;
    }
    async getProductsByCategory(category,numPag=1,numSize=5){
        const skips = numSize * (numPag-1);
        return await _ProductModel.find({categoria:category}).skips(skips).limit(numSize);
    }
}

module.exports = ProductRepository;