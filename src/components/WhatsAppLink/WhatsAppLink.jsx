import React, { useEffect } from 'react';

import './WhatsAppLink.css';
import useHeaderHeight from '../../hooks/useHeaderHeight';

const phoneNumber = process.env.REACT_APP_PHONE;

const WhatsAppLink = ({ themeClass }) => {

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className={`whats-app-link ${themeClass}`}>

      <div className='whats-app__wrapper'
        style={{ paddingTop: `${headerHeight}px` }}
      >

        <div className={`whats-app-link__container ${themeClass}`}></div>
        <h2 className={`whats-app-link__title ${themeClass}`}>
          WhatsApp  {phoneNumber}
        </h2>
        <p className={`whats-app-link__text ${themeClass}`}>Вы можете задать вопрос
          <br /> или записаться на консультацию:</p>
        <button className={`whats-app-link__btn hover ${themeClass}`}
          onClick={handleWhatsAppClick}>
          НАПИШИТЕ МНЕ
        </button>
      </div>
    </div>
  );
};

export default WhatsAppLink;
