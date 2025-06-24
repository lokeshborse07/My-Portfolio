import React, { useState } from 'react';
import { ExternalLink, Github, Maximize2, X } from 'lucide-react';
import GlowText from './GlowText';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
 const projects: Project[] = [
  {
    id: 5,
    title: "Ecommerce Website",
    description: "A modern, fully responsive ecommerce web application built using React.js and Tailwind CSS. Features include dynamic product listings, category filtering, product detail pages, interactive UI animations, and smooth routing using React Router. Designed with a clean UI and optimized for mobile and desktop. Ideal for showcasing real-world frontend skills.",
    image: "https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite", "Framer Motion"],
    demoUrl: "https://ecomm-website-react.vercel.app/",
    codeUrl: "https://github.com/lokeshborse07/Ecommerce-Website"
  },
  {
    id: 1,
    title: "PM Awas Yojna Portal",
    description: "A web-based housing assistance system developed for the Pradhan Mantri Awas Yojna scheme. It allows users to register, submit applications, track housing requests, and lodge complaints. Built with core web technologies and Java backend, it ensures a smooth and secure user experience with session tracking and form validation.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["HTML", "CSS", "JavaScript", "Java", "JSP", "Servlet", "JDBC", "MySQL"],
    demoUrl: "#",
    codeUrl: "https://github.com/lokeshborse07/PM-Awas_Yojna.git"
  },
  {
    id: 2,
    title: "E-Ration Services Platform",
    description: "A digital ration distribution platform enabling users to register, view ration card details, and request monthly rations online. The system ensures efficient distribution and transparency in public rationing using a modern MERN stack architecture with server-side rendering.",
    image: "https://images.pexels.com/photos/4202959/pexels-photo-4202959.jpeg",
    technologies: ["Next.js", "MongoDB", "React.js", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "https://github.com/lokeshborse07/E-Ration-Services.git"
  },
  {
    id: 3,
    title: "EV Charging Station Finder App",
    description: "A cross-platform mobile application that helps electric vehicle owners locate nearby charging stations in real-time. Features include slot availability, station details, navigation via maps, and secure login with Firebase authentication. Designed for user convenience and sustainable mobility.",
    image: "https://images.pexels.com/photos/9799997/pexels-photo-9799997.jpeg",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "Cloud Firestore"],
    demoUrl: "#",
    codeUrl: "https://github.com/lokeshborse07/EV_Charging"
  },
  {
    id: 4,
    title: "Vehicle Rental System",
    description: "A dynamic web-based platform for renting vehicles, allowing users to browse available cars/bikes, book rides, view rental history, and manage payments. The system includes an admin dashboard for managing vehicle inventory, user records, and bookings. Built using a Java Spring Boot backend with a responsive HTML/CSS/JS frontend and MySQL database.",
    image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    technologies: ["HTML", "CSS", "JavaScript", "Spring", "MySQL"],
    demoUrl: "#",
    codeUrl: "#"
  }
];


  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlowText text="My Projects" className="text-3xl md:text-4xl font-bold mb-4" />
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Check out some of my latest work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-lg overflow-hidden bg-gray-900 border border-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                
                <button
                  onClick={() => handleOpenProject(project)}
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black bg-opacity-60 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-cyan-500"
                >
                  <Maximize2 size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-400">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-black font-medium text-sm transition-all duration-300 hover:bg-cyan-400"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.codeUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-medium text-sm transition-all duration-300 hover:bg-gray-700"
                  >
                    <Github size={14} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={handleCloseProject}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-cyan-500"
            >
              <X size={20} />
            </button>
            
            <div className="h-72 sm:h-80 md:h-96">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-cyan-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-cyan-500 text-black font-medium transition-all duration-300 hover:bg-cyan-400"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
                <a 
                  href={selectedProject.codeUrl}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-gray-800 text-gray-300 font-medium transition-all duration-300 hover:bg-gray-700"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;