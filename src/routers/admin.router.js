const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');

module.exports = function({ProductModel,UserModel,config,adminSpanish}){
    AdminBro.registerAdapter(AdminBroMongoose);
    const adminBro = new AdminBro({
        locale:adminSpanish,
        rootPath:'/admin',
        resources:[ProductModel],
        branding: {
            companyName: config.APPLICATION_NAME,
          },
    });
    return AdminBroExpress.buildAuthenticatedRouter(adminBro,{
        cookiePassword:config.COOKIE_PASSWORD,
        authenticate:async(email,password)=>{
            const usuario = await UserModel.findOne({email});
            if(!usuario)return null;
            if(!usuario.comparePasswords(password))return null;
            return usuario;
        }
    });
}
