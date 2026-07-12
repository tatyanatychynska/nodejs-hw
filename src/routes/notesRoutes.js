import { Router } from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesController.js';

const router = Router();
router.get('/notes', getAllNotes);

router.get('/notes/:noteId', getNoteById);

router.delete('/notes/:noteId', deleteNote);

router.post('/notes', createNote);

router.patch('/notes/:noteId',updateNote);

export default router;
