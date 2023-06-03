const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
},{versionKey:false});
const UsersModel=mongoose.model('users',DataSchema);
module.exports=UsersModel

