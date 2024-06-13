import React, { useState } from "react";
import Img from "./img";
import Text from "./text";
import Button from "./SkillButton/index";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "EliteBluPrint",
    description: "Software Development Group Project: Developed a Machine Learning based web application that can generate 2D housing floor plans using natural language input (NLP). The application allows users to generate floor plans, view the generated floor plans, and download the generated floor plans",
    techStack: ["React JS", "Mongo DB", "Firebase", "Python", "Flask", "Node JS", "Express JS", "Tailwind CSS", "Material UI", "Tensorflow", "Keras"],
    imgSrc: "images/elitebluprint.jpg",
    link: "https://elitebluprint.live",
    category: "Academic"
  },
  {
    id: 2,
    title: "MERN Note Taking Application",
    description: "Developed a full-stack note-taking application using the MERN stack with CRUD operations. The application allows users to create, read, update, and delete notes",
    techStack: ["React JS", "Mongo DB", "CSS", "Node JS", "Express JS"],
    imgSrc: "images/note.jpg",
    link: "https://github.com/salmanfaraj06/MERN-NOTE-APP",
    category: "Personal"
  },
  {
    id: 3,
    title: "React Smart Home Dashboard",
    description: "Developed a smart home dashboard using React.js with clerk authentication. The dashboard displays real-time Weather data from the weather API, Time, and allows users to control smart home devices",
    techStack: ["React JS", "Railway API", "Tailwind CSS"],
    imgSrc: "images/smarthome.jpg",
    link: "https://smart-home-application-react.netlify.app/",
    category: "Personal"
  },
  {
    id: 4,
    title: "React Blog Website",
    description: "Developed a blog website about Chat GPT using React.js.",
    techStack: ["React JS", "CSS"],
    imgSrc: "images/blog.jpg",
    link: "https://react-gpt3-website.netlify.app/",
    category: "Personal"
  },
  {
    id: 5,
    title: "MERN Social Media Application",
    description: "Developed a social media application using the MERN stack with CRUD operations. The application allows users to upload, view, like, and delete posts",
    techStack: ["React JS", "Mongo DB", "Tailwind CSS", "Node JS", "Express JS", "Material UI"],
    imgSrc: "images/chatapp.jpg",
    link: "https://github.com/salmanfaraj06/memories-application",
    category: "Personal"
  }
];

const ProjectCard = ({ project }) => (
  <div className="flex flex-col bg-white-A700 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
    <Img className="h-80 sm:h-40 w-full object-cover rounded-t-lg" src={project.imgSrc} alt={project.title} />
    <div className="flex flex-col p-5">
      <Text className="text-xl text-black-900 mb-2" size="txtSoraBold32">{project.title}</Text>
      <Text className="text-sm text-black-900 mb-4" size="txtSoraRegular16">{project.description}</Text>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <Button key={index} shape="round" className="font-medium  text-white-A700 min-w-[79px]">
            {tech}
          </Button>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black flex items-center hover:text-blue-500">
        <span>View Project</span>
        <FaExternalLinkAlt className="ml-2" />
      </a>
    </div>
  </div>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projectData.map(project => project.category))];

  const filteredProjects = selectedCategory === "All"
    ? projectData
    : projectData.filter(project => project.category === selectedCategory);

  return (
    <div id="project" className="bg-black-900 flex flex-col items-start justify-start md:px-10 px-20 sm:px-5 py-[60px] w-full">
      <div className="flex flex-col gap-5 items-start justify-start max-w-7xl mx-auto sm:px-5 w-full">
        <div className="flex flex-row gap-4 items-center justify-center py-5 w-full">
          <Text className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-auto" size="txtSoraRegular48WhiteA700">
            My
          </Text>
          <Text className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-0.96px] w-auto" size="txtSoraExtraBold48WhiteA700">
            Projects
          </Text>
        </div>
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-full ${selectedCategory === category ? "bg-white-A700 text-black-900" : "bg-gray-600 text-gray-300"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 w-full">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
