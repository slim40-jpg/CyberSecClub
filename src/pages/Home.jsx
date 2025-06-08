// src/pages/Home.jsx
import { events} from '../data';
import EventCard from '../components/EventCard';
import Navbar from '../components/NavBar';

const Home = () => {
  // Get featured events (first 3 or any filtering logic you want)
  const featuredEvents = events.slice(0, 3); // or filter by date, etc.
  
  return (
    <div className="home-page">
      <Navbar></Navbar>
      <section className="hero">
        <div className="container">
          <h1>Welcome to Cybersecurity Club</h1>
          <p>Join us in exploring the world of cybersecurity through workshops, competitions, and hands-on learning.</p>
          <a href="/events" className="btn">View Upcoming Events</a>
        </div>
      </section>

      <section className="upcoming-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;