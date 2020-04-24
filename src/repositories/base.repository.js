class BaseRepository{
    constructor(model){
        this.model = model;
    }
    async get(id){
        return await this.model.findById(id);
    }
    async getAll(numPag=1,numSize=5,categoria=null){
        const skips = numSize * (numPag-1);
        var buscar = {};
        if(categoria) buscar = {categoria};
        return await this.model.find(buscar).skip(skips).limit(numSize);
    }
    // async getAll(numPag=1,numSize=5){
    //     const skips = numSize * (numPag-1);
    //     return await this.model.find().skip(skips).limit(numSize);
    // }
    async create(entity){
        return await this.model.create(entity);
    }
    async update(id,entity){
        return await this.model.findByIdAndUpdate(id,entity,{new:true,runValidators:true});
    }
    async delete(id){
        return await this.model.findByIdAndUpdate(id,{estado:false},{new:true,runValidators:true});
    }
}

module.exports = BaseRepository;