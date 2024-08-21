import React from 'react';
import { AccessTime } from '@mui/icons-material';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Tournament',
      description: 'Football match',
      location: 'British school',
      date: '12 Jan 24, 09:00 AM'
    },
    {
      title: 'Tournament',
      description: 'Football match',
      location: 'British school',
      date: '12 Jan 24, 09:00 AM'
    }
  ];

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm"
        >
          <h3 className="text-sm font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-500">{event.description}</p>
          <p className="text-sm text-gray-400">{event.location}</p>
          <div className="flex items-center mt-2 text-sm text-gray-400">
            <AccessTime className="mr-1 text-gray-500" fontSize="small" />
            {event.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
