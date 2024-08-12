import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div style={styles.container}>
      <p style={styles.paragraph}>
        Self-Taught Software Engineer who is based in the United States. I'm currently pursuing
        <br />
        full-stack development to create stunning user experiences on the front-end, and
        <br />
        scalable and secure infrastructure on the backend.
      </p>
      <style jsx>{`
        @media (min-width: 768px) {
          p {
            font-size: 1.5rem; /* Medium screens */
          }
        }

        @media (min-width: 1024px) {
          p {
            font-size: 1.8rem; /* Large screens */
          }
        }

        @media (min-width: 1920px) {
          p {
            font-size: 2rem; /* Extra-large screens */
          }
        }
      `}</style>
    </div>
  );
};

const styles: {
  container: React.CSSProperties;
  paragraph: React.CSSProperties;
} = {
  container: {
    padding: '1rem',
    textAlign: 'center',
    animation: 'fadeIn 1s ease-in-out',
    maxWidth: '80%',
    margin: '0 auto',
  },
  paragraph: {
    color: '#DCDCDC',
    fontSize: '1.2rem', // Default font size for small screens
    lineHeight: '1.7',
    margin: 0,
    fontFamily: 'FiraCodeMedium',
  },
};

// Adding enhanced keyframes for the fade-in effect
const fadeInKeyframes = `
  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.9); filter: blur(4px); }
    100% { opacity: 1; transform: scale(1); filter: blur(0); }
  }
`;

// Inject the keyframes into the document
if (typeof document !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(fadeInKeyframes, styleSheet.cssRules.length);
}

export default Introduction;
