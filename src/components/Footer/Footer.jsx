import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  const todaytYear = new Date().getFullYear();

  const navigate = useNavigate();

  const handlePrivacyPolicyClick = () => {
    navigate('/privacy-policy');
  };

  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <h2 className='footer__title'>Ирина Медведева</h2>
        <div className='footer__copyright'> {todaytYear}</div>
        <button className='footer__btn hover'
         onClick={handlePrivacyPolicyClick}>
          политика конфиденциальности
        </button>
      </div>
    </footer>
  )
}

export default Footer

