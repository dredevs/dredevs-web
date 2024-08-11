// components/Introduction.tsx
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
    </div>
  );
};

const styles: {
  container: React.CSSProperties;
  paragraph: React.CSSProperties;
} = {
  container: {
    padding: '0.5rem',
    textAlign: 'center' as 'center', // Ensure the textAlign is correctly typed
  },
  paragraph: {
    color: '#DCDCDC',
    fontSize: '1.2rem',
    lineHeight: '1.7',
    margin: 0,
    fontFamily: 'FiraCodeMedium',
  },
};

export default Introduction;
