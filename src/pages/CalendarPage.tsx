import MainContainer from "../components/MainContainer";
import PageHeader from "../components/PageHeader";
import ContentBox from "../components/ContentBox";
import NavigationButton from "../components/NavigationButton";

// The Calendars & Newsletters page (./calendars)
function CalendarPage() {

  interface ContentProps {
    label: string,
    description: string,
    url: string,
  }

  const Content: React.FC<ContentProps> = ({label, description, url}) => {
    return(
    <div>
      <NavigationButton label={label} onClick={() => window.location.href = url} />
      <ContentBox>{description}</ContentBox>
    </div>
    );
  }

  // The contents to be shown in the page
  const contentArray = [
    {
      label: "Public Calendar >>",
      description: "Containing those events open to the public.",
      url: "https://www.art.yale.edu/public-events"
    },
    {
      label: "School of Art in the World >>",
      description: "Containing events and exhibitions hosted by, led by, or featuring members of the School of Art community.",
      url: "https://www.art.yale.edu/soa-in-the-world"
    },
    {
      label: "Community Calendar >>",
      description: "Containing those events open only to the SoA community.",
      url: "https://www.art.yale.edu/calendar"
    },
    {
      label: "Sign up for our newsletters >>",
      description: `News From New Haven — A public monthly newsletter about news and events happening on campus.

Week at SoA — A weekly community-only email listing SoA events as well as public and university events in New Haven. `,
      url: "http://eepurl.com/c4lFMn"
    }
  ]

  return (
  <>
    <MainContainer>
      <PageHeader>Calendars & Newsletters</PageHeader>
      <div className="flex-1 p-6">
        <ContentBox title="Calendars & Newsletters">
          You may find the following useful resources here:
        </ContentBox>
        <div className="bg-gray-100 p-4 mt-4 shadow-lg bg-opacity-30 rounded-lg">
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

export default CalendarPage;