import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title} className="fadeIn underline pulse">About Me</h1>
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.9); filter: blur(4px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        @keyframes underline {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        .fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .underline {
          position: relative;
          display: inline-block;
          color: #fff; /* Set text color */
          font-size: 2rem; /* Ensure font size matches the style */
          margin: 0;
          margin-top: 40px;
          font-family: 'FiraCodeBold', sans-serif; /* Ensure font-family matches the style */
          opacity: 0;
          animation: fadeIn 1s ease-in-out forwards, pulse 2s infinite; /* Added pulse animation */
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
    fontSize: '2rem',
    margin: 0,
    marginTop: '40px', // Move the text downwards by 40 pixels
    fontFamily: 'FiraCodeBold', // Apply the custom font
    opacity: 0, // Start hidden
    animation: 'fadeIn 1s ease-in-out forwards, pulse 2s infinite', // Apply fade-in and pulse animation
  },
};

export default Header;
