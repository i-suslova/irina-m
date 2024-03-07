import React from 'react';

import WillChange from '../WillChange/WillChange';
import Process from '../Process/Process';
import ForWhom from '../ForWhom/ForWhom';
import Questions from '../Questions/Questions';

import './AboutProject.css';

const AboutProject = ({ themeClass, isDarkMode }) => {

  return (

    <nav className={`about-project ${themeClass}`}>
      <ForWhom
        themeClass={themeClass}
        isDarkMode={isDarkMode}
      />
      <WillChange themeClass={themeClass} />
      <Process themeClass={themeClass} />
      <Questions
        themeClass={themeClass}
        isDarkMode={isDarkMode} />
    </nav>

  );
}
export default AboutProject


