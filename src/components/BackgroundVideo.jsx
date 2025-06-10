import { useState, useEffect } from 'react';

const BackgroundVideo = ({ activeScene }) => {
  const [currentScene, setCurrentScene] = useState(activeScene);
  const [transitioning, setTransitioning] = useState(false);

  // Scene configurations
  const scenes = {
    home: '/videos/home2.mp4',
    team: '/videos/team.mp4',
    events: '/videos/hackathon.mp4',
    workshops: '/videos/workshop-room.mp4',
    contact: '/videos/cyber-city.mp4'
  };

  useEffect(() => {
    if (activeScene !== currentScene) {
      setTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentScene(activeScene);
        setTransitioning(false);
      }, 1000); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [activeScene]);

  return (
    <div className={`background-video-container ${transitioning ? 'fade-out' : 'fade-in'}`}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="background-video"
      >
        <source src={scenes[currentScene]} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default BackgroundVideo;