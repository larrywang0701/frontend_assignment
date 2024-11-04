interface ContentBoxProps {
  title?: string;
  children: string;
}

// A simple content box that has a (optional) title and the content.
const ContentBox: React.FC<ContentBoxProps> = ({ title, children }) => {
  return (
    <div className="bg-yellow-100 p-6 mb-4 shadow-lg">
      {title&&<h2 className="text-2xl font-bold mb-2">{title}</h2>}
      <p className="text-gray-700 text-xl whitespace-pre-wrap">{children}</p>
    </div>
  );
};

export default ContentBox;