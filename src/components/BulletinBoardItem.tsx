import { useState } from "react";

interface BulletinBoardItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
}

// Items on bulletin board. The items can be expanded to show contents.
const BulletinBoardItem: React.FC<BulletinBoardItemProps> = ({ title, content, isOpen = false }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  
  return (
    <div className="mb-4 border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left px-4 py-3 bg-yellow-300 text-black font-bold"
      >
        {title}
      </button>
      {isExpanded && (
        <div className="px-4 py-3 bg-white text-gray-700 whitespace-pre-wrap">
          <p>{content}</p>
          </div>
      )}
    </div>
  );
};

export default BulletinBoardItem;