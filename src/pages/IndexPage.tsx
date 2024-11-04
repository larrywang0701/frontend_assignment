import { useNavigate } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import PageHeader from "../components/PageHeader";
import ContentBox from "../components/ContentBox";
import NavigationButton from "../components/NavigationButton";

// The Home page
function IndexPage() {

  const navigate = useNavigate();

  interface ContentProps {
    label: string,
    description: string,
    url: string,
  }

  const Content: React.FC<ContentProps> = ({label, description, url}) => {
    return(
    <div>
      <NavigationButton label={label} onClick={() => navigate(url)} />
      <ContentBox>{description}</ContentBox>
    </div>
    );
  }

  // The contents to be shown in the page
  const contentArray = [
    {
      label: "Happening at SOA",
      description: "Events that happen at the Yale School of Art",
      url: "./events"
    },
    {
      label: "Community Bulletin Board",
      description: "Updates and notices posted by the School of Art community, providing a platform for communication among students, faculty, and staff.",
      url: "./bulletin_board"
    },
    {
      label: "Calendars & Newsletters",
      description: "Access to school calendars and newsletters to stay updated on events and information shared within the community.",
      url: "./calendars"
    }
  ]

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
          {contentArray.map((content, index) =>
            <Content
              key={index}
              label={content.label}
              description={content.description}
              url={content.url}
            />
          )}
        </div>  
      </div>
    </MainContainer>
  </>
  );
}

export default IndexPage;