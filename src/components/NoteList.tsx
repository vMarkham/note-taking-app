// src/components/NoteList.tsx
import React, { useState, useEffect } from "react";
import { getNotes, createNote, NoteData } from "../noteAPI";
import useAuth from "../hooks/useAuth";
import CreateNote from "./CreateNote";
import CollapsibleNote from "./CollapsibleNote";
import { Timestamp } from "firebase/firestore";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
}

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const user = useAuth();
  const uid = user?.uid || "";

  useEffect(() => {
    if (uid === "") return;

    const fetchNotes = async () => {
      console.log("fetchNotes");
      const userNotes = await getNotes(uid);
      console.log("userNotes");
      console.log(userNotes);
      setNotes(userNotes);
    };

    fetchNotes();
  }, []);

  const handleNoteCreated = (newNote: NoteData) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <CreateNote onNoteCreated={handleNoteCreated} uid={uid} />
      <div className="w-full md:w-1/2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes"
          className="mt-4 w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredNotes.map((note) => (
          <CollapsibleNote
            key={note.id}
            title={note.title}
            content={note.content}
            createdAt={note.createdAt} // Pass the createdAt prop
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
