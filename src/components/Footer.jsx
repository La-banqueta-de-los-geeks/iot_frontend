import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const AboutMe = () => {
  const { state } = useContext(AppContext);
  // const { social_networks } = state; me da error
  return (
    <div className="flex flex-row flex-wrap my-2">
      <h1>Aqui va el footer okay?</h1>
    </div>
  );
};

export default AboutMe;
