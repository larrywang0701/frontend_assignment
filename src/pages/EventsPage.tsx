import EventCard from "../components/EventCard";
import MainContainer from "../components/MainContainer";
import PageHeader from "../components/PageHeader";

// The event data from the official webpage
const events = [
  {
    day: "16 - 04",
    month: "Nov",
    title: `"Threshold" — Undergraduate Exhibition`,
    description: "Thresholds: Fall 2024 Undergraduate ShowOctober 16 – November 4, 2024 Public re...",
    location: "1156 Chapel Street",
    time: "TBA",
    image: "https://ucarecdn.com/7e906111-9ba9-4f35-a36a-ed63508adaef/-/resize/120/" 
  },
  {
    day: "04",
    month: "Nov",
    title: "Celebrating Jane Davis Doggett, MFA ’56",
    description: "Hosted by Haas Arts Library Monday, Nov. 44:00 pm-6:00 pmHaas Arts Library, Grea...",
    location: "Haas Arts Library",
    time: "4:00 PM - 6:00 PM EST"
  },
  {
    day: "04",
    month: "Nov",
    title: "Mondays at Beinecke: 1924 and the Centennial of the Dixwell Community House",
    description: "Hosted by Beinecke Library Monday, November 4, 20244:00 PM - 5:00 PMOn Zoom, reg...",
    location: "Online (Zoom)",
    time: "4:00 PM - 5:00 PM EST"
  },
  {
    day: "04",
    month: "Nov",
    title: "Visiting Artist Lecture with SoA Alum Robert Andy Coombs",
    description: "Monday, November 45PM-6:30PM36 Edgewood Avenue, Room 204   Robert Andy Coombs i...",
    location: "36 Edgewood Ave",
    time: "5:00 PM - 6:30 PM EST",
    image: "https://ucarecdn.com/4eb3bbba-61f0-45ce-a7b5-0152b010857a/-/crop/1685x1684/0,349/-/preview/-/resize/120/"
  },
  {
    day: "04",
    month: "Nov",
    title: "Figure Drawing Workshop",
    description: "Monday, November 46-8 PM1156 Chapel Street, Room G01 Join the Painting/Printmak...",
    location: "1156 Chapel Street, Room G01",
    time: "6:00 PM - 8:00 PM EST",
    image: "https://ucarecdn.com/157c30ed-2dd2-427e-888c-9e335e737178/-/crop/1545x1546/0,0/-/preview/-/resize/120/"
  },
  {
    day: "04",
    month: "Nov",
    title: "Architectural Forum: Prof. Jack Halberstam (Columbia University)",
    description: "Hosted by the School of Architecture and the Department of the History of Art Mo...",
    location: "180 York Street, New Haven, CT 06511",
    time: "6:30 PM - 8:00 PM EST",
  },
];

// The Happening at SOA page
function EventsPage() {
  return (
  <>
    <MainContainer>
      <PageHeader>Happening at SOA</PageHeader>
      <div className="relative flex flex-col items-center justify-center w-1/2 left-1/4 bg-gray-100 bg-opacity-30 max-h-full overflow-auto rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Upcoming Events</h1>
        <div>
          {events.map((event, index) => (
            <EventCard
              key={index}
              day={event.day}
              month={event.month}
              title={event.title}
              description={event.description}
              location={event.location}
              time={event.time}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </MainContainer>
  </>
  )
}

export default EventsPage;
