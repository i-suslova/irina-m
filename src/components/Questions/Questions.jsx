import React, { useState } from 'react';
import './Questions.css';
import PlusWhite from '../../images/PlusWhite.svg';
import PlusBlack from '../../images/PlusBlack.svg';

const Questions = ({ themeClass, isDarkMode }) => {

    const [hovered, setHovered] = useState(null);
    const [openQuestions, setOpenQuestions] = useState([]);

    const handleTitleClick = (id) => {
        if (openQuestions.includes(id)) {
            // Если вопрос уже открыт, закрываем его
            setOpenQuestions(openQuestions.filter((q) => q !== id));
        } else {
            // Если вопрос не открыт, добавляем его в список открытых
            setOpenQuestions([...openQuestions, id]);
        }
    };
    const handleItemHover = (id, isHovered) => {
        setHovered(isHovered ? id : null);
    };

    const questionsData = [
        {
            id: 1,
            title: 'В чем разница между коучем и психологом?',
            text: (
                <>
                    <p>Коуч работает над созданием желаемого будущего клиента, помогая развить его собственный потенциал.
                        Коуч не является экспертом, консультантом, тренером и не даёт советы.
                    </p>
                    <p> Психолог работает с прошлым жизненным опытом клиента, находит причины, мешающие человеку качественно жить.
                    </p>
                </>
            ),
        },
        {
            id: 2,
            title: 'Какая мне польза от коучинга?',
            text: (
                <>
                    <p>У Вас появится ясное понимание того, что и как лучше делать, осознаете новые возможности для реализации своей намеченной цели и начнете действовать.
                    </p>
                </>
            ),
        },
        {

            id: 3,
            title: 'Не станет ли моя личная информация доступна третьим лицам?',
            text: (
                <>
                    <p>В своей работе я следую этическим нормам поведения и профессиональным стандартам Международной Федерации Коучинга ( ICF ), согласно которым, несу ответственность за нераспространение информации, полученной в процессе работы с клиентом.
                    </p>
                </>
            ),
        },
        {
            id: 4,
            title: 'Возможна ли «живая» сессия/консультация?',
            text: (
                <>
                    <p>Возможна. Условия встречи и стоимость согласовываются индивидуально.
                    </p>
                </>
            ),
        },
    ];

    return (
        <section className={`questions ${themeClass}`} id='questions'>
            <div className='questions__wrapper'>
                <h2 className={`questions__title ${themeClass}`}>Часто задаваемые вопросы:</h2>
                <div className='questions__blocks-container'>
                    {questionsData.map((question) => (
                        <div className='questions__block' key={question.id}>
                            <div
                                className={`questions__header ${openQuestions.includes(question.id) ? 'active' : ''} ${themeClass}`}
                                onClick={() => handleTitleClick(question.id)}

                                onMouseEnter={() => handleItemHover(question.id, true)}
                                onMouseLeave={() => handleItemHover(question.id, false)}
                            >
                                <h3 className={`questions__block-title ${themeClass}`}>
                                    {question.title}</h3>
                                <img
                                    className={`questions__img-plus ${hovered === question.id ? 'active' : ''} ${themeClass}`}
                                    src={hovered === question.id ? (isDarkMode ? PlusBlack : PlusWhite) : (isDarkMode ? PlusWhite : PlusBlack)}
                                    alt={hovered === question.id ? 'значок плюса чёрного цвета' : 'значок плюса белого цвета'}
                                />
                            </div>
                            {openQuestions.includes(question.id) && (
                                <div className={`questions__text ${themeClass}`}>{question.text}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Questions;
