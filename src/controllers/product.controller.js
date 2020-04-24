let _ProductService = null;

class ProductController{
    constructor({ProductService}) {
        _ProductService = ProductService;
    }
    async get(req,res){
        const {id} = req.params;
        const {body} = req;
        res.json({
            ok:true,
            producto: await _ProductService
        })
    }
    async getAll(req,res){
        const {numPag,numSize} = req.query;
        res.json({
            ok:true,
            producto: await _ProductService.getAll(numPag,numSize)
        })
    }
    async getProductsByCategory(req,res){
        const {category,numPag,numSize} = req.query;
        res.json({
            ok:true,
            producto: await _ProductService.getProductsByCategory(category,numPag,numSize)
        })
    }
    async create(req,res){
        const {body} = req;
        res.json({
            ok:true,
            producto: await _ProductService.create(body)
        })
    }
    async update(req,res){
        const {id} = req.params;
        const {body} = req;
        res.json({
            ok:true,
            producto: await _ProductService.update(id,body)
        })
    }
    async delete(req,res){
        const {id} = req.params;
        res.json({
            ok:true,
            producto: await _ProductService.delete(id)
        })
    }
}

module.exports = ProductController;
