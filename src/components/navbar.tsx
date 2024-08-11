import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import StatusCircle from './status';

const Navbar: React.FC = () => {

  const navbarStyles: React.CSSProperties = {
    backgroundColor: 'var(--navbar-background)',
    color: 'white',
    borderColor: 'var(--navbar-border)',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '0.70rem',
    height: '1rem', // Adjusted height to fit status circle
    maxWidth: '50rem',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0.5rem',
    opacity: 0,
    animation: 'fadeIn 1s ease-out forwards',
  };

  const linkStyles: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    position: 'relative', // Position relative to allow absolute positioning of the tooltip
  };

  const iconStyles: React.CSSProperties = {
    color: 'var(--icon-color)',
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease, color 0.3s ease',
  };

  const listStyles: React.CSSProperties = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  };

  const tooltipContainerStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '120%', // Position above the icon
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '0.5rem',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '0.3rem',
    whiteSpace: 'nowrap',
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    fontSize: '0.9rem',
    zIndex: 10,
  };

  const tooltipVisibleStyles: React.CSSProperties = {
    opacity: 1,
    visibility: 'visible',
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .navbar a:hover .icon {
            color: #ff8c00;
            transform: scale(1.2);
          }

          .navbar a:hover .tooltip {
            opacity: 1;
            visibility: visible;
          }
        `}
      </style>
      <nav style={navbarStyles} className="navbar">
        <ul style={listStyles}>
          <li style={{ position: 'relative' }}>
            <a
              href="https://github.com/dredevs"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              <FaGithub className="icon" style={iconStyles} />
              <div style={tooltipContainerStyles} className="tooltip">
                GitHub
              </div>
            </a>
          </li>
          <li style={{ position: 'relative' }}>
            <a
              href="https://twitter.com/dredevs_"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              <FaTwitter className="icon" style={iconStyles} />
              <div style={tooltipContainerStyles} className="tooltip">
                Twitter
              </div>
            </a>
          </li>
          <li style={{ position: 'relative' }}>
            <a
              href="https://www.linkedin.com/in/yourprofile/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              <FaLinkedin className="icon" style={iconStyles} />
              <div style={tooltipContainerStyles} className="tooltip">
                LinkedIn
              </div>
            </a>
          </li>
          <li style={{ position: 'relative' }}>
            <a
              href="mailto:contact.dredev@gmail.com"
              style={linkStyles}
            >
              <FaEnvelope className="icon" style={iconStyles} />
              <div style={tooltipContainerStyles} className="tooltip">
                Email
              </div>
            </a>
          </li>
        </ul>
        <StatusCircle /> {/* Use the StatusCircle component here */}
      </nav>
    </>
  );
};

export default Navbar;
