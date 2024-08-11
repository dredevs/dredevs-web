import React from 'react';
import Navbar from '../components/navbar';  
import Header from '../components/header';
import Introduction from '../components/introduction';
import TechStack from '../components/techstack';

const App: React.FC = () => {
  return (
    <div>
      <Navbar /> 
      <Header />
      <Introduction />
      <TechStack />
    </div>
  );
};

export default App;
