export const members = [
  {
    id: 1,
    name: "Slim Selmi",
    position: "Chair",
    image: "assets/images/members/slim_selmi.jpg",
    bio: "Overall responsibility for the club, strategic planning and external relations",
    fb: "https://www.facebook.com/salyme.selmi",
    insta: "https://www.instagram.com/selmislim14/",
    linkedin: "https://www.linkedin.com/in/slim-salmi-750932336/",
    github: "https://github.com/slim40-jpg/"
  },
  {
    id: 2,
    name: "Sourour Jawadi",
    position: "Vice-Chair",
    image: "/assets/images/members/sourour_jaouadi.jpg",
    bio: "Supports the Chair and takes responsibility in their absence",
    fb: "https://www.facebook.com/sourour.jawadi",
    insta: "https://www.instagram.com/sourour_jawadi_/",
    linkedin: "https://www.linkedin.com/in/sourour-jaouadi/",
    github: "https://github.com/sourourjaouadi"
  },
  // Technical Team (3 members)
  {
    id: 3,
    name: "Zayd Ben Fadhel",
    position: "Technical Lead",
    image: "/assets/images/members/zayd_bf.jpg",
    bio: "Leads technical workshops and cybersecurity training sessions",
    fb: "https://www.facebook.com/zayd.benfadhel",
    insta: "https://www.instagram.com/zaydbenfathel/",
    linkedin: "https://www.linkedin.com/in/zaydbenfadhel/",
    github: "https://github.com/ahmedtk"
  },
  {
    id: 4,
    name: "Ghassen Dallegi",
    position: "Technical Member",
    image: "assets/images/members/ghassen_dallegi.jpg",
    bio: "Specializes in network security and penetration testing",
    fb: "https://facebook.com/lina.marzouk",
    insta: "https://instagram.com/lina.mz",
    linkedin: "https://linkedin.com/in/lina-marzouk",
    github: "https://github.com/linamz"
  },
  {
    id: 5,
    name: "Karim Bouazizi",
    position: "Technical Member",
    image: "/images/members/tech3.jpg",
    bio: "Focuses on cryptography and secure software development",
    fb: "https://facebook.com/karim.bouazizi",
    insta : "https://instagram.com/amira.chen",
    linkedin: "https://linkedin.com/in/karim-bouazizi",
    github: "https://github.com/karimbz"
  },
  {
    id: 6,
    name: "Amira Chennoufi",
    position: "General Secretary",
    image: "/images/members/secretary.jpg",
    bio: "Manages club documentation, minutes, and official records",
    fb: "https://facebook.com/amira.chennoufi",
    insta: "https://instagram.com/amira.chen",
    linkedin: "https://linkedin.com/in/amira-chennoufi",
    github: "https://github.com/youssefhm"
  },
  {
    id: 7,
    name: "Youssef Hammami",
    position: "RH (Human Resources)",
    image: "/images/members/rh.jpg",
    bio: "Handles member relations, recruitment and team coordination",
    fb: "https://facebook.com/youssef.hammami",
    insta: "https://instagram.com/youssef.hm",
    linkedin: "https://linkedin.com/in/youssef-hammami",
    github: "https://github.com/youssefhm"
  },
  {
    id: 8,
    name: "Nour Haddad",
    position: "RP (Public Relations)",
    image: "/images/members/rp.jpg",
    bio: "Manages external communications and partnerships",
    fb: "https://facebook.com/nour.haddad",
    insta: "https://instagram.com/nour.haddad",
    linkedin: "https://linkedin.com/in/nour-haddad",
    github: "https://github.com/youssefhm"
  },
  {
    id: 9,
    name: "Samir Trabelsi",
    position: "Design Manager",
    image: "/images/members/design.jpg",
    bio: "Creates visual content, logos and event materials",
    fb: "https://facebook.com/samir.trabelsi",
    insta: "https://instagram.com/samir.design",
    linkedin: "https://linkedin.com/in/samir-trabelsi",
    github: "https://github.com/samirtr"
  },
  {
    id: 10,
    name: "Leila Abid",
    position: "Media Manager",
    image: "/images/members/media.jpg",
    bio: "Handles social media accounts and content strategy",
    fb: "https://facebook.com/leila.abid",
    insta: "https://instagram.com/leila.media",
    linkedin: "https://linkedin.com/in/leila-abid",
    github: "https://github.com/youssefhm"
  }
];

/* Export the complete list
export default members;
*/
// Helper functions to filter by position
export const getByPosition = (position) => members.filter(member => member.position === position);
export const getLeadershipTeam = () => members.filter(member => 
  member.position === "Chair" || member.position === "Vice-Chair"
);
export const getTechnicalTeam = () => members.filter(member => 
  member.position.includes("Technical")
);
export const getAdministrativeTeam = () => members.filter(member => 
  ["General Secretary", "RH", "RP"].includes(member.position)
);
export const getMarketingTeam = () => members.filter(member => 
  ["Design Manager", "Media Manager"].includes(member.position)
);