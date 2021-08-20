import React, { useContext } from 'react';
import AppContext from "../context/AppContext";
import {Footer , Social} from '../styles'
import disscord from '../assets/static/Discord-Logo-White.svg'

export default () => {
  const { state } = useContext(AppContext);
  // const { social_networks } = state
  return (
    <Footer>
      <p>Muchos robots, una App para dominarlos a todos ! </p>
      <Social>
        <a target='_blank' rel='noreferrer' href="https://discord.gg/HtbtB8tZ9a">
          <img src={disscord} alt="DisscordLogo" /> 
          La banqueta de los geeks
        </a>
      </Social>
    </Footer>
  );
};

