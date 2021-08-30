import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Unauthorized.scss';

const Unauthorized = () => {
  return (
    <div className="container-gandalf">
      <div className="gandalf">
        <div className="fireball"></div>
        <div className="skirt"></div>
        <div className="sleeves"></div>
        <div className="shoulders">
          <div className="hand left"></div>
          <div className="hand right"></div>
        </div>
        <div className="head">
          <div className="hair"></div>
          <div className="beard"></div>
        </div>
      </div>
      <div className="message">
        <h1>403 - You Shall Not Pass</h1>
        <p>
          Uh oh, Gandalf is blocking the way!
          <br />
          Maybe you have a typo in the url? Or you meant to go to a different
          location? Like...Hobbiton?
        </p>
      </div>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};
export default Unauthorized;
