import React from 'react';
import Navbar from '../components/navbar';
import Repositories from '../components/repositories';
import Organization from '../components/organizations';

const Projects: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Repositories />
      <Organization />
    </div>
  );
};

export default Projects

