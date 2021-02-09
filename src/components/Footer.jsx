import React, { useContext } from 'react';
import AppContext from './../context/AppContext';
const AboutMe = () => {
  const { state } = useContext(AppContext);
  const { social_networks } = state;
  return (
    <div className="flex flex-row flex-wrap my-2">
      
    </div>
  );
};

export default AboutMe;
