import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-950 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-cyan-400">&lt;</span>Dev<span className="text-cyan-400">/&gt;</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">Building exceptional digital experiences.</p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Back to Top
            </a>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/lokeshborse07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lokeshborse07/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:lokeshborse.rcpit@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-900 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Lokesh Borase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;