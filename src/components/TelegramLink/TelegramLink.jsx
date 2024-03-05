import React, { useEffect } from 'react';

import './TelegramLink.css';
import useHeaderHeight from '../../hooks/useHeaderHeight';

const phoneNumber = process.env.REACT_APP_PHONE;

const TelegramLink = () => {

  const handleTelegramClick = () => {
    const telegramUrl = `https://t.me/${phoneNumber}`;
    window.open(telegramUrl, '_blank');
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
    <div className='telegram'>

      <div className='telegram__wrapper'
        style={{ paddingTop: `${headerHeight}px` }}
      >

        <div className='telegram__container'></div>
        <h2 className='telegram__title'>
          Telegram  {phoneNumber}
        </h2>
        <p className='telegram__text'>Вы можете задать вопрос
          <br /> или записаться на консультацию:</p>
        <button className='telegram__btn hover'
          onClick={handleTelegramClick}>
          НАПИШИТЕ МНЕ
        </button>
      </div>
    </div>
  );
};

export default TelegramLink;
