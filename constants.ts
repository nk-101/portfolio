
import type { SkillCategory, Project, Experience, Education, Certificate, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Nidhi Kumar",
  title: "Computer Engineering Student",
  location: "Pune, India",
  email: "nidhikumar.scoe.comp@gmail.com",
  linkedin: "https://www.linkedin.com/in/nidhi-kumari-/",
  github: "https://github.com/nidhikumari-.",
  //profileSummary: "Computer Engineering graduate (2025) skilled in Python, Java, and C++ with a strong grasp of data structures, OOP, and operating systems. Experienced in developing, debugging, and testing software in Linux environments. Passionate about open source, teamwork, and building scalable AI-driven applications."
  profileSummary: "Computer Engineering graduate skilled in AI/ML, web development, and networking. Experienced in building deep learning models, LLM-based systems, and scalable full-stack applications. Proficient in Python, C++, and MERN stack, with hands-on exposure to Cisco network design and cloud deployment. Passionate about solving real-world problems through intelligent and efficient tech solutions."

};

export const SKILLS_DATA: SkillCategory[] = [
  { title: 'Programming Languages', skills: [{ name: 'Python' }, { name: 'C++' }, { name: 'Java' }] },
  { title: 'AI / ML & Data Science', skills: [{ name: 'Deep Learning' }, { name: 'Computer Vision' }, { name: 'Natural Language Processing (NLP)' }, { name: 'LLMs (Large Language Models)' }, { name: 'RAG (Retrieval-Augmented Generation)' }, { name: 'Prompt Engineering' }, { name: 'LangChain' }, { name: 'CNNs' }, { name: 'ML Algorithms' }] },
  { title: 'Web Technologies', skills: [{ name: 'React.js' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'MongoDB' }, { name: 'Flask' }, { name: 'REST APIs' }, { name: 'Tailwind CSS' }, { name: 'TypeScript' }] },
  { title: 'Cloud & Networking', skills: [{ name: 'Google Cloud' }, { name: 'Cisco Networking' }, { name: 'Network Security' }, { name: 'VLANs' }, { name: 'DHCP' }, { name: 'Firewalls' }] },
  { title: 'Frameworks & Tools', skills: [{ name: 'TensorFlow' }, { name: 'PyTorch' }, { name: 'Git & GitHub' }, { name: 'Docker' }, { name: 'VS Code' }] },
  { title: 'Core CS Concepts', skills: [{ name: 'Data Structures' }, { name: 'Algorithms' }, { name: 'Object-Oriented Programming' }, { name: 'Operating Systems' }] },
  { title: 'Software Development', skills: [{ name: 'Agile Methodologies' }, { name: 'Debugging' }, { name: 'Testing' }, { name: 'API Integration' }] }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'From Pixels to Plants – Aquatic Ecosystem Assessment with AI',
    description:
      'Developed a DeepLabV3+ (ResNet-50) model to segment 32 aquatic plant species from UAV images. Achieved 96% accuracy and 0.78 IoU, deployed via Flask and MongoDB for scalable ecosystem monitoring.',
    link: 'https://github.com/nk-101/From-Pixels-to-Plants-Revolutionizing-Aquatic-Ecosystem.git',
    tags: ['DeepLabV3+', 'ResNet-50', 'Flask', 'MongoDB']
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Designed and developed a modern portfolio using React (Vite + TypeScript) and Tailwind CSS to showcase skills, projects, and achievements. Fully responsive and supports dark mode.',
    link: 'https://portfolio-five-zeta-65.vercel.app/',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vite']
  },
  {
    title: 'Weather Now – Real Time Weather App',
    description:
      'Created a weather web app using React (Vite + TypeScript) that displays real-time weather, temperature, and forecast using the Open-Meteo API with fuzzy city search and responsive UI.',
    link: 'https://weather-now-dz44.vercel.app/',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vercel']
  },
  {
    title: 'Chitzy – Real Time Chat Application',
    description:
      'Built a secure real-time chat application using the MERN stack with Socket.io for instant messaging and JWT authentication. Optimized backend APIs for performance and scalability.',
    link: 'https://github.com/nk-101/MERN-Stack-Project.git',
    tags: ['MERN', 'Socket.io', 'JWT', 'MongoDB']
  },
  {
    title: 'Face Recognition Attendance System',
    description:
      'Implemented a Python + OpenCV system for real-time face detection and recognition to automate attendance marking with improved accuracy and security.',
    link: 'https://github.com/nk-101/Face-Recognition-Attendance-System.git',
    tags: ['Python', 'OpenCV', 'Face Recognition']
  },
  {
    title: 'RoboSpeaker – Text to Speech Assistant',
    description:
      'Developed a simple Python-based text-to-speech assistant using pyttsx3 for converting text into natural-sounding audio, designed for accessibility and automation.',
    link: 'https://github.com/nk-101/RoboSpeaker.git',
    tags: ['Python', 'pyttsx3', 'Speech Synthesis']
  },
  {
  title: 'Cisco Network Infrastructure Design',
  description:
    'Designed and configured a secure multi-branch network using Cisco technologies at STEAG Energy Services. Implemented VLANs, DHCP, NAT, and port security with real-world deployment experience.',
  link: 'https://github.com/nk-101/Network-Infrastructure-Design',
  tags: ['Cisco', 'Networking', 'Firewall', 'VLAN', 'DHCP']
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
    name: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    year: '2025',
    description: 'Earned Oracle Cloud certification for data science expertise in OCI, covering model deployment, AI workflows, and analytics.',
    imageUrl: '/oracle-cert.png'
  },
  {
    name: 'Prompt Design in Vertex AI – Skill Badge',
    issuer: 'Google Cloud Skills Boost',
    year: '2025',
    description: 'Gained expertise in prompt engineering, LLM integration, and multimodal generative AI using Vertex AI.',
    imageUrl: '/vertex-ai-badge.png'
  },
  {
    name: 'Tata Data Visualisation – Job Simulation',
    issuer: 'Tata Group (Forage)',
    year: '2025',
    description: 'Completed a virtual job simulation focused on business data visualization and storytelling using Tableau and Power BI.',
    imageUrl: '/tata-forage.png'
  },
  {
    name: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud Skills Boost',
    year: '2023',
    description: 'Completed foundational Google Cloud training covering cloud architecture, APIs, and GenAI workflows under GDSC Study Jam 2023.',
    imageUrl: '/google-cloud-foundations.jpg'
  },
  {
    name: 'Generative AI',
    issuer: 'LinkedIn Learning',
    year: '2024',
    description: 'Completed certification in Generative AI, exploring prompt design, LLMs, and ethical AI applications.',
    imageUrl: '/linkedin-genai.jpeg'
  },
  {
    name: 'MERN Stack Web Development',
    issuer: 'Wisdom Sprouts IT Training Hub',
    year: '2024',
    description: 'Completed full-stack MERN development training focused on building scalable, interactive, and real-time web applications.',
    imageUrl: '/mern-webdev.png'
  },
  {
    name: 'Artificial Intelligence',
    issuer: 'YHills',
    year: '2023',
    description: 'Completed professional training on Artificial Intelligence, covering ML algorithms, neural networks, and model evaluation.',
    imageUrl: '/yhills-ai.png'
  },
  {
    name: 'Core Java',
    issuer: 'N Infinity Info Solutions',
    year: '2023',
    description: 'Completed Core Java training covering OOP concepts, exception handling, and data structure fundamentals.',
    imageUrl: '/core-java.png'
  }
];


export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'Research Paper Accepted - ATSA 2024',
    description:
      'Manuscript titled "AI and ML in Water Quality Analysis: A Review" accepted for presentation at the 5th International Conference on Advanced Technologies for Societal Applications (ATSA 2024), SVERI’s College of Engineering, Pandharpur.',
  },
  {
    title: 'Research Presentation - ICRAES 2025',
    description:
      'Presented paper "From Pixels to Plants: Revolutionizing Aquatic Ecosystem Using AI" at the International Conference on Recent Advances in Engineering and Science (ICRAES 2025), Bharati Vidyapeeth (Deemed University), Pune.',
    
  },
  {
    title: '5★ in Python - HackerRank',
    description:
      'Achieved 5-star rating in Python programming, demonstrating strong coding and problem-solving proficiency.',
  },
  {
    title: '3★ in SQL - HackerRank',
    description:
      'Earned 3-star rating in SQL for database querying and optimization challenges on HackerRank.',
  },
];
