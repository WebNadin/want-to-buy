import React from 'react';

import mountainsImg from '../images/mountains.jpg';
import peopleImg from '../images/people.png';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__slogan slogan">
        <h5 className="slogan__title">find everything you need
          <span className="slogan__titleAccent">for a trip</span>
        </h5>
      </div>
      <img className="intro__mountains" src={mountainsImg} alt="snow-capped mountains with blue sky and clouds"/>
      <img className="intro__people" src={peopleImg} alt="woman and man with backpacks are standing on the rock"/>
      <div className="intro__preview preview">
        <h1 className="preview__title">best travel
          <span className="preview__titleAccent">accessories</span>
        </h1>
        <p className="preview__description">Get ready for anything with quality accessories from all over the world.</p>
        <button type="button button_default">view all</button>
      </div>
    </section>
  );
};

export default Intro;