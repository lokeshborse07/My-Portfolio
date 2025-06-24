import React from 'react';
import { Calendar, BookOpen, Award, Briefcase } from 'lucide-react';
import GlowText from './GlowText';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'education' | 'internship' | 'achievement' | 'project';
}

const Experience: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "B.Tech in Computer Science",
      date: "2021 - 2025 (Pursuing)",
      description: "Currently pursuing a B.Tech in Computer Engineering at R.C. Patel Institute of Technology, Shirpur, with a focus on web development, backend technologies.",
      type: "education"
    },
    {
      id: 2,
      title: "Spring Framework (Training & Internship)",
      date: "January 24, 2024 - February 10, 2024",
      description: "Completed training and internship focused on building scalable Java applications using the Spring Framework, gaining hands-on experience with Spring, MVC, and database integration.",
      type: "internship"
    },
    {
      id: 3,
      title: "Web Application Development - Java (Training & Internship)",
      date: "July 3, 2023 - July 22, 2023",
      description: "Completed hands-on training and internship focused on Java-based web application development, building practical skills in JSP, Servlets, and JDBC.",
      type: "internship"
    },
    {
      id: 4,
      title: "12th Grade - Kai. Sau. G. F. Patil Junior College, Shahada",
      date: "March 2020",
      description: "Passed 12th standard with 73.69% from Kai. Sau. G. F. Patil Junior College, Shahada.",
      type: "education"
    },
    {
      id: 5,
      title: "10th Grade - Sheth V. K. Shah Vidya Mandir, Shahada",
      date: "March 2018",
      description: "Passed 10th standard with 87.60% from Sheth V. K. Shah Vidya Mandir, Shahada.",
      type: "education"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'education':
        return <BookOpen className="h-6 w-6 text-purple-400" />;
      case 'internship':
        return <Briefcase className="h-6 w-6 text-green-400" />;
      case 'achievement':
        return <Award className="h-6 w-6 text-yellow-400" />;
      case 'project':
        return <Calendar className="h-6 w-6 text-cyan-400" />;
      default:
        return <Calendar className="h-6 w-6 text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlowText text="Experience & Achievements" className="text-3xl md:text-4xl font-bold mb-4" />
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My educational background, work experience, and achievements
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div 
                    className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(15,23,42,0.3)] hover:border-gray-700"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      {getIcon(item.type)}
                      <span className="text-sm font-medium text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline bullet */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-2 border-cyan-400 bg-gray-900 flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;