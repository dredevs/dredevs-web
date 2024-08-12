import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarStyles: React.CSSProperties = {
    backgroundColor: 'var(--navbar-background)',
    color: 'white',
    borderColor: 'var(--navbar-border)',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '0.7rem',
    height: 'auto',
    maxWidth: '60rem',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0.5rem',
    opacity: 0,
    animation: 'fadeIn 1s ease-out forwards',
    position: 'relative',
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
    transition: 'background-color 0.3s ease',
    padding: '0.5rem 1rem',
    borderRadius: '0.3rem',
  };

  const rightContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const mobileMenuStyles: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    right: '0',
    backgroundColor: 'var(--navbar-background)',
    width: '100%',
    padding: '1rem',
    borderRadius: '0 0 0.5rem 0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 20,
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
            background-color: #666;
            color: white;
          }

          .navbar .mobile-menu {
            display: none;
          }

          @media (max-width: 768px) {
            .navbar {
              padding: 0.5rem;
              flex-direction: column;
              align-items: flex-start;
            }

            .navbar .mobile-menu {
              display: block;
              font-size: 1.5rem;
              cursor: pointer;
            }

            .navbar .menu-items {
              display: ${isOpen ? 'block' : 'none'};
              width: 100%;
              padding: 0;
              margin: 0;
              list-style: none;
              flex-direction: column;
              gap: 1rem;
              align-items: flex-start;
            }

            .navbar .menu-items a {
              display: block;
              padding: 0.5rem 1rem;
              width: 100%;
              text-align: center;
            }

            .navbar .social-icons {
              display: ${isOpen ? 'none' : 'flex'};
            }
          }

          @media (min-width: 768px) {
            .navbar {
              max-width: 70rem;
              padding: 0.8rem;
              flex-direction: row;
            }

            .navbar .menu-items {
              display: flex;
              gap: 1rem;
            }

            .navbar .social-icons {
              display: flex;
            }
          }

          @media (min-width: 1024px) {
            .navbar {
              max-width: 80rem;
              padding: 1rem;
            }

            .navbar .text-link {
              font-size: 1.6rem;
            }

            .navbar .icon {
              font-size: 2rem;
            }
          }

          @media (min-width: 1920px) {
            .navbar {
              max-width: 90rem;
              padding: 1.2rem;
            }

            .navbar .text-link {
              font-size: 1.8rem;
            }

            .navbar .icon {
              font-size: 2.2rem;
            }
          }
        `}
      </style>
      <nav style={navbarStyles} className="navbar">
        <div className="mobile-menu" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul style={listStyles} className="menu-items">
          <li>
            <Link href="/" legacyBehavior>
              <a style={textLinkStyles} className="text-link">Home</a>
            </Link>
          </li>
          {/* Add more menu items here if needed */}
        </ul>
        <div style={rightContainerStyles} className="social-icons">
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
