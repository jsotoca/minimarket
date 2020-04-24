const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');

module.exports = function({ProductModel,config,adminSpanish}){
    AdminBro.registerAdapter(AdminBroMongoose);
    const adminBro = new AdminBro({
        locale:adminSpanish,
        rootPath:'/admin',
        resources:[ProductModel],
        branding: {
            companyName: config.APPLICATION_NAME,
          },
    });
    return AdminBroExpress.buildRouter(adminBro);
}
