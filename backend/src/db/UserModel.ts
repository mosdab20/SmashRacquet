import mongoose, {Schema} from "mongoose";


const UserSchema: Schema = new Schema({
    id:{type: Number,required: true},
    username:{type: String, required: true},
    password:{type: String, required: true},
    age:{type: Number, required: true},
    name: {type: String, required: true},
    role: {type: String, required: true}
})

export const UserModel = mongoose.model('UserModel', UserSchema);