import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Footer.css';

const Footer = ({ themeClass }) => {
  const todaytYear = new Date().getFullYear();

  const navigate = useNavigate();

  const handlePrivacyPolicyClick = () => {
    navigate('/privacy-policy');
  };

  return (
       <footer className={`footer ${themeClass}`}>
      <div className='footer__wrapper'>
        <h2 className={`footer__title ${themeClass}`}>
          Ирина Медведева</h2>
        <div className={`footer__copyright ${themeClass}`}>
        {todaytYear}</div>
        {/* <button className='footer__btn hover' */}
        <button className={`footer__btn hover ${themeClass}`}
          onClick={handlePrivacyPolicyClick}>
          политика конфиденциальности
        </button>
      </div>
    </footer>
  )
}

export default Footer

