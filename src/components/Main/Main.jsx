import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Main.css';

import MainPhoto from '../../images/MainPhoto.png';
import useHeaderHeight from '../../hooks/useHeaderHeight';

const Main = () => {

  const headerHeight = useHeaderHeight();

  const navigate = useNavigate();

  const handleGoPrice = () => {
    navigate('/price');
  }

  return (
    <section className='main' id='main'
      style={{ paddingTop: `${headerHeight}px` }}>
      <div className='main__wrapper '>
        <img
          className='main__photo'
          src={MainPhoto}
          alt='фотография автора'
        />

        <div className='main__blok-info'>
          <h2 className='main__title'>Ирина Медведева</h2>

          <h3 className='main__subtitle'>коуч ACC ICF, психолог</h3>
          <p className='main__text'>
            Поддерживаю Вас и помогаю раскрыть Ваш потенциал на пути к достижению результата.
          </p>
          <button className='main__link hover' onClick={handleGoPrice}>
            Хочу в коучинг
          </button>
        </div>

      </div>

    </section>
  )
}

export default Main


