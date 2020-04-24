module.exports = {
    Errors:function(err,req,res,next){
        const httpStatus = err.status;
        return res.status(httpStatus).json({ok:false,message:err.message});
    },
    NotFound:function(req,res,next){
        return res.status(404).json({ok:false,message:'recurso no encontrado'});
    },
    CastIntQuery:function(req,res,next){
        const queryString = req.query;
        for (const key in queryString) {
            const lenght = queryString[key].lenght;
            const isValid = (lenght>20)? false : !isNaN(parseInt(queryString[key]));
            if(isValid) queryString[key] = parseInt(queryString[key]);
        }
        req.query = queryString;
        next();
    }
}