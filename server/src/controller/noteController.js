import Note from '../model/note.js';

export const createNote = async (req, res) => {
    const { nombre, descripcion, user } = req.body;

    try {
        const newNote = await Note.create({ nombre, descripcion, user });
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ error: `Error: No se pudo crear la nota: ${error.message}` });
    }
};

export const getNote = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Note.findById(id);

        if (!note) res.status(404).json({ message: "La nota no se encontro" });
        else res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    }
};

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        if (!notes.length) {
            res.status(404).json({ message: "no hay notas" });
        } else {
            res.status(200).json(notes);
        }
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    }
};

export const updateNote = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedNote) {
            res.status(404).json({ error: "No se pudo actualizar la nota" });
        } else {
            res.status(200).json(updatedNote);
        }
    } catch (error) {
        res.status(400).json({ error: `Error: ${error.message}` });
    }
};

export const deleteNote = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) res.status(404).json({ error: "Fallo la eliminación" });
        else res.status(200).json(deletedNote);
    } catch (error) {
        res.status(400).json({ error: `Error: ${error.message}` });
    }
};