import React from 'react';

interface GlowTextProps {
  text: string;
  Element?: keyof JSX.IntrinsicElements;
  className?: string;
  glowColor?: string;
}

const GlowText: React.FC<GlowTextProps> = ({
  text,
  Element = 'h2',
  className = '',
  glowColor = 'cyan'
}) => {
  const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]',
    purple: 'text-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.7)]',
    pink: 'text-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.7)]',
    green: 'text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]',
    yellow: 'text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]',
  };

  const glowClass = colorMap[glowColor] || colorMap.cyan;

  return (
    <Element className={`${glowClass} ${className}`}>
      {text}
    </Element>
  );
};

export default GlowText;