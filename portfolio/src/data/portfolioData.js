import quickchat from "../assets/images/quickchat.png";
import taskmanager from "../assets/images/taskmanager.png";
import portfolio from "../assets/images/portfolio.png";

export const personalInfo = {
  name: "Raj Kumar Nishad",
  title: "MERN Stack Developer",
  location: "Ayodhya, Uttar Pradesh",
  email: "officialraj403@gmail.com",
  phone: "9161332085",
  github: "https://github.com/Rajnishad001",
  linkedin: "https://www.linkedin.com/in/raj-kumar-nishad-17582a30a/",
  resume:
    "https://drive.google.com/file/d/1cdI1_eU_OSPB2yo2sG39U3xYBUcy_Ewh/view",
};

export const skills = {
  frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "Postman"],
};

export const projects = [
  {
    title: "Task Manager App",
    image: taskmanager,
    description:
      "A modern MERN stack task management application featuring task creation, updates, status tracking and responsive dashboard UI.",
    github: "https://github.com/Rajnishad001/TaskManager",
    demo: "#",
  },

  {
    title: "QuickChat",
    image: quickchat,
    description:
      "Real-time chat application with modern UI, instant messaging and scalable architecture built using modern web technologies.",
    github: "https://github.com/Rajnishad001/QuickChate",
    demo: "#",
  },

  {
    title: "Portfolio Website",
    image: portfolio,
    github: "https://github.com/Rajnishad001/Port",
     description:
      "A modern and responsive portfolio website built using React, Vite, and Tailwind CSS. It showcases my skills, projects, GitHub profile, resume, and contact information with EmailJS integration."
  },
];