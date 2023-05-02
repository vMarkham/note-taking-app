// src/components/ShareNote.tsx
import React, { useState } from "react";

interface ShareNoteProps {
  noteId: string;
  handleShare: (noteId: string, email: string) => Promise<void>;
}

const ShareNote: React.FC<ShareNoteProps> = ({ noteId, handleShare }) => {
  const [email, setEmail] = useState("");

  const share = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleShare(noteId, email);
    setEmail("");
  };

  return (
    <form onSubmit={share}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Share Note</button>
    </form>
  );
};

export default ShareNote;
export {};
