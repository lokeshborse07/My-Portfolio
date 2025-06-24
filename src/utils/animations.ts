import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, [callback, options]);

  return targetRef;
};

export const ScrollReveal = ({ 
  children, 
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  direction = "up",
  delay = 0,
  duration = 800
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const ref = useIntersectionObserver(
    (entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold, rootMargin }
  );
  
  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up": return "translate-y-20 opacity-0";
        case "down": return "-translate-y-20 opacity-0";
        case "left": return "translate-x-20 opacity-0";
        case "right": return "-translate-x-20 opacity-0";
        default: return "opacity-0";
      }
    }
    return "translate-y-0 translate-x-0 opacity-100";
  };
  
  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: isVisible ? "translate(0, 0)" : undefined,
        opacity: isVisible ? 1 : 0,
        ...getDirectionStyle(direction, isVisible)
      }}
    >
      {children}
    </div>
  );
};

const getDirectionStyle = (direction: string, isVisible: boolean) => {
  if (isVisible) {
    return {};
  }
  
  switch (direction) {
    case "up": return { transform: "translateY(50px)" };
    case "down": return { transform: "translateY(-50px)" };
    case "left": return { transform: "translateX(50px)" };
    case "right": return { transform: "translateX(-50px)" };
    default: return {};
  }
};

import { useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const targetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    
    const current = targetRef.current;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
  
  return { isVisible, targetRef };
};