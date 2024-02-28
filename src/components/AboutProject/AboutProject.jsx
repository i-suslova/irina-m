import React from 'react';

import WillChange from '../WillChange/WillChange';
import Process from '../Process/Process';
import ForWhom from '../ForWhom/ForWhom';

import './AboutProject.css';

const AboutProject = () => {

  return (

    <nav className='about-project' >
      <ForWhom />
      <WillChange />
      <Process />
    </nav>

  );
}
export default AboutProject


