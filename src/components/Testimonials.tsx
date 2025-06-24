import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import GlowText from './GlowText';

interface Testimonial {
  id: number;
  text: string;
  author?: string;
  role?: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Dream. Code. Build. Inspire.",
    },
    {
      id: 2,
      text: "The only way to do great work is to love what you do.",
    },
    {
      id: 3,
      text: "Design is not just what it looks like. Design is how it works.",
    },
    {
      id: 4,
      text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GlowText text="Motivation" className="text-3xl md:text-4xl font-bold mb-4" />
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Glowing background */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-600/10 blur-3xl -z-0"></div>
          
          <div className="relative z-10 px-6 py-12 md:p-16 bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl border border-gray-800">
            <Quote 
              className="absolute top-6 left-6 h-16 w-16 text-cyan-400 opacity-20"
              strokeWidth={1}
            />
            
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={goToPrevious}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-cyan-500"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                onClick={goToNext}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-cyan-500"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="relative overflow-hidden h-32">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`absolute transition-all duration-500 ease-in-out w-full ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <p className="text-center text-xl md:text-2xl text-white font-medium italic">
                    {testimonial.text}
                  </p>
                  
                  {testimonial.author && (
                    <div className="mt-6 text-center">
                      <p className="text-cyan-400 font-semibold">{testimonial.author}</p>
                      {testimonial.role && (
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-cyan-400' : 'bg-gray-700'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;