import User from '../model/user.js';

export const createUser = async (req, res) =>{
    try {
        const newUser = await User.create({
            nombre: req.body.nombre
        })

        let createdUser = await newUser.save();

        if(!createdUser)
         res.status(400).json({ message: 'No se pudo crear el usuario' });

        else res.status(200).json(createdUser);
    } catch (error) {
        return res.status(500).json({
            message: `Error: ${error.message}`
        });
    }
}

export const getUser = async (req, res) =>{
    const { id } = req.params;

    try {
        let user = await User.findById(id);

        if(!user) res.status(404).json({message: "No se ha encontrado el usuario"});
    } catch (error) {
        return res.status(500).json({
            message: `Error: ${error.message}`
        });
    }
}

export const getUsers = async (req, res) =>{
    try {
        let users = User.find()
        if(!users) res.status(404).json({message: "No se han encontrado usuarios"})

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: `Error: ${error.message}`
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        });

        if(!user) res.status(400).json({
            message: "El usuario no se pudo actualizar"
        });

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({
            message: `Error: ${error.message}`
        })
    }
}
export const deleteUser = async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(req.params.id)


        if(!user) res.status(400).json({
            message: "El usuario no se pudo eliminar"
        });

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({
            message: `Error: ${error.message}`
        })
    }
}
