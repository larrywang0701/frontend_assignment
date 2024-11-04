import { ReactNode } from "react";
import Background from "./Background";

// The main container for every page
function MainContainer({children} : {children: ReactNode}) {
  return (
  <>
    <Background />
    <div className="absolute top-0 left-0 w-full h-full overflow-auto">{children}</div>
    <footer className="absolute bottom-0 left-0 text-center text-gray-600 text-sm p-4 bg-gray-100 border-t">
      <p>
        All external images and resources are the copyright of their respective owners. This project is for educational purposes only, and no copyright infringement is intended.
      </p>
    </footer>
  </>
  );
}

export default MainContainer;