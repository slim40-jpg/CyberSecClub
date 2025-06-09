import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaInstagram 
} from 'react-icons/fa';

import members from '../data/members';
import {
  getLeadershipTeam,
  getTechnicalTeam,
  getAdministrativeTeam,
  getMarketingTeam
} from '../data/members';

const TeamSection = ({ title, members, className = '' }) => {
  return (
    <section className={className}>
      <h2 className="text-2xl font-bold mb-8 text-cyan-400">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map(member => (
          <div key={member.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
            <div className="flex flex-col items-center text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full object-cover border-2 border-cyan-400 mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-cyan-400 mb-1">{member.position}</p>
              <p className="text-gray-400 text-sm mb-3">{member.major} - {member.year}</p>
              <p className="text-gray-300 mb-4">{member.bio}</p>
              
              <div className="flex space-x-3">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    <FaLinkedin size={20} />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100">
                    <FaGithub size={20} />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                    <FaTwitter size={20} />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                    <FaInstagram size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TeamPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-cyan-400">Team</span>
        </h1>
        
        {/* Leadership Team */}
        <TeamSection 
          title="Leadership" 
          members={getLeadershipTeam()} 
          className="mb-16"
        />
        
        {/* Technical Team */}
        <TeamSection 
          title="Technical Team" 
          members={getTechnicalTeam()} 
          className="mb-16"
        />
        
        {/* Administrative Team */}
        <TeamSection 
          title="Administrative Team" 
          members={getAdministrativeTeam()} 
          className="mb-16"
        />
        
        {/* Marketing Team */}
        <TeamSection 
          title="Marketing Team" 
          members={getMarketingTeam()} 
        />
      </div>
    </div>
  );
};

export default TeamPage;