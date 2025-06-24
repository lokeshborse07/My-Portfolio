import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterTyping?: number;
  delayAfterDeleting?: number;
  loop?: boolean;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterTyping = 2000,
  delayAfterDeleting = 500,
  loop = true,
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      if (isPaused) {
        timeoutRef.current = setTimeout(handleTyping, isTyping ? delayAfterTyping : delayAfterDeleting);
        setIsPaused(false);
        return;
      }

      if (isTyping) {
        const currentFullText = texts[currentTextIndex];
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          setIsPaused(true);
          setIsTyping(false);
          timeoutRef.current = setTimeout(handleTyping, delayAfterTyping);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsPaused(true);
          setIsTyping(true);
          setCurrentTextIndex((prevIndex) => {
            if (prevIndex === texts.length - 1) {
              return loop ? 0 : prevIndex;
            }
            return prevIndex + 1;
          });
          timeoutRef.current = setTimeout(handleTyping, delayAfterDeleting);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, isTyping ? typingSpeed : deletingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, currentTextIndex, isTyping, isPaused, texts, typingSpeed, deletingSpeed, delayAfterTyping, delayAfterDeleting, loop]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

export default TypewriterText;