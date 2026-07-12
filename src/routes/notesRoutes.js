import { Router } from 'express';
import { createNote, deleteNote, getAllNotes, getNotesById, updateNote } from '../controllers/notesController.js';

const router = Router();
router.get('/notes', getAllNotes);

router.get('/notes/:noteId', getNotesById);

router.delete('/notes/:noteId', deleteNote);

router.post('/notes', createNote);

router.patch('/notes/:noteId',updateNote);

export default router;
