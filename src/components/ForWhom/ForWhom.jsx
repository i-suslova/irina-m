import React from 'react';

import './ForWhom.css'

import ForWhomPhoto from '../../images/ForWhomPhoto.png';
import flagL from '../../images/flagL.png';
import flagD from '../../images/flagD.png';
import bagL from '../../images/bagL.png';
import bagD from '../../images/bagD.png';
import headerL from '../../images/heardL.png';
import headerD from '../../images/heardD.png';
import timeL from '../../images/timeL.png';
import timeD from '../../images/timeD.png';

const ForWhom = ({ themeClass, isDarkMode }) => {

  return (
    <section className={`for-whom ${themeClass}`} id='for-whom'>

      <div className='for-whom__wrapper'>
        <div className='for-whom__title'>
          <h2 className={`for-whom__title-big ${themeClass}`} >Коучинг</h2>
          <h3 className={`for-whom__title-small ${themeClass}`} >для женщин, желающих</h3>
        </div>
        <div className='for-whom__blocks'>
          <div className='for-whom__block'>
            <div className='for-whom__line'>
              <img
                className='for-whom__block-img'
                src={isDarkMode ? bagD : bagL}
                alt='Значок портфеля'
              />
              <p className={`for-whom__block-text ${themeClass}`}>
                найти пути развития в профессии или построении своего бизнеса;
              </p>
            </div>
            <div className='for-whom__line'>
              <img
                className='for-whom__block-img'
                src={isDarkMode ? headerD : headerL}
                alt='Значок 2 рук с сердцем'
              />
              <p className={`for-whom__block-text ${themeClass}`}>
                наладить гармоничную личную жизнь;
              </p>
            </div>
            <div className='for-whom__line'>
              <img
                className='for-whom__block-img'
                src={isDarkMode ? flagD : flagL}
                alt='значок человека на лестнице '
              />
              <p className={`for-whom__block-text ${themeClass}`}>
                найти мотивацию для достижения своей цели;
              </p>
            </div>
            <div className='for-whom__line'>
              <img
                className='for-whom__block-img'
                src={isDarkMode ? timeD : timeL}
                alt='Значок фотоаппарата'
              />
              <p className={`for-whom__block-text ${themeClass}`}>
                наладить гармоничную личную жизнь;
              </p>
            </div>
          </div>

          <img
            className={`for-whom__photo ${themeClass}`}
            src={ForWhomPhoto}
            alt='фотография Цветка в вазе'
          />
        </div>
      </div>

    </section>
  )
}

export default ForWhom


