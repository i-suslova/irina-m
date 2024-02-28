import React from 'react';

import TrustMe from '../TrustMe/TrustMe';
import MyEducation from '../MyEducation/MyEducation';
import MyDiplomas from '../MyDiplomas/MyDiplomas';
import Reviews from '../Reviews/Reviews';

import './AboutMe.css';

const AboutMe = () => {

  return (

    <nav className='about-me' >
      <TrustMe />
      <MyEducation />
      <MyDiplomas />
      <Reviews />
    </nav>

  );
}
export default AboutMe


