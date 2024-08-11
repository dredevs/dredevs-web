// components/Organization.tsx
import React from 'react';

// You can replace the `src` value with the path to your image
const imageUrl = 'image/frostless_network.png'; 

const organizationStyles: React.CSSProperties = {
  position: 'absolute', // Position the element absolutely
  top: '5.7rem', // Move it down from the top
  right: '15rem', // Move it to the left from the right
  fontSize: '1.3rem', // Adjust font size
  textAlign: 'center', // Center the text
};

const imageStyles: React.CSSProperties = {
  marginTop: '1rem', // Space between header and image
  maxWidth: '280px', // Set a specific width to make the image smaller
  height: 'auto', // Maintain aspect ratio
  animation: 'moveUpDown 1.5s ease-in-out infinite', // Apply the animation with a faster duration
};

// Define the keyframes for the up-and-down animation
const styles = `
  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px); /* Move up by 10px */
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Organization: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <section style={organizationStyles}>
        <h2>Recent Organizations</h2>
        <img src={imageUrl} alt="Organization" style={imageStyles} />
      </section>
    </>
  );
};

export default Organization;
