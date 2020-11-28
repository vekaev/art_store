import React from 'react';

const EventCard = ({ info }) => {
  return <h2>{info?.title}</h2>;
};

export default function EventsPage({ events = [] }) {
  console.log(events);
  return (
    <>
      {events.map((item, idx) => (
        <EventCard key={idx} info={item} />
      ))}
    </>
  );
}
