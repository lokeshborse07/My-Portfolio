import React from 'react';
import ParticleBackground from './ParticleBackground';
import TypewriterText from './TypewriterText';
import ScrollIndicator from './ScrollIndicator';
import GlowText from './GlowText';

const Hero: React.FC = () => {
  const typewriterTexts = [
    "A Passionate Java Developer 💻",
    "A Creative Web Designer ✨",
    "A Problem Solver 🧩",
    "A Tech Enthusiast 🚀"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-cyan-400">Lokesh Borase</span>
          </h1>
          
          <div className="h-16">
            <TypewriterText 
              texts={typewriterTexts}
              className="text-xl md:text-2xl text-gray-300"
            />
          </div>
          
          <div className="mt-8 flex flex-col items-center space-y-6">
            <GlowText 
              text="Turning Ideas Into Reality"
              Element="p"
              className="text-lg md:text-xl"
              glowColor="cyan"
            />
            
            <button 
              className="group relative px-6 py-3 overflow-hidden rounded-full bg-transparent border border-cyan-400 text-cyan-400 font-medium transition-all duration-300 hover:bg-cyan-400 hover:text-black"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="relative group-hover:animate-pulse">View My Work</span>
            </button>
          </div>
        </div>
      </div>
      
      <ScrollIndicator targetId="about" />
    </section>
  );
};

export default Hero;