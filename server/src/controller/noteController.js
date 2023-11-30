import Note from '../model/note.js';
import { createUser } from './userController';

export const  createNote = async (res, req) => {
    try {
        let newNote = await Note.create({
            nombre: req.body.nombre,
            description: req.body.description,
            user: req.user.id
        })
    } catch (error) {
        
    }
}