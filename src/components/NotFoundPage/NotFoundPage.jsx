import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFoundPage.css';

import useHeaderHeight from '../../hooks/useHeaderHeight';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const headerHeight = useHeaderHeight();

  const handleGoBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <main>
      <section className='not-found-page'>

        <div className='not-found-page__wrapper'
          style={{ paddingTop: `${headerHeight}px` }}>

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
