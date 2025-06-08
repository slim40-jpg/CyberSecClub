import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { members } from './data/members.js';
export default function MemberCard({ members }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={members.image} 
        alt={members.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{members.name}</h3>
        <p className="text-blue-600 font-medium">{members.position}</p>
        <p className="text-gray-600 mt-2">{members.bio}</p>
        
        <div className="flex mt-4 space-x-2">
          {members.fb && (
            <a href={members.fb} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 hover:text-blue-800" size={20} />
            </a>
          )}
          {members.insta && (
            <a href={members.insta} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 hover:text-pink-800" size={20} />
            </a>
          )}
          {members.linkedin && (
            <a href={members.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 hover:text-blue-700" size={20} />
            </a>
          )}
          {members.github && (
            <a href={members.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-800 hover:text-black" size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}