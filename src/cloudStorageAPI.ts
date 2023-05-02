// src/cloudStorageAPI.ts
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { appInstance } from './firebase';

const storage = getStorage(appInstance);

export const uploadFile = async (
  uid: string,
  noteId: string,
  file: File
): Promise<string> => {
  const storageRef = ref(storage);
  const noteFileRef = ref(storageRef, `notes/\${uid}/\${noteId}/\${file.name}`);

  await uploadBytes(noteFileRef, file);
  return noteFileRef.fullPath;
};

export const downloadFile = async (filePath: string): Promise<string> => {
  const storageRef = ref(storage);
  const fileRef = ref(storageRef, filePath);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL;
};
