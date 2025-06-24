import React from 'react';
import { FileDown, Github, Linkedin, Mail } from 'lucide-react';
import GlowText from './GlowText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlowText text="About Me" className="text-3xl md:text-4xl font-bold mb-4" />
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-4">
  Hello! I’m <span className="text-cyan-400 font-medium">Lokesh Borase</span>, a recent Computer Engineering graduate from R.C. Patel Institute of Technology, with a strong interest in backend and full-stack development.
</p>

<p className="text-lg text-gray-300 mb-4">
  I have hands-on experience in Java, Spring Framework, and web technologies through academic projects and internship exposure. I’m particularly focused on building efficient, scalable, and user-friendly web applications.
</p>

<p className="text-lg text-gray-300 mb-4">
  During my internship at R3 Systems India Pvt Ltd, I contributed to both frontend and backend modules — including the development of a Spring MVC-based bookstore application and enhancements to JavaEE applications using JSP, Servlets, and JDBC.
</p>

<p className="text-lg text-gray-300 mb-4">
  My academic projects, such as the PM Awas Yojana Portal and Vehicle Rental System, demonstrate my ability to apply technologies like Java, MySQL, HTML, CSS, JavaScript, and Spring Framework to solve real-world problems.
</p>

<p className="text-lg text-gray-300 mb-6">
  I’m now looking for an opportunity to start my professional journey, contribute to impactful software solutions, and grow as a developer by learning from experienced teams and challenging projects.
</p>


              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="/Lokesh_Borase_Resume.pdf" 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-black font-medium transition-all duration-300 hover:bg-cyan-500 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                >
                  <FileDown size={18} />
                  <span>Download Resume</span>
                </a>
                
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/lokeshborse07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/lokeshborse07/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="lokeshborse.rcpit@gmail.com" 
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-cyan-400 p-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                <img 
        src="/myimage.jpg" 
        alt="Lokesh Borase"
        className="h-full w-full rounded-full object-cover"
      />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;