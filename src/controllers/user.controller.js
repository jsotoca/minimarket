let _UserService = null;

class UserController{
    constructor({UserService}) {
        _UserService = UserService;
    }
    async create(req,res){
        const {body} = req;
        res.json({
            ok:true,
            Usero: await _UserService.create(body)
        })
    }
}

module.exports = UserController;
