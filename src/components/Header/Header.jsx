import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

// import LightTheme from '../../images/LightTheme.svg';
// import DarkTheme from '../../images/DarkTheme.svg';
import NavTab from '../NavTab/NavTab';
import logo from '../../images/Logo.svg';

const Header = () => {
 
  const navigate = useNavigate();

  const handleGoMain= () => {
    navigate('/');}

    return (
      <header className='header'>
        <div className='header__logo hover'
          onClick={handleGoMain}
        >
          {/* <img src={LightTheme} alt='Переключатель темы' /> */}
          {/* <img src={DarkTheme} alt='Переключатель темы' /> */}
          <img src={logo} alt='логотип сайта' />
        </div>
        <NavTab />
      </header>

    )
  };

  export default Header;


