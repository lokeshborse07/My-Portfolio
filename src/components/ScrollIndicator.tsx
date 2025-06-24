import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetId: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ targetId }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      onClick={scrollToSection}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 bg-black bg-opacity-50 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default ScrollIndicator;