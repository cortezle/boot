var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new Schema ({
    username: {
        type: string,
        unique: true,
        index: true
    },
    password:{
        type: string
    }
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.models.user || mongoose.model('user',UserSchema);