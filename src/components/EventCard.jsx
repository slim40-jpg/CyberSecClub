// src/components/EventCard.jsx
export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      {/* Add more event details */}
    </div>
  );
}