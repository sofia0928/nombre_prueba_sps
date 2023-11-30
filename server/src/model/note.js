import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        maxLength: 20
    },
    descripcion: {
        type: String,
        require: true,
        maxLength: 255
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}
)


export default mongoose.model('Note', noteSchema);