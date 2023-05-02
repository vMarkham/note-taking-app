// src/components/NoteList.tsx
import React, { useState } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

// Sample notes
const sampleNotes: Note[] = [
  {
    id: "1",
    title: "Sample Note 1",
    content: "This is the description of the Sample Note 1.",
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Sample Note 2",
    content: "This is the description of the Sample Note 2.",
    createdAt: new Date(),
  },
];

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState(sampleNotes);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search notes"
      />
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
