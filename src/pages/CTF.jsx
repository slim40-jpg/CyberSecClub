import { events } from '../data';
import EventCard from '../components/EventCard';

const CTF = () => {
  const ctfs = events.filter(event => 
    event.title.toLowerCase().includes('ctf') || 
    event.description.toLowerCase().includes('capture the flag')
  );
  
  return (
    <div className="ctf-page">
      <div className="container">
        <h1>Capture The Flag</h1>
        <p>Test your hacking skills in our CTF competitions.</p>
        <div className="ctf-list">
          {ctfs.map(ctf => (
            <EventCard key={ctf.id} event={ctf} />
          ))}
        </div>
        <section className="ctf-info">
          <h2>What is CTF?</h2>
          <p>
            Capture The Flag (CTF) competitions are cybersecurity challenges where participants solve 
            security-related tasks to find hidden "flags". These competitions help develop real-world 
            cybersecurity skills in a fun, competitive environment.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CTF;