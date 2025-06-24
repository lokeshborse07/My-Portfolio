import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find the current active section
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          <span className="text-cyan-400">&lt;</span>Dev<span className="text-cyan-400">/&gt;</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-cyan-400"></span>
              )}
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button
          type="button"
          className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-400'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;