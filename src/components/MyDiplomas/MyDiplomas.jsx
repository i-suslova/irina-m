import React from 'react';

import './MyDiplomas.css';

import MyDiplomasOnePhoto from '../../images/MyDiplomasOnePhoto.png';
import MyDiplomasTwoPhoto from '../../images/MyDiplomasTwoPhoto.png';
import MyDiplomasThreePhoto from '../../images/MyDiplomasThreePhoto.png';

const MyDiplomas = () => {
    return (

        <section className='my-diplomas' id='my-diplomas'>

            <div className='my-diplomas__container'>

                <h2 className='my-diplomas__title'>Дипломы и сертификаты</h2>
                <div className='my-diplomas__block'>
                    <img
                        className='my-diplomas__img'
                        src={MyDiplomasOnePhoto}
                        alt='Фотография сертификата'
                    />
                    <img
                        className='my-diplomas__img'
                        src={MyDiplomasTwoPhoto}
                        alt='Фотография сертификата'
                    />
                    <img
                        className='my-diplomas__img'
                        src={MyDiplomasThreePhoto}
                        alt='Фотографии 7 сертификатов'
                    />
                </div>
            </div>

        </section>
    );
}

export default MyDiplomas;



