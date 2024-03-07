import React from 'react';

import './TrustMe.css';

import TrustMePhoto from '../../images/TrustMePhoto.png';

const TrustMe = ({ themeClass }) => {
    return (

        <section className={`trust-me ${themeClass}`} id='trust-me'>

            <div className='trust-me__container'>
                <img
                    className={`trust-me__img ${themeClass}`}
                    src={TrustMePhoto}
                    alt='Фотография коуча'
                />
                <div>
                    <h2 className={`trust-me__title ${themeClass}`}>Почему мне доверяют</h2>
                    <div className='trust-me__line'></div>
                    <div className='trust-me__wrapper'>
                        <div className='trust-me__block'>
                            <p className={`trust-me__number ${themeClass}`}>1.</p>
                            <p className={`trust-me__text ${themeClass}`}> В качестве сертифицированного Коуча
                                <br />Работаю с соблюдением этических норм и профессиональных Стандартов, принятых Международной Федерацией Коучинга (ICF).
                                <br /> Это значит, что процесс взаимодействия с клиентом проходит в условиях взаимного уважения, доверия, партнерства, открытости, поддержки, безоценочности, конфиденциальности.

                                <br /> <br />Беру ответственность за процесс в каждой коуч-сессии.

                                <br /><br /> Помогаю раскрыть Ваш потенциал с помощью сильных вопросов для эффективного продвижения к желаемому результату.

                                <br /><br />НЕ даю советов и готовых решений.
                            </p>
                        </div>
                        <div className='trust-me__block'>
                            <p className={`trust-me__number ${themeClass}`}>2.</p>
                            <p className={`trust-me__text ${themeClass}`}> В качестве Психолога
                                <br /> Помогаю избавиться от внутренних страхов и блоков посредством работы с чувствами и эмоциями, используя метод регресса (авторский метод А. Толоконина работы с психосоматикой).
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default TrustMe;



