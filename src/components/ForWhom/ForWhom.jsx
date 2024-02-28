import React from 'react';

import './ForWhom.css'

import ForWhomPhoto from '../../images/ForWhomPhoto.png';
import flag from '../../images/flag.png';
import bag from '../../images/bag.png';
import header from '../../images/heard.png';
import time from '../../images/time.png';

const ForWhom = () => {

  return (
    <section className='for-whom' id='for-whom'>

      <div className='for-whom__wrapper'>
        <div className='for-whom__title'>
          <h2 className='for-whom__title-big'>Коучинг</h2>
          <h3 className='for-whom__title-small'>для женщин, желающих</h3>
        </div>
        <div className='for-whom__blocks'>
          <div className='for-whom__block'>
            <div className='for-whom__line'>
              <img
                className='for-whom__block-img'
                src={bag}
                alt='фотография Цветка в вазе'
              />
              <p className='for-whom__block-text'>
                найти пути развития в профессии или построении своего бизнеса;
              </p>
            </div>
            <div className='for-whom__line'>
              <img
                className='for-whom__block-img'
                src={header}
                alt='фотография Цветка в вазе'
              />
              <p className='for-whom__block-text'>
                наладить гармоничную личную жизнь;
              </p>
            </div>
            <div className='for-whom__line'>
              <img
                className='for-whom__block-img'
                src={flag}
                alt='фотография Цветка в вазе'
              />
              <p className='for-whom__block-text'>
                найти мотивацию для достижения своей цели;
              </p>
            </div>
            <div className='for-whom__line'>
              <img
                className='for-whom__block-img'
                src={time}
                alt='фотография Цветка в вазе'
              />
              <p className='for-whom__block-text'>
                наладить гармоничную личную жизнь;
              </p>
            </div>
          </div>

          <img
            className='for-whom__photo'
            src={ForWhomPhoto}
            alt='фотография Цветка в вазе'
          />
        </div>
      </div>

    </section>
  )
}

export default ForWhom


