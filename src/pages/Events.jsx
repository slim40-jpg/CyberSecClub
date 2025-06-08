import { events } from '../data';
import EventCard from '../components/EventCard';

const Events = () => {
  return (
    <div className="events-page">
      <div className="container">
        <h1>Our Events</h1>
        <div className="events-list">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;