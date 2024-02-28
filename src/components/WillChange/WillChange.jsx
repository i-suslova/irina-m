import React from 'react';

import './WillChange.css';

const WillChange = () => {

  return (
    <section className='will-change' id='will-change'>

      <div className='will-change__wrapper'>
        <h2 className='will-change__title'>Что изменится после коуч-сессий</h2>
        <div className='will-change__blocks-container'>
          <div className='will-change__block'>
            <div className='will-change__number'>1</div>
            <div>
              <h3 className='will-change__block-title'>Эффективность</h3>
              <p className='will-change__text'>Обретёте навыки эффективного распоряжения своим временем.
                <br /> Появится понимание куда и зачем идти, что и как делать.</p>
            </div>
          </div>

          <div className='will-change__block'>
            <div className='will-change__number'>2</div>
            <div>
              <h3 className='will-change__block-title'>Новый уровень</h3>
              <p className='will-change__text'>
                Поймёте, как можно гармонично развиваться в своих сферах жизни.
                <br />Найдёте путь развития в профессии и выйдете на новый финансовый уровень.</p>
            </div>
          </div>

          <div className='will-change__block'>
            <div className='will-change__number'>3</div>
            <div>
              <h3 className='will-change__block-title'>Отношения</h3>
              <p className='will-change__text'>Научитесь слушать себя и поймете, в чём заключается Ваша сила.</p>
            </div>
          </div>

          <div className='will-change__block'>
            <div className='will-change__number'>4</div>
            <div>
              <h3 className='will-change__block-title'>Гармония</h3>
              <p className='will-change__text'>Найдете свои ответы на том уровне, куда еще не заглядывали.
                <br />Ощутите гармонию, удовлетворение, комфорт.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WillChange;
