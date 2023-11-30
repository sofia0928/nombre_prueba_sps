import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre : {
        type : String,
        require : true,
        maxLength : 20
    },
})

export default mongoose.model('User', userSchema)