var mongoose= require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname:{type:String, required:true, index:{unique:true}},
    lastname:{type:String, required:true},
    middlename:{type:String, required:true},
    birthday:{type:String, required:false}
});

const User= mongoose.model('User',UserSchema)
module.exports = User;

