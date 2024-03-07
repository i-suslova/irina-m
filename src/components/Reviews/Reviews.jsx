import React, { useState } from 'react';
import './Reviews.css';
import ArrowRightDark from '../../images/ArrowRightDark.svg';
import ArrowRightLight from '../../images/ArrowRightLight.svg';
import ArrowLeftDark from '../../images/ArrowLeftDark.svg';
import ArrowLeftLight from '../../images/ArrowLeftLight.svg';

import Point from '../../images/Point.svg';


const Reviews = ({ themeClass, isDarkMode }) => {
    const reviewsData = [
        {
            text: (
                <>
                    <p>Ирина, спасибо Вам большое за сессии и глубочайшую работу! За ваше внимание, понимание, принятие, без критики и осуждения, какая я есть. За готовность разобраться и завершить начатое!</p>

                    <p> Вы никогда не бросали меня с незавершенным вопросом, "разворошив улей", а старались убедиться, что оставляете меня в полном душевном равновесии!</p>

                    <p> Вы помогли провести очень важную и глубокую работу, деликатно и этично относились к предметам обсуждения! Спасибо вам! Я глубоко ценю ваш профессионализм и исключительные личные качества!</p>

                    <p> Очень рекомендую Ирину как коуча! Начиная курс сессий, я не представляла, что возможно настолько глубокое погружение и серьезный результат! Спасибо!</p>
                </>
            ),
            author: 'Анна. Фотограф',
        },
        {
            text: (
                <>
                    <p>Ирина, честно.... долго думала и собиралась с мыслями, потому что курс коучинга меня заставил поразмышлять над многим.</p>

                    <p> Хочу выразить слова благодарности за то, что я прошла этот курс с таким коучем как ты, Ирина!</p>

                    <p> В первую очередь, потому что ты нашла способ понять меня и "сдвинуть" мои мысли так, чтобы они превратились в действия.</p>

                    <p> Я очень благодарна за то, что у меня получилось "победить себя" за многие годы и стала больше прислушиваться к себе!</p>

                    <p> Все навыки , которые я получила в познании себя, буду стараться сохранить и пользоваться ими в разных ситуациях! СПАСИБООООО!!!!!</p>
                </>
            ),
            author: 'Наталья. Преподаватель.',
        },
        {
            text: (
                <>
                    <p>Вот и завершился интереснейший этап в 12 коуч сессий с Ириной, @irin_med!</p>

                    <p>За это время произошла трансформация меня, во всех сферах жизни.</p>

                    <p>До начала работы, я думала, что коуч это тренер, выслушавший запрос и говорящий куда идти и что делать и время от времени проверяющих, как у меня это получается?

                        Как оказалось, это совершенно другое. Это невероятно интереснейшая и глубокая работа над собой. Коуч это профессионал, искусно направляющий к ответам на все вопросы, которые как выяснилось, хранятся внутри меня.</p>

                    <p>И Ирина, искусно, каждую сессию, помогала разгребать те завалы в голове, мыслях, чувствах и наводить порядок. Поэтому, после каждой сессии у меня открывался фонтан энергии. Я успевала сделать больше, чем обычно, становилась легче, продуктивнее и эффективнее!

                        Теперь порядок в мыслях, чувствах, в жизни!</p>

                    <p>Благодарю за состояние гармонии, счастья и те результаты, которые вдохновляют поддерживать это, расти и развиваться дальше.

                        Самое главное, что я получила, это уверенность - куда иду и знаю как!</p>

                    <p>БЛАГОДАРЮ!</p>
                </>
            ),
            author: 'Анна Григорьева. Психолог.',
        },
        {
            text: (
                <>
                    <p>Дорогая моя Ирина, irin_med!!!</p>
                    <p>Я очень рада, что мой первый опыт с коучем был именно с Вами. С Вами очень легко и просто.</p>
                    <p>Ведь перед началом коуч-сессий я стояла на развилке у трёх дорог. Самое главное, что стояла я уже давно и не решалась двинуться вперед. Никак не могла определить- куда идти. Было слишком много идей, но мало действий. Не могла выйти из зоны комфорта.</p>
                    <p>После проведенных сессий нашла тропинку куда отправиться и определила- как по ней лучше идти.</p>
                    <p>Поднялась уверенность в себе. Получила вдохновение и получила большой энергетический позитивный заряд.</p>
                    <p>Спасибо Вам, моя дорогая@irin_med !</p>
                </>
            ),
            author: 'Яна Теванюк. Предприниматель.',
        },
        {
            text: (
                <>
                    <p>… Произошла мощнейшая трансформация , я нашла ответ на вопрос, который мучил меня уже много лет!</p>

                    <p>Ирина, ты невероятная!</p>

                    <p>Я не встречала ещё такого профессионала своего дела! Как ты почувствовала меня, мое состояние, как вывела на такой сногсшибательный результат- я не представляю! Но это что-то невероятное! Мне хочется плакать от счастья! У меня выросли крылья! Я понимаю, куда двигаться дальше! Я знаю, для чего жить!</p>

                    <p>Даже слов не могу найти подходящих, чтобы выразить свою благодарность тебе за то, что ты сделала сегодня для меня! Я счастлива❤️</p>

                    <p>БлагоДарю🙏🏻</p>
                </>
            ),
            author: 'Виктория Шидлова. Психолог',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleArrowClick = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
        } else if (direction === 'prev') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
        }
    };

    const handlePointClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className={`reviews ${themeClass}`} id='reviews'>
            <div className='reviews__container'>
                <h2 className={`reviews__title ${themeClass}`}>Отзывы</h2>
                <div className='reviews__wrapper'>
                    <div className='reviews__block'>
                        <img
                            className={`reviews__img-arrow hover ${themeClass}`}
                            src={isDarkMode ? ArrowLeftDark : ArrowLeftLight}
                            alt='значок стрелки налево'
                            onClick={() => handleArrowClick('prev')}
                        />
                        <div className={`reviews__text ${themeClass}`}>{reviewsData[currentIndex].text}</div>
                        <img
                            className={`reviews__img-arrow hover ${themeClass}`}
                            src={isDarkMode ? ArrowRightDark : ArrowRightLight}
                            alt='значок стрелки направо'
                            onClick={() => handleArrowClick('next')}
                        />
                    </div>
                    <h3 className={`reviews__author ${themeClass}`}>{reviewsData[currentIndex].author}</h3>

                    <div className="reviews__point-group">
                        {reviewsData.map((review, index) => (
                            <img
                                key={index}
                                className={`reviews__img-point hover ${index === currentIndex ? 'active' : ''} ${themeClass}`}
                                src={Point}
                                alt='значок точки'
                                onClick={() => handlePointClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
