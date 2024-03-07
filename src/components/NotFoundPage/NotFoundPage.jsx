import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFoundPage.css';

import useHeaderHeight from '../../hooks/useHeaderHeight';

const NotFoundPage = ({ themeClass }) => {

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
      <section className={`not-found-page ${themeClass}`}>

        <div className='not-found-page__wrapper'
          style={{ paddingTop: `${headerHeight}px` }}>

          <h1 className={`not-found-page__title ${themeClass}`}
            style={{ paddingTop: `${headerHeight}px` }}>404</h1>
          <span className={`not-found-page__subtitle ${themeClass}`}>Страница не найдена</span>

          <button
            className={`not-found-page__button hover ${themeClass}`}
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
