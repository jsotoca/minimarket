const {Schema,model} = require('mongoose');

categorias = [
    'Frutas y Verduras',
    'Carnes, aves y pescados',
    'Congelados',
    'Lacteos y huevos',
    'Quesos y fiambres',
    'Abarrotes',
    'Bebidas',
    'Panadería y comidas',
    'Cuidado del bebé',
    'Cuidado Personal',
    'Juguetes',
    'Limpieza',
    'Mascotas'
];

const productSchema = new Schema({
    nombre:{type:String,required:[true,'el nombre es requerido'],lowercase:true},
    descripcion:{type:String,lowercase:true},
    imagen:{type:String,required:true},
    precio:{type:Number,required:[true,'el precio es requerido']},
    precio_oferta:{type:Number},
    categoria:{type:String,enum:categorias,required:[true,'la categoria es requerida']},
    estado:{type:Boolean,default:true}
},{timestamps:true});

module.exports = model('producto',productSchema);