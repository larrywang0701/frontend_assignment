import { useNavigate } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import PageHeader from "../components/PageHeader";
import ContentBox from "../components/ContentBox";

function IndexPage() {

  const navigate = useNavigate();
  
  interface NavigationButtonProps {
    label: string;
    onClick: () => void;
  }
  
  const NavigationButton: React.FC<NavigationButtonProps> = ({ label, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="block w-full text-left bg-black text-white font-bold p-3 mb-2 hover:bg-gray-700"
      >
        {label}
      </button>
    );
  };

  return (
  <>
    <MainContainer>
      <PageHeader>Welcome</PageHeader>
      <div className="flex-1 p-6">
        <ContentBox title="Introduction">
          The Yale School of Art is a graduate school that confers MFAs in Graphic Design, Painting/Printmaking, Photography, and Sculpture; and offers undergraduate-level art courses to Yale College students. Our website exists as an ongoing collaborative experiment in digital publishing and information sharing. It functions as a wiki—all members of the School of Art community have the ability to add new, and edit most existing content.
        </ContentBox>
        <div className="bg-gray-100 p-4 mt-4 shadow-lg bg-opacity-30 rounded-lg">
          <h2 className="text-2xl font-bold mb-2 text-white">On This Page</h2>
          <NavigationButton label="Happening at SOA" onClick={() => navigate("./events")} />
          <ContentBox>Content related to happenings at the Yale School of Art, including events, announcements, and more...</ContentBox>
          <NavigationButton label="Community Bulletin Board" onClick={() => navigate("./bulletin_board")} />
          <ContentBox>Updates and notices posted by the School of Art community, providing a platform for communication among students, faculty, and staff.</ContentBox>
          <NavigationButton label="Calendars & Newsletters" onClick={() => navigate("./calendars")} />
          <ContentBox>Access to school calendars and newsletters to stay updated on events and information shared within the community.</ContentBox>
        </div>  
      </div>
    </MainContainer>
  </>
  );
}

export default IndexPage;