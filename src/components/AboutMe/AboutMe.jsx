import React from 'react';

import TrustMe from '../TrustMe/TrustMe';
import MyEducation from '../MyEducation/MyEducation';
import MyDiplomas from '../MyDiplomas/MyDiplomas';
import Reviews from '../Reviews/Reviews';

import './AboutMe.css';

const AboutMe = ({ themeClass, isDarkMode }) => {

  return (

    <nav className='about-me' >
      <TrustMe themeClass={themeClass} />
      <MyEducation themeClass={themeClass} />
      <MyDiplomas themeClass={themeClass} />
      <Reviews
        themeClass={themeClass}
        isDarkMode={isDarkMode}
      />
    </nav>

  );
}
export default AboutMe


