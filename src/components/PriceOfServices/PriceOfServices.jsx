import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './PriceOfServices.css';

import useHeaderHeight from '../../hooks/useHeaderHeight';

const PriceOfServices = ({ themeClass }) => {

  const navigate = useNavigate();
  const headerHeight = useHeaderHeight();

  const handleGoContacts = () => {
    navigate('/contacts');
  }

  useEffect(() => {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section className={`price ${themeClass}`} id='price'>
      <div className='price__wrapper'
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <div className={`price__container ${themeClass}`} style={{ paddingTop: `${headerHeight}px` }}></div>

        <div className={`price__container-text ${themeClass}`}>
          <h2 className={`price__title ${themeClass}`}>Стоимость услуг</h2>
          <p className={`price__text ${themeClass}`}>Первая коуч-сессия бесплатная,
            продолжительностью 30 минут, цель которой:
            <br />-познакомиться,
            <br />-обсудить тему Вашего обращения,
            <br />-прояснить Ваши ожидания от коучинга,
            <br />-согласовать условия дальнейшего взаимодействия
            (количество сессий, график и периодичность встреч,
            условия оплаты и другие организационные моменты).</p>
        </div>
      </div>

      <div className='price__wrapper-block' >
        <div className={`price__block ${themeClass}`}>
          <h3 className={`price__block-title ${themeClass}`}>8 КОУЧ-СЕССИЙ</h3>
          <p className={`price__block-duration ${themeClass}`}>4500 руб. каждая</p>
          <p className={`price__block-cost ${themeClass}`}>36000 руб.</p>
          <button className={`price__block-btn price__block-btngreen hover ${themeClass}`}
            onClick={handleGoContacts}>
            Хочу результатов</button>
        </div>
        <div className={`price__block ${themeClass}`}>
          <h3 className={`price__block-title ${themeClass}`}>10 КОУЧ-СЕССИЙ</h3>
          <p className={`price__block-duration ${themeClass}`}>4000 руб. каждая</p>
          <p className={`price__block-cost ${themeClass}`}>4000 руб.</p>
          <button className={`price__block-btn price__block-btnred hover ${themeClass}`}
            onClick={handleGoContacts}>
            Хочу полной перезагрузки</button>
        </div>
        <div className={`price__block ${themeClass}`}>
          <h3 className={`price__block-title ${themeClass}`}>РАЗОВАЯ КОУЧ-СЕССИЯ</h3>
          <p className={`price__block-duration ${themeClass}`}>длительность 60 мин.</p>
          <p className={`price__block-cost ${themeClass}`}>6000 руб.</p>
          <button className={`price__block-btn price__block-btngreen hover ${themeClass}`}
            onClick={handleGoContacts}>
            Хочу попробовать</button>
        </div>
        <div className={`price__block ${themeClass}`}>
          <h3 className={`price__block-title ${themeClass}`}>РАЗОВАЯ КОНСУЛЬТАЦИЯ
            ПСИХОЛОГА по запросу работы с психосоматикой</h3>
          <p className={`price__block-duration ${themeClass}`}>длительность 60 мин.</p>
          <p className={`price__block-cost ${themeClass}`}>6000 руб.</p>
          <button className={`price__block-btn price__block-btngreen hover ${themeClass}`}
            onClick={handleGoContacts} >
            Нужна консультация</button>
        </div>
      </div>
    </section>

  );
};

export default PriceOfServices;



