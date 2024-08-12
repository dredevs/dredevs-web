import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title} className="fadeIn underline">About Me</h1>
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.9); filter: blur(4px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        @keyframes underline {
          0% { width: 0; }
          100% { width: 100%; }
        }

        .fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .underline {
          position: relative;
          display: inline-block;
          color: #fff; /* Set text color */
          margin: 0;
          margin-top: 2rem;
          font-family: 'FiraCodeBold', sans-serif;
          opacity: 0;
          animation: fadeIn 1s ease-in-out forwards;
          font-size: 2rem; /* Default font size for small screens */
        }

        .underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px; /* Adjust the position of the underline */
          width: 0;
          height: 2px;
          background-color: #fff; /* Set underline color */
          animation: underline 0.5s ease-in-out forwards;
        }

        /* Responsive font size */
        @media (min-width: 768px) {
          .underline {
            font-size: 3rem; /* Medium screens */
          }
        }

        @media (min-width: 1024px) {
          .underline {
            font-size: 4rem; /* Large screens */
          }
        }

        @media (min-width: 1920px) {
          .underline {
            font-size: 5rem; /* Extra-large screens */
          }
        }
      `}</style>
    </header>
  );
};

const styles: { header: React.CSSProperties; title: React.CSSProperties } = {
  header: {
    padding: '1rem',
    textAlign: 'center', // Center text in the header
  },
  title: {
    margin: 0,
    marginTop: '2rem', // Move the text downwards by 2rem
    fontFamily: 'FiraCodeBold', // Apply the custom font
    opacity: 0, // Start hidden
    animation: 'fadeIn 1s ease-in-out forwards', // Apply fade-in animation
  },
};

export default Header;
