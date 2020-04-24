const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('admin-bro-mongoose');

module.exports = function({ProductModel}){
    AdminBro.registerAdapter(AdminBroMongoose);
    const adminBro = new AdminBro({
        rootPath:'/admin',
        resources:[ProductModel]
    });
    return AdminBroExpress.buildRouter(adminBro);
}
