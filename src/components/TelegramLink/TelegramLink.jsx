import React from 'react';

import './TelegramLink.css';

const { phoneNumber } = require('../../components/config');

const TelegramLink = () => {

  const handleTelegramClick = () => {
    const telegramUrl = `https://t.me/${phoneNumber}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <div className='telegram'>
      <div className='telegram__container'></div>
      <h2 className='telegram__title'>
        Telegram  {phoneNumber}
      </h2>
      <p className='telegram__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore magni recusandae! Labore veniam adipisci fuga! Iusto nostrum nobis vitae debitis quam vero, maiores a repudiandae quia reprehenderit voluptatum dolore.</p>
      <button className='telegram__btn hover'
        onClick={handleTelegramClick}>
        НАПИШИТЕ МНЕ
      </button>
    </div>
  );
};

export default TelegramLink;
