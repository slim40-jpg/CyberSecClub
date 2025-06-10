const members = [
  {
    id: 1,
    name: "Slim Selmi",
    position: "Chair",
    image: "/members/slim_selmi.jpg",
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
    image: "/members/sourour_jaouadi.jpg",
    bio: "Supports the Chair and takes responsibility in their absence",
    fb: "https://www.facebook.com/sourour.jawadi",
    insta: "https://www.instagram.com/sourour_jawadi_/",
    linkedin: "https://www.linkedin.com/in/sourour-jaouadi/",
    github: "https://github.com/sourourjaouadi"
  },
  // Technical Team (3 members)
  {
    id: 4,
    name: "Zayd Ben Fadhel",
    position: "Technical Lead",
    image: "/members/zayd_bf.jpg",
    bio: "Leads technical workshops and cybersecurity training sessions",
    fb: "https://www.facebook.com/zayd.benfadhel",
    insta: "https://www.instagram.com/zaydbenfathel/",
    linkedin: "https://www.linkedin.com/in/zaydbenfadhel/",
    github: "https://github.com/"
  },
  {
    id: 3,
    name: "Ghassen Dallegi",
    position: "Technical Member",
    image: "/members/ghassen_dallegi.jpg",
    bio: "Specializes in network security and penetration testing",
    fb: "https://www.facebook.com/ghassen.dalleji.2025",
    insta: "https://www.instagram.com/ghassen5817/",
    linkedin: "https://www.linkedin.com/in/ghassen-dalleji-742028343/",
    github: "https://github.com/"
  },
  {
    id: 5,
    name: "Med Yessine Aifa",
    position: "Technical Member",
    image: "/members/med_yassine_aifa.jpg",
    bio: "Focuses on cryptography and secure software development",
    fb: "https://www.facebook.com/med.yessine.aifa",
    insta : "https://instagram.com/amira.chen",
    linkedin: "https://linkedin.com/in/karim-bouazizi",
    github: "https://github.com/karimbz"
  },
  {
    id: 6,
    name: "Talel Khemiri",
    position: "General Secretary",
    image: "/members/talel_khemiri.jpg",
    bio: "Manages club documentation, minutes, and official records",
    fb: "https://facebook.com/amira.chennoufi",
    insta: "https://instagram.com/amira.chen",
    linkedin: "https://linkedin.com/in/amira-chennoufi",
    github: "https://github.com/youssefhm"
  },
  {
    id: 7,
    name: "Med Yassine Amri",
    position: "Treasurer",
    image: "/members/yessine_amri.jpg",
    bio: "Manages club documentation, minutes, and official records",
    fb: "https://facebook.com/amira.chennoufi",
    insta: "https://instagram.com/amira.chen",
    linkedin: "https://linkedin.com/in/amira-chennoufi",
    github: "https://github.com/youssefhm"
  },
  {
    id: 8,
    name: "Nour Ben Abdejlil",
    position: "RH (Human Resources)",
    image: "/members/nour_ba.jpg",
    bio: "Handles member relations, recruitment and team coordination",
    fb: "https://facebook.com/youssef.hammami",
    insta: "https://instagram.com/youssef.hm",
    linkedin: "https://linkedin.com/in/youssef-hammami",
    github: "https://github.com/youssefhm"
  },
  {
    id: 9,
    name: "Mohamed Aziz Saoudi",
    position: "RP (Public Relations)",
    image: "/members/aziz_saoudi.jpg",
    bio: "Manages external communications and partnerships",
    fb: "https://facebook.com/nour.haddad",
    insta: "https://instagram.com/nour.haddad",
    linkedin: "https://linkedin.com/in/nour-haddad",
    github: "https://github.com/youssefhm"
  },
  {
    id: 10,
    name: "Aziz Karray",
    position: "Design Manager",
    image: "/members/aziz_karray.jpg",
    bio: "Creates visual content, logos and event materials",
    fb: "https://facebook.com/samir.trabelsi",
    insta: "https://instagram.com/samir.design",
    linkedin: "https://linkedin.com/in/samir-trabelsi",
    github: "https://github.com/samirtr"
  },
  {
    id: 11,
    name: "Amina Kallel",
    position: "Media Manager",
    image: "/members/amina_kallel.jpg",
    bio: "Handles social media accounts and content strategy",
    fb: "https://facebook.com/leila.abid",
    insta: "https://instagram.com/leila.media",
    linkedin: "https://linkedin.com/in/leila-abid",
    github: "https://github.com/youssefhm"
  }
];

/* Export the complete list */
export default members;

// Helper functions to filter by position
export const getByPosition = (position) => members.filter(member => member.position === position);
export const getLeadershipTeam = () => members.filter(member => 
  member.position === "Chair" || member.position === "Vice-Chair"
);
export const getTechnicalTeam = () => members.filter(member => 
  member.position.includes("Technical")
);
export const getAdministrativeTeam = () => members.filter(member => 
  ["General Secretary", "Treasurer", "RH", "RP"].includes(member.position)
);
export const getMarketingTeam = () => members.filter(member => 
  ["Design Manager", "Media Manager"].includes(member.position)
);