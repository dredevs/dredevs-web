import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const TechStack: React.FC = () => {
  return (
    <div style={containerStyles}>
      <h2 style={headerStyles} className="fadeIn underline">Tech Stack</h2>
      <p style={paragraphStyles} className="fadeIn">
        I use a variety of tools to streamline my development process and increase the 
        <br />
        quality of both my code, and my projects. Below is a list of tools and 
        <br /> 
        languages I've had experience with in the past, or use currently.
      </p>
      <div style={borderStyles}>
        <div style={techStackStyles} className="fadeIn">
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
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.9); filter: blur(2px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        @keyframes underline {
          0% { width: 0; }
          100% { width: 100%; }
        }

        .fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }

        .underline {
          position: relative;
          display: inline-block;
        }

        .underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px; /* Adjust the position of the underline */
          width: 0;
          height: 2px;
          background-color: white; /* Set underline color */
          animation: underline 0.5s ease-in-out forwards;
        }

        .tech-icon {
          display: inline-block;
          position: relative;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .tech-icon::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -5px; /* Adjust position of the underline */
          width: 0;
          height: 2px;
          background-color: currentColor; /* Use current icon color */
          transition: width 0.3s ease;
          transform: translateX(-50%);
        }

        .tech-icon:hover {
          transform: scale(1.3); /* Slightly increase the size on hover */
        }

        .tech-icon:hover::after {
          width: 100%; /* Full width underline effect */
        }

        @media (max-width: 768px) {
          .tech-icon {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 1920px) {
          .tech-icon {
            font-size: 2.5rem; /* Increase icon size for higher resolutions */
          }
          .fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
          .underline::after {
            bottom: -6px; /* Slight adjustment for underline on higher resolutions */
          }
        }
      `}</style>
    </div>
  );
};

// Inline styles
const containerStyles: React.CSSProperties = {
  padding: '1rem',
  marginTop: '0rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center items horizontally
  justifyContent: 'center', // Center items vertically
  maxWidth: '80%', // Adjusted for better scaling
  margin: '0 auto',
};

const headerStyles: React.CSSProperties = {
  fontSize: '2.5rem', // Adjusted size for responsiveness
  fontWeight: 'bold',
  marginBottom: '1.5rem', // Adjusted margin for spacing
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
  flexWrap: 'wrap', // Wrap icons to the next line if needed
  gap: '1.5rem',
  justifyContent: 'center', // Center icons horizontally
  padding: '1rem',
};

const borderStyles: React.CSSProperties = {
  padding: '1rem',
  border: '1px solid white',
  borderRadius: '10px',
  display: 'inline-block',
  width: '100%', // Make sure the border adapts to screen size
};

const iconStyles: React.CSSProperties = {
  fontSize: '2rem',
  transition: 'transform 0.3s ease',
};

export default TechStack;
