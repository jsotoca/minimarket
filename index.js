const container = require('./src/startup/container');
const {MONGO_URI} = container.resolve('config');
const server = container.resolve('server');
const mongoose = require('mongoose');

mongoose.connect(
    MONGO_URI,
    {useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},
    (err)=>{
        if(err) throw err;
        console.log(`Database running on ${MONGO_URI}`);
        server.start();
    }
)