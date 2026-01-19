import express from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;


// app.get("/api/notes", (req,res)=>{
//     res.send("Hello from backend notes! you got 5 notes for free");
// });

// app.post("/api/create" , (req,res)=>{
//     res.status(201).json({message: "Created a successfull POST!"});
// });

// app.put("/api/update/:id", (req,res)=>{
//     res.status(200).json({message: "Post Updated successfully!"});
// });

// app.delete("/api/delete/:id", (req,res)=>{
//     res.status(200).json({message: "Post Deleted successfully!"});  
// });
