// src/components/CreateNote.tsx
import React, { useState } from "react";
import { createNote, NoteData } from "../noteAPI";
import { Timestamp } from "firebase/firestore";

interface CreateNoteProps {
  onNoteCreated: (note: NoteData) => void;
  uid: string;
}

const CreateNote: React.FC<CreateNoteProps> = ({ onNoteCreated, uid }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [isTitleEdited, setIsTitleEdited] = useState(false);

  const handleNoteTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNoteTitle(event.target.value);
    setIsTitleEdited(true);
  };

  const handleNoteTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNoteText(event.target.value);
    // Update the note title based on the note text only if the title hasn't been edited by the user
    if (!isTitleEdited) {
      setNoteTitle(event.target.value.substring(0, 20));
    }
  };

  const handleSaveNote = async () => {
    const title = noteTitle;
    const content = noteText;
    const createdAt = Timestamp.now();

    const noteId = await createNote(title, content, uid);

    const newNote: NoteData = {
      id: noteId,
      title,
      content,
      createdAt,
      owner: uid,
      sharedWith: [],
    };

    onNoteCreated(newNote);
    setNoteTitle("");
    setNoteText("");
    setIsTitleEdited(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full md:w-1/2 mx-auto">
      <input
        type="text"
        placeholder="Title..."
        maxLength={20}
        value={noteTitle}
        onChange={handleNoteTitleChange}
        className="w-full border-b border-gray-300 focus:border-blue-500 mb-4 p-2"
      />
      <textarea
        cols={10}
        rows={5}
        placeholder="Type...."
        maxLength={100}
        value={noteText}
        onChange={handleNoteTextChange}
        className="w-full border border-gray-300 focus:border-blue-500 rounded p-2 mb-4"
      ></textarea>
      <button
        onClick={handleSaveNote}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default CreateNote;
