
import type { SkillCategory, Project, Experience, Education, Certificate, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Nidhi Kumar",
  title: "Computer Engineering Student",
  location: "Pune, India",
  email: "nidhikumar.scoe.comp@gmail.com",
  linkedin: "https://www.linkedin.com/in/nidhi-kumari-/",
  github: "https://github.com/nidhikumari-.",
  profileSummary: "Computer Engineering graduate (2025) skilled in Python, Java, and C++ with a strong grasp of data structures, OOP, and operating systems. Experienced in developing, debugging, and testing software in Linux environments. Passionate about open source, teamwork, and building scalable AI-driven applications."
};


export const SKILLS_DATA: SkillCategory[] = [
  { title: 'Programming Languages', skills: [{ name: 'Python' }, { name: 'Java' }, { name: 'C++' }] },
  { title: 'Web Technologies', skills: [{ name: 'React.js' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'HTML' }, { name: 'CSS' }, { name: 'REST APIs' }] },
  { title: 'Databases', skills: [{ name: 'MySQL' }, { name: 'MongoDB' }] },
  { title: 'Frameworks & Tools', skills: [{ name: 'Flask' }, { name: 'TensorFlow' }, { name: 'PyTorch' }, { name: 'Git' }, { name: 'Kubernetes' }] },
  { title: 'Operating Systems', skills: [{ name: 'Linux' }, { name: 'Windows' }] },
  { title: 'Software Development', skills: [{ name: 'Agile Methodologies' }, { name: 'Debugging' }, { name: 'Testing' }, { name: 'Version Control (Git/GitHub)' }] },
  { title: 'Core CS Concepts', skills: [{ name: 'Data Structures' }, { name: 'Algorithms' }, { name: 'Object-Oriented Programming' }, { name: 'Operating Systems' }] },
  { title: 'AI/ML & Data Science', skills: [{ name: 'Deep Learning' }, { name: 'Computer Vision' }, { name: 'NLP' }, { name: 'ML Algorithms' }, { name: 'CNNs' }] },
  { title: 'Cloud & Networking', skills: [{ name: 'Google Cloud' }, { name: 'Oracle Cloud' }, { name: 'Cisco Networking' }, { name: 'VLANs' }, { name: 'DHCP' }, { name: 'Firewalls' }] },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Weather Now - Real Time Weather App',
    description: 'Built using React (Vite + TypeScript) and Tailwind CSS to fetch live weather data via Open-Meteo Geocoding & Forecast APIs. Implemented fuzzy search and efficient state management.',
    link: '#',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vercel']
  },
  {
    title: 'Chitzy - Real Time Chat Application',
    description: 'Developed a MERN stack app with Socket.io for instant messaging and JWT-based authentication. Optimized backend APIs for secure, concurrent communication.',
    link: '#',
    tags: ['MERN', 'Socket.io', 'JWT', 'MongoDB']
  },
  {
    title: 'Aquatic Ecosystem Assessment with AI',
    description: 'Applied DeepLabV3+ (ResNet-50) for image segmentation, achieving 96% accuracy and 0.78 IoU. Deployed a Flask + MongoDB pipeline for scalable analysis.',
    link: '#',
    tags: ['DeepLabV3+', 'ResNet-50', 'Flask', 'MongoDB']
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'Created a Python + OpenCV application for real-time face detection and recognition, focusing on improving model accuracy and reliability.',
    link: '#',
    tags: ['Python', 'OpenCV', 'Face Recognition']
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Networking & Cisco Firewall Intern',
    company: 'Steag Energy India Private Limited',
    duration: 'June 2024 - July 2024',
    description: [
      'Configured and managed Cisco-based networks with VLANs, DHCP, and firewall policies to improve security.',
      'Strengthened systems through troubleshooting and optimisation, ensuring enterprise-level performance.',
      'Gained hands-on exposure to infrastructure design, problem-solving, and secure communication setups.'
    ]
  },
  {
    role: 'MERN Stack Development Intern',
    company: 'ScaleFull Technologies',
    duration: 'Dec 2023 - Jan 2024',
    description: [
      'Developed and integrated backend and frontend modules for web applications using MERN stack.',
      'Implemented APIs, authentication, and database operations to enhance application functionality.',
      'Collaborated on debugging, testing, and optimisation for scalable, real-time applications.'
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: 'Sinhgad College of Engineering',
    degree: 'Bachelor of Engineering, Computer Science',
    result: 'CGPA: 8.35/10',
    year: 'June 2025'
  },
  {
    institution: 'Shikshan Maharshi Lt. S. Jiwtode Jr. College',
    degree: 'Higher Secondary School Education',
    result: 'Percentage: 89.83%',
    year: '2021'
  },
  {
    institution: 'BJM Carmel Academy',
    degree: 'Central Board of Secondary Education',
    result: 'Percentage: 81.80%',
    year: '2019'
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    year: '2024',
    description: 'Mastered foundational networking concepts, including IP addressing, network security, and router/switch configuration.',
    imageUrl: 'https://placehold.co/800x600/1e293b/94a3b8/png?text=CCNA+Certificate',
  },
  {
    name: 'MERN Stack Development',
    issuer: 'ScaleFull Technologies',
    year: '2024',
    description: 'Gained expertise in building full-stack web applications using MongoDB, Express.js, React, and Node.js.',
    imageUrl: 'https://placehold.co/800x600/1e293b/94a3b8/png?text=MERN+Stack+Certificate',
  },
  {
    name: 'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',
    issuer: 'Oracle',
    year: '2023',
    description: 'Demonstrated foundational knowledge of core cloud computing concepts and Oracle Cloud Infrastructure services.',
    imageUrl: 'https://placehold.co/800x600/1e293b/94a3b8/png?text=Oracle+Cloud+Certificate',
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'Smart India Hackathon 2023 Finalist',
    description: 'Selected as a finalist for proposing an innovative AI-driven solution for sustainable urban planning.',
  },
  {
    title: 'Top 5% on CodeChef',
    description: 'Achieved a high ranking on CodeChef through consistent participation in competitive programming contests.',
  },
  {
    title: 'Dean\'s List for Academic Excellence',
    description: 'Recognized on the Dean\'s List for three consecutive semesters for outstanding academic performance.',
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to a popular open-source machine learning library, with a pull request merged for a bug fix.',
  },
];
