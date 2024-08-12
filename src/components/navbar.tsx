import React from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {

  const navbarStyles: React.CSSProperties = {
    backgroundColor: 'var(--navbar-background)',
    color: 'white',
    borderColor: 'var(--navbar-border)',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '0.7rem',
    height: 'auto', // Adjust height based on content
    maxWidth: '60rem', // Slightly increased max width for large screens
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
    position: 'relative',
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
    bottom: '120%',
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

  const textLinkStyles: React.CSSProperties = {
    margin: '0 -0.5rem',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease', // Transition for background color
    padding: '0.5rem 1rem', // Added padding for the background effect
    borderRadius: '0.3rem', // Rounded corners for the background effect
  };

  const rightContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem', // Space between status circle and icons
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

          .navbar .text-link:hover {
            background-color: #666; /* Gray background on hover */
            color: white; /* Ensure text color is readable on gray background */
          }

          @media (min-width: 768px) {
            .navbar {
              max-width: 70rem; /* Wider navbar for medium screens */
              padding: 0.8rem; /* Slightly larger padding */
            }

            .navbar .text-link {
              font-size: 1.4rem; /* Larger font size for medium screens */
            }

            .navbar .icon {
              font-size: 1.7rem; /* Larger icons */
            }
          }

          @media (min-width: 1024px) {
            .navbar {
              max-width: 80rem; /* Even wider navbar for large screens */
              padding: 1rem; /* More padding */
            }

            .navbar .text-link {
              font-size: 1.6rem; /* Larger font size for large screens */
            }

            .navbar .icon {
              font-size: 2rem; /* Even larger icons */
            }
          }

          @media (min-width: 1920px) {
            .navbar {
              max-width: 90rem; /* Maximum width for very large screens */
              padding: 1.2rem; /* Ample padding */
            }

            .navbar .text-link {
              font-size: 1.8rem; /* Large font size */
            }

            .navbar .icon {
              font-size: 2.2rem; /* Largest icons */
            }
          }
        `}
      </style>
      <nav style={navbarStyles} className="navbar">
        <ul style={listStyles}>
          <li>
            <Link href="/" legacyBehavior>
              <a style={textLinkStyles} className="text-link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects" legacyBehavior>
              <a style={textLinkStyles} className="text-link">Projects</a>
            </Link>
          </li>
        </ul>
        <div style={rightContainerStyles}>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
