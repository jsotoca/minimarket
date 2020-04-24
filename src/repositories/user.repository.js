const BaseRepository = require('./base.repository');
let _UserModel = null;

class UserRepository extends BaseRepository{
    constructor({UserModel}) {
        super(UserModel);
        _UserModel = UserModel;
    }
}

module.exports = UserRepository;