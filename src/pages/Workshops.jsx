import { events } from '../data';
import EventCard from '../components/EventCard';

const Workshops = () => {
  const workshops = events.filter(event => 
    event.title.toLowerCase().includes('workshop') || 
    event.description.toLowerCase().includes('workshop')
  );
  
  return (
    <div className="workshops-page">
      <div className="container">
        <h1>Workshops</h1>
        <p>Join our hands-on workshops to learn practical cybersecurity skills.</p>
        <div className="workshops-list">
          {workshops.map(workshop => (
            <EventCard key={workshop.id} event={workshop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops;