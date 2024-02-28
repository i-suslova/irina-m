import React from 'react';

import './WhatsAppLink.css';

const { phoneNumber } = require('../../components/config');

const WhatsAppLink = () => {

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='whats-app-link'>
      <div className='whats-app-link__container'></div>
      <h2 className='whats-app-link__title'>
        WhatsApp  {phoneNumber}
      </h2>
      <p className='whats-app-link__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore magni recusandae! Labore veniam adipisci fuga! Iusto nostrum nobis vitae debitis quam vero, maiores a repudiandae quia reprehenderit voluptatum dolore.</p>
      <button className='whats-app-link__btn hover'
        onClick={handleWhatsAppClick}>
        НАПИШИТЕ МНЕ
      </button>
    </div>
  );
};

export default WhatsAppLink;
