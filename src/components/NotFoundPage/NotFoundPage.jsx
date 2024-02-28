import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <main>
      <section className='not-found-page'>

        <div className='not-found-page__wrapper'>

          <h1 className='not-found-page__title'>404</h1>
          <span className='not-found-page__subtitle'>Страница не найдена</span>

          <button
            className='not-found-page__button hover'
            onClick={handleGoBack}
          >
            Назад
          </button>

        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
