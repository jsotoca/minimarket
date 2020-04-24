const {Schema,model} = require('mongoose');
const {genSaltSync,hashSync,compareSync} = require('bcryptjs');

const userSchema = new Schema({
    nombre:{type:String,required:[true,'los nombres son requeridos']},
    email:{type:String,required:[true,'el email es requerido'],unique:true},
    password:{type:String,required:[true,'la contraseña es requerida']},
    rol:{type:String,enum:['admin','user'],required:true},
    estado:{type:Boolean,default:true}
},{timestamps:true});

userSchema.pre('save',function(next){
    if(!this.isModified('password'))return next;
    const salt = genSaltSync(10);
    const passwordHashed = hashSync(this.password,salt);
    this.password = passwordHashed;
    next();
});

userSchema.methods.comparePasswords = function(password){
    return compareSync(password,this.password);
}

module.exports = model('usuario',userSchema);
