import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

import {
  getLeadershipTeam,
  getTechnicalTeam,
  getAdministrativeTeam,
  getMarketingTeam
} from '../data/members';

const MemberCard = ({ member }) => (
  <div className="member-card">
    <div className="member-content">
      <img
        src={member.image}
        alt={member.name}
        className="member-image"
      />
      <h3 className="member-name">{member.name}</h3>
      <p className="member-position">{member.position}</p>
      <p className="member-info">{member.major} - {member.year}</p>
      <p className="member-bio">{member.bio}</p>

      <div className="member-socials">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        )}
        {member.instagram && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  </div>
);

const TeamSection = ({ title, members }) => (
  <section className="team-section">
    <h2 className="team-title">{title}</h2>
    <div className="team-grid">
      {members.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  </section>
);

const TeamPage = () => (
  <div className="team-page">
    <h1 className="main-title">CYBER <span>SECURITY TEAM</span></h1>

    <TeamSection title="Leadership" members={getLeadershipTeam()} />
    <TeamSection title="Technical Team" members={getTechnicalTeam()} />
    <TeamSection title="Management Team" members={getAdministrativeTeam()} />
    <TeamSection title="Media & Design team" members={getMarketingTeam()} />
  </div>
);

export default TeamPage;
