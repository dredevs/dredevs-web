import React from 'react';

// You can replace the `src` value with the path to your image
const imageUrl = 'image/frostless_network.png'; 

const organizationStyles: React.CSSProperties = {
  position: 'absolute', // Position the element absolutely
  top: '6.9rem', // Move it down from the top (adjusted for responsiveness)
  right: '15%', // Move it to the left from the right (using percentage for responsiveness)
  fontSize: '1.3rem', // Adjust font size
  textAlign: 'center', // Center the text
  maxWidth: '90%', // Ensure the section doesn't exceed the viewport width
};

const imageStyles: React.CSSProperties = {
  marginTop: '1rem', // Space between header and image
  maxWidth: '280px', // Set a specific width to make the image smaller
  height: 'auto', // Maintain aspect ratio
  opacity: 0, // Start with the image invisible
  animation: 'fadeIn 2s ease-in-out forwards, moveUpDown 1.5s ease-in-out infinite', // Apply the fade-in and move animation
};

// Define the keyframes for the animations
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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Media Queries for Responsiveness */
  @media (min-width: 768px) {
    section {
      top: 6rem; // Adjust positioning for tablets and larger screens
      right: 8%; // Adjust positioning
    }

    h2 {
      font-size: 1.5rem; // Adjust font size for larger screens
    }

    img {
      max-width: 320px; // Increase image size for larger screens
    }
  }

  @media (min-width: 1200px) {
    section {
      top: 7rem; // Further adjust positioning
      right: 10%; // Further adjust positioning
    }

    h2 {
      font-size: 1.8rem; // Further increase font size
    }

    img {
      max-width: 360px; // Further increase image size
    }
  }

  @media (min-width: 1920px) {
    section {
      top: 8rem; // Adjust positioning for very large screens
      right: 12%; // Further adjust positioning
    }

    h2 {
      font-size: 2rem; // Increase font size for very large screens
    }

    img {
      max-width: 400px; // Further increase image size for very large screens
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
