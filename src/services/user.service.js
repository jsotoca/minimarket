const BaseService = require('./base.service');
let _UserRepository = null;

class UserService extends BaseService{
    constructor({UserRepository}){
        super(UserRepository);
        _UserRepository = UserRepository;
    }
}

module.exports = UserService;