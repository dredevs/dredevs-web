import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const TechStack: React.FC = () => {
  return (
    <div style={containerStyles}>
      <h2 style={headerStyles}>Tech Stack</h2>
      <p style={paragraphStyles}>
        I use a variety of tools to streamline my development process and increase the 
        <br />
        quality of both my code, and my projects. Below is a list of tools and 
        <br /> 
        languages I've had experience with in the past, or use currently.
      </p>
      <div style={borderStyles}>
        <div style={techStackStyles}>
          <div style={{ ...iconStyles, color: '#E44D26' }} className="tech-icon">
            <FaHtml5 />
          </div>
          <div style={{ ...iconStyles, color: '#1572B6' }} className="tech-icon">
            <FaCss3Alt />
          </div>
          <div style={{ ...iconStyles, color: '#F7E01C' }} className="tech-icon">
            <FaJsSquare />
          </div>
          <div style={{ ...iconStyles, color: '#3178C6' }} className="tech-icon">
            <SiTypescript />
          </div>
          <div style={{ ...iconStyles, color: '#306998' }} className="tech-icon">
            <FaPython />
          </div>
          <div style={{ ...iconStyles, color: '#F05032' }} className="tech-icon">
            <FaGitAlt />
          </div>
          <div style={{ ...iconStyles, color: '#000000' }} className="tech-icon">
            <SiNextdotjs />
          </div>
          <div style={{ ...iconStyles, color: '#003B57' }} className="tech-icon">
            <FaDatabase /> {/* MySQL icon */}
          </div>
          <div style={{ ...iconStyles, color: '#333333' }} className="tech-icon">
            <FaGithub /> {/* GitHub icon */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-icon {
          display: inline-block;
          position: relative;
        }
        
        .tech-icon::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }

        .tech-icon:hover::after {
          width: 100%;
        }

        .tech-icon:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

// Inline styles
const containerStyles: React.CSSProperties = {
  padding: '1rem',
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center items horizontally
  justifyContent: 'center', // Center items vertically
  maxWidth: '600px',
  margin: '0 auto',
};

const headerStyles: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  fontFamily: 'FiraCodeBold',
  textAlign: 'center',
};

const paragraphStyles: React.CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.7',
  textAlign: 'center',
  marginBottom: '2rem',
  color: '#DCDCDC',
  fontFamily: 'FiraCodeMedium',
};

const techStackStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'center', // Center icons horizontally
  padding: '1rem',
};

const borderStyles: React.CSSProperties = {
  padding: '0rem',
  border: '1px solid white',
  borderRadius: '10px',
  display: 'inline-block',
};

const iconStyles: React.CSSProperties = {
  fontSize: '2.1rem',
  transition: 'transform 0.3s ease',
};

export default TechStack;
