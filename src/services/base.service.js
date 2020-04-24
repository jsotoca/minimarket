const {_err} = require('../helpers');

class BaseService{
    constructor(repository){
        this.repository = repository;
    }
    async get(id){
        if(!id)_err(400,'id no enviado');
        const data = await this.repository.get(id);
        if(!data)_err(404,'data no encontrada');
        return data;
    }
    async getAll(numPag,numSize){
        const data = await this.repository.getAll(numPag,numSize);
        if(!data)_err(404,'data no encontrada');
        return data;
    }
    async create(entity){
        const data = await this.repository.create(entity);
        if(!data)_err(404,'data no generada');
        return data;
    }
    async update(id,entity){
        if(!id)_err(400,'id no enviado');
        const data = await this.repository.update(id,entity);
        if(!data)_err(404,'data no actualizada');
        return data;
    }
    async delete(id){
        if(!id)_err(400,'id no enviado');
        const data = await this.repository.delete(id);
        if(!data)_err(404,'data no eliminada');
        return data;
    }
}

module.exports = BaseService;