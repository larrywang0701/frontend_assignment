import { useState } from "react";

// The page header for every page, including the page title and a navigation sidebar
const PageHeader = ({ children }: {children: string}) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
  <>
    <div className="flex flex-row items-center justify-center bg-white py-4 rounded-md shadow-lg text-white text-center">      
      <button
        onClick={toggleSidebar}
        className="absolute left-4 bg-white text-blue-500 rounded-full p-2"
      >
        <div className="block w-12 h-1 bg-blue-500 mb-1" />
        <div className="block w-12 h-1 bg-blue-500 mb-1" />
        <div className="block w-12 h-1 bg-blue-500" />
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-600 text-3xl"
        >
          &times;
        </button>
        <nav className="mt-16 p-4 space-y-4 text-blue-500 text-xl font-semibold">
          <a href="./" className="block">HOME</a>
          <a href="./events" className="block">HAPPENING AT SOA</a>
          <a href="./bulletin_board" className="block">COMMUNITY BULLETIN BOARD</a>
          <a href="./calendars" className="block">CALENDARS & NEWSLETTERS</a>
        </nav>
      </div>
      <div className="flex flex-col justify-center text-center text-3xl font-bold my-6 text-gray-800">
        <a href="./" className="text-blue-500">YALE SCHOOL OF ART</a>{children}
      </div>
    </div>
  </>
  );
};

export default PageHeader;