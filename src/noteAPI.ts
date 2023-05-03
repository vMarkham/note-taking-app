// src/noteAPI.ts
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { firestore } from './firebase';

export interface NoteData {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
  owner: string;
  sharedWith: string[];
}

export interface NewNoteData {
  title: string;
  content: string;
  createdAt: Timestamp;
  owner: string;
  sharedWith: string[];
}

export const createNote = async (
  title: string,
  content: string,
  uid: string
): Promise<string> => {
  const noteData: NewNoteData = {
    title,
    content,
    createdAt: Timestamp.now(),
    owner: uid,
    sharedWith: [],
  };

  const noteRef = await addDoc(collection(firestore, "notes"), noteData);
  return noteRef.id;
};

export const getNotes = async (uid: string): Promise<NoteData[]> => {
  const notesSnapshot = await getDocs(query(collection(firestore, "notes"), where("owner", "==", uid)));

  return notesSnapshot.docs.map((doc) => doc.data() as NoteData);
};


// More APIs for updating, deleting, and sharing notes.

export {}
