module.exports = {
    _err:function(status,message){
        const err = new Error();
        err.status = status;
        err.message = message;
        throw err;
    }
}