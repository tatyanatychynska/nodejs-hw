import {Note} from "../models/note.js";

export const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};

export const getNotesById = (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({
    message: `Retrieved note with ID: ${noteId}`,
  });
};
