import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">SUPCOM CyberSec</h3>
            <p className="text-gray-300">
              The official cybersecurity club of SUPCOM, fostering security awareness and skills.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-cyan-400 transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-cyan-400 transition">About</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-cyan-400 transition">Events</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-cyan-400 transition">Team</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Activities</h4>
            <ul className="space-y-2">
              <li><a href="/ctf" className="text-gray-300 hover:text-cyan-400 transition">CTF Competitions</a></li>
              <li><a href="/workshops" className="text-gray-300 hover:text-cyan-400 transition">Workshops</a></li>
              <li><a href="/talks" className="text-gray-300 hover:text-cyan-400 transition">Guest Talks</a></li>
              <li><a href="/research" className="text-gray-300 hover:text-cyan-400 transition">Research</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com/supcomcybersec" className="text-gray-300 hover:text-cyan-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com/supcomcybersec" className="text-gray-300 hover:text-cyan-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com/company/supcomcybersec" className="text-gray-300 hover:text-cyan-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/supcomcybersec" className="text-gray-300 hover:text-cyan-400 transition">
                <FaGithub size={20} />
              </a>
              <a href="mailto:cybersec@supcom.tn" className="text-gray-300 hover:text-cyan-400 transition">
                <FaEnvelope size={20} />
              </a>
            </div>
            <p className="text-gray-300">
              SUPCOM Campus<br />
              City, Country<br />
              Email: cybersec@supcom.tn
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SUPCOM Cybersecurity Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;