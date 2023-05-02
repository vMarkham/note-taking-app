// src/components/NoteEditor.tsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

const NoteEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState("");
  const [editorTab, setEditorTab] = useState<"write" | "preview">("write");

  return (
    <div>
      <ReactMde
        value={markdown}
        onChange={setMarkdown}
        selectedTab={editorTab}
        onTabChange={setEditorTab}
        generateMarkdownPreview={(previewMarkdown) =>
          Promise.resolve(<ReactMarkdown>{previewMarkdown}</ReactMarkdown>)
        }
      />
      <button>Save</button>
    </div>
  );
};

export default NoteEditor;
