import mongoose from "mongoose";

const Conexion = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("BD conectada");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

export default Conexion