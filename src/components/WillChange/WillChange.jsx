import React from 'react';

import './WillChange.css';

const WillChange = ({ themeClass}) => {

  return (
    <section className={`will-change ${themeClass}`} id='will-change'>

      <div className='will-change__wrapper'>
        <h2 className={`will-change__title ${themeClass}`}>Что изменится после коуч-сессий</h2>
        <div className='will-change__blocks-container'>
          <div className='will-change__block'>
            <div className={`will-change__number ${themeClass}`}>1</div>
            <div>
              <h3 className={`will-change__block-title ${themeClass}`}>Эффективность</h3>
              <p className={`will-change__text ${themeClass}`}>Обретёте навыки эффективного распоряжения своим временем.
                <br /> Появится понимание куда и зачем идти, что и как делать.</p>
            </div>
          </div>

          <div className='will-change__block'>
            <div className={`will-change__number ${themeClass}`}>2</div>
            <div>
              <h3 className={`will-change__block-title ${themeClass}`}>Новый уровень</h3>
              <p className={`will-change__text ${themeClass}`}>
                Поймёте, как можно гармонично развиваться в своих сферах жизни.
                <br />Найдёте путь развития в профессии и выйдете на новый финансовый уровень.</p>
            </div>
          </div>

          <div className='will-change__block'>
            <div className={`will-change__number ${themeClass}`}>3</div>
            <div>
              <h3 className={`will-change__block-title ${themeClass}`}>Отношения</h3>
              <p className={`will-change__text ${themeClass}`}>Научитесь слушать себя и поймете, в чём заключается Ваша сила.</p>
            </div>
          </div>

          <div className='will-change__block'>
            <div className={`will-change__number ${themeClass}`}>4</div>
            <div>
              <h3 className={`will-change__block-title ${themeClass}`}>Гармония</h3>
              <p className={`will-change__text ${themeClass}`}>Найдете свои ответы на том уровне, куда еще не заглядывали.
                <br />Ощутите гармонию, удовлетворение, комфорт.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WillChange;
