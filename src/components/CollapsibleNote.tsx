// src/components/CollapsibleNote.tsx
import React, { useState } from "react";
import { Timestamp } from "firebase/firestore"; // Import Timestamp

interface Props {
  title: string;
  content: string;
  createdAt: Timestamp; // Update the type of createdAt
}

const CollapsibleNote: React.FC<Props> = ({ title, content, createdAt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Update the formatDate function to handle Timestamp type
  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate(); // Convert Timestamp to Date
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpansion}
      >
        <h3 className="font-medium">{title}</h3>
        <i
          className={`fa fa-chevron-\${isExpanded ? "up" : "down"} text-gray-400`}
        ></i>
      </div>
      {isExpanded && <p className="text-gray-600 mt-2">{content}</p>}
      <p className="text-xs text-gray-500 mt-1">{formatDate(createdAt)}</p>
    </div>
  );
};

export default CollapsibleNote;
