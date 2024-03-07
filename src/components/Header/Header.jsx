import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

import NavTab from '../NavTab/NavTab';
import LightTheme from '../../images/LightTheme.svg';
import DarkTheme from '../../images/DarkTheme.svg';
import logoDark from '../../images/logoDark.png';
import logoLight from '../../images/logoLight.png';

const Header = ({ themeClass, isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();

  const handleGoMain = () => {
    navigate('/');
  }

  return (

    <header className={`header ${themeClass}`}>

      <div className='header__logo hover' onClick={handleGoMain}>
        <img src={isDarkMode ? logoLight : logoDark} alt='логотип сайта' />
      </div>

      <NavTab themeClass={themeClass} />

      <div className='header__theme hover' onClick={toggleTheme}>
        <img src={isDarkMode ? LightTheme : DarkTheme} alt='Toggle Theme' />
      </div>

    </header>
  )
};

export default Header;



