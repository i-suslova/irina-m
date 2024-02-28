import React from 'react';
import { useNavigate } from 'react-router-dom';

import './PriceOfServices.css';

const PriceOfServices = () => {

  const navigate = useNavigate();

  const handleGoContacts = () => {
    navigate('/contacts');
  }

  return (
    <section className='price' id='price'>

      <div className='price__container'></div>

      <div className='price__container-text'>
        <h2 className='price__title'>Стоимость услуг</h2>
        <p className='price__text'>Первая коуч-сессия бесплатная,
          продолжительностью 30 минут, цель которой:
          <br />-познакомиться,
          <br />-обсудить тему Вашего обращения,
          <br />-прояснить Ваши ожидания от коучинга,
          <br />-согласовать условия дальнейшего взаимодействия
          (количество сессий, график и периодичность встреч,
          условия оплаты и другие организационные моменты).</p>
      </div>

      <div className='price__wrapper' >
        <div className='price__block'>
          <h3 className='price__block-title'>8 КОУЧ-СЕССИЙ</h3>
          <p className='price__block-duration'>4500 руб. каждая</p>
          <p className='price__block-cost'>36000 руб.</p>
          <button className='price__block-btn price__block-btngreen hover' onClick={handleGoContacts}>
            Хочу результатов</button>
        </div>
        <div className='price__block'>
          <h3 className='price__block-title'>10 КОУЧ-СЕССИЙ</h3>
          <p className='price__block-duration'>4000 руб. каждая</p>
          <p className='price__block-cost'>4000 руб.</p>
          <button className='price__block-btn price__block-btnred hover' onClick={handleGoContacts}>
            Хочу полной перезагрузки</button>
        </div>
        <div className='price__block'>
          <h3 className='price__block-title'>РАЗОВАЯ КОУЧ-СЕССИЯ</h3>
          <p className='price__block-duration'>длительность 60 мин.</p>
          <p className='price__block-cost'>6000 руб.</p>
          <button className='price__block-btn price__block-btngreen hover' onClick={handleGoContacts}>
            Хочу попробовать</button>
        </div>
        <div className='price__block'>
          <h3 className='price__block-title'>РАЗОВАЯ КОНСУЛЬТАЦИЯ
            ПСИХОЛОГА по запросу работы с психосоматикой</h3>
          <p className='price__block-duration'>длительность 60 мин.</p>
          <p className='price__block-cost'>6000 руб.</p>
          <button className='price__block-btn price__block-btngreen hover' onClick={handleGoContacts} >
            Нужна консультация</button>
        </div>

      </div>
    </section>

  );
};

export default PriceOfServices;



