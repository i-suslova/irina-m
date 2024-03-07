import React from 'react'

import './Process.css'

const Process = ({ themeClass }) => {

  return (
    <section className={`process ${themeClass}`} id="process">
      <div className='process__wrapper'>
        <h2 className={`process__title ${themeClass}`}>Как проходят коуч-сессии</h2>
        <div className='process__blocks-container'>
          <div className='process__block'>
            <h3 className={`process__block-title ${themeClass}`}>Формат</h3>
            <div className={`process__line-stroke ${themeClass}`} />
            <p className={`process__text ${themeClass}`}>Сессии проходят ОНЛАЙН с видео,
              в удобном Вам мессенджере (Skype, Zoom, WhatsApp, Viber).</p>
          </div>
          <div className='process__block'>
            <h3 className={`process__block-title ${themeClass}`}>Продолжительность</h3>
            <div className={`process__line-stroke ${themeClass}`} />
            <p className={`process__text ${themeClass}`}>Продолжительность одной коуч-сессии 60 минут.
              Периодичность 1 раз в неделю.</p>
          </div>
          <div className='process__block'>
            <h3 className={`process__block-title ${themeClass}`}>Длительность</h3>
            <div className={`process__line-stroke ${themeClass}`} />
            <p className={`process__text ${themeClass}`}>Серия индивидуальных 8-10 коуч-сессий
              в течение 2,5 -3 месяцев.</p>
          </div>
          <div className='process__block'>
            <h3 className={`process__block-title ${themeClass}`}>В результате</h3>
            <div className={`process__line-stroke ${themeClass}`} />
            <p className={`process__text ${themeClass}`}>Получите ясность своей цели и пути ее достижения, появится уверенность и вера в себя.
              Ваш результат также зависит от Ваших действий между сессиями.</p>
          </div>
        </div>
        <div className='process__quote'>

          <div className={`process__quote-line ${themeClass}`}>
            <h3 className={`process__quote-title ${themeClass}`}>А.ЭНШТЕЙН</h3>
          </div>
          <p className={`process__quote-text ${themeClass}`}>«Не слушайте человека, у которого есть ответы,
            <br />Слушайте человека, у которого есть вопросы!»</p>
          <div className={`process__quote-line ${themeClass}`} />
        </div>
      </div>
    </section>
  )
}

export default Process;
