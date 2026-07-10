import { Router } from "express";
import { getNotes, getNotesById } from "../controllers/notesController.js";

const router = Router();
router.get('/notes', getNotes);

router.get('/notes/:noteId', getNotesById );

router.get("/test-error", (req, res) => {
throw new Error ("Simulated server error");
});


export default router;

