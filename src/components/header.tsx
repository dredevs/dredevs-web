// components/Header.tsx
import React from 'react';


const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>About Me</h1>
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
  },
};

export default Header;
