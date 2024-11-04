import React from 'react';

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  description: string;
  location: string;
  time: string;
  image?: string;
}

// The element for displaying an event in the Happening at SOA page. 
const EventCard: React.FC<EventCardProps> = ({ day, month, title, description, location, time, image }) => {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-md mb-4 border-l-4 border-blue-500">

      <div className="flex-shrink-0 text-center pr-4">
        <div className="text-xl font-bold">{day}</div>
        <div className="text-sm font-semibold text-gray-500">{month}</div>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>

        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">📍 {location}</span>
          <span>⏰ {time}</span>
        </div>
      </div>

      {image && (
        <div className="flex-shrink-0 pl-4">
          <img src={image} alt={title} className="w-16 h-16 rounded-md" />
        </div>
      )}
    </div>
  );
};

export default EventCard;