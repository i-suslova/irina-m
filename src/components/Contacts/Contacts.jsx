import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Contacts.css';

import ContactsPhoto from '../../images/ContactsPhoto.png';

const Contacts = () => {

    const navigate = useNavigate();

    const handleGoWhatsApp = () => {
        navigate('/whatsapp');
    }

    const handleGoTelegram = () => {
        navigate('/telegram');
    }

    return (

        <section className='contacts' id='contacts'>

            <div className='contacts__container'></div>

            <div className='contacts__block'>
                <img
                    className='contacts__photo'
                    src={ContactsPhoto}
                    alt='Фотография коуча'
                />
                <h2 className='contacts__title'>Ирина Медведева</h2>
                <div className='contacts__line'></div>
                <p className='contacts__text'>коуч, психолог</p>

                <button className='contacts__btn contacts__btn-telegram hover'
                    onClick={handleGoTelegram}>
                    Telegram
                </button>

                <button className='contacts__btn contacts__btn-whatsapp hover'
                    onClick={handleGoWhatsApp}>
                    WhatsApp
                </button>

            </div>

        </section>
    );
}

export default Contacts;



