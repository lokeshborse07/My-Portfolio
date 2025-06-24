import React from 'react';
import GlowText from './GlowText';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML5', level: 70, color: 'text-orange-500' },
    { name: 'CSS3', level: 70, color: 'text-blue-500' },
    { name: 'JavaScript', level: 60, color: 'text-yellow-400' },
    { name: 'React', level: 25, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', level: 25, color: 'text-cyan-500' },
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Java', level: 65, color: 'text-red-400' },
    { name: 'MySQL', level: 60, color: 'text-green-500' },
    { name: 'MongoDB', level: 60, color: 'text-green-400' },
    { name: 'Spring Framework', level: 30, color: 'text-gray-300' },
  ];
  
  const otherSkills: Skill[] = [
    { name: 'Git', level: 80, color: 'text-orange-400' },
    { name: 'Express', level: 65, color: 'text-gray-300' },
    { name: 'Firebase', level: 40, color: 'text-yellow-500' },
    { name: 'Flutter', level: 50, color: 'text-blue-400' },
  ];

  const SkillCard: React.FC<{ title: string, skills: Skill[] }> = ({ title, skills }) => (
    <div className="bg-gray-900 bg-opacity-50 rounded-lg shadow-lg p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_20px_rgba(15,23,42,0.5)] hover:border-gray-700">
      <h3 className="text-xl font-semibold text-cyan-400 mb-6">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between mb-1">
              <span className={`${skill.color} font-medium transition-all duration-300 group-hover:scale-105`}>
                {skill.name}
              </span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="relative h-2 w-full rounded-full bg-gray-800 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 group-hover:animate-pulse"
                style={{ 
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, #22d3ee, #0ea5e9)`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlowText text="My Skills" className="text-3xl md:text-4xl font-bold mb-4" />
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard title="Frontend Development" skills={frontendSkills} />
          <SkillCard title="Backend Development" skills={backendSkills} />
          <SkillCard title="Other Skills" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;