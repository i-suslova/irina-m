import React from 'react';

import './MyEducation.css';

import MyEducationPhoto from '../../images/MyEducationPhoto.png';

const MyEducation = () => {

    return (
        <section className='my-education' id='my-education'>

            <div className='my-education__container'>
                <img
                    className='my-education__img'
                    src={MyEducationPhoto}
                    alt='Фотография коуча'
                />

                <div className='my-education__wrapper'>

                    <h2 className='my-education__title'>Обо мне</h2>
                    <div className='my-education__line'></div>

                    <p className='my-education__text'> Имея первое высшее математическое образование (математик-преподаватель), я много лет работала в крупной IT-компании. Начинала с должности менеджера и покинула компанию в должности руководителя информационно-аналитического подразделения.

                        <br /><br /> Не смотря на то, что второе высшее психологическое образование (практическая психология) получила в 2020 году, темы развития личности, саморазвития, психология, работа с подсознанием интересовали меня всегда.

                        <br /><br /> В 2020-2021 г. обучалась коучингу по международным стандартам в Международном университете развития коучинга с высшей аккредитацией ACTP International Coaching Federation (ICF, крупнейшая Международная Федерация коучинга) на курсе «Профессиональный коуч международного уровня».

                        <br /><br />Прошла международную аккредитацию в ICF и получила сертификат коуча уровня АСС (Associate Certified Cоach).

                        <br /><br />Прошла обучение и закончила курс «Коучинг+психология» в Университете коучинга и психологии KachaginUiversity по программам:
                    </p>
                    <ul>
                        <li>Cемейный коучинг,</li>
                        <li>Профессиональный коучинг,</li>
                        <li>Коучинг предназначения,</li>
                        <li>Бизнес-коучинг</li>
                    </ul>

                    <br /><p className='my-education__text'>
                        Обучалась на авторских курсах А.О. Толоконина (к.м.н., врач, психотерапевт-сексолог-психиатр, автор метода регресса для работы с психосоматикой) и имею сертификаты: </p>
                    <ul>
                        <li>«Психосоматика родовых связей»,</li>
                        <li>«Исцеление»,</li>
                        <li>«Предназначение».</li>
                    </ul>

                    <br /> <p className='my-education__text'>
                        Мои Хобби: </p>
                    <ul>
                        <li>Йога,</li>
                        <li>Здоровый образ жизни,</li>
                        <li>Путешествия,</li>
                        <li>Нравится создавать вещи своими руками в разных техниках (пэчворк, кинусайга, картины из камней и другое).</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default MyEducation;
