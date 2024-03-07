import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Contacts.css';

import ContactsPhoto from '../../images/ContactsPhoto.png';
import useHeaderHeight from '../../hooks/useHeaderHeight';

const Contacts = ({ themeClass }) => {

    const navigate = useNavigate();
    const headerHeight = useHeaderHeight();

    const handleGoWhatsApp = () => {
        navigate('/whatsapp');
    }

    const handleGoTelegram = () => {
        navigate('/telegram');
    }

    useEffect(() => {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (

        <section className={`contacts ${themeClass}`} id='contacts'>
            <div className='contacts__wrapper'
                style={{ paddingTop: `${headerHeight}px` }}
            >
                <div className={`contacts__container ${themeClass}`}></div>

                <div className='contacts__block'>
                    <img
                        className={`contacts__photo ${themeClass}`}
                        src={ContactsPhoto}
                        alt='Фотография коуча'
                    />
                    <h2 className={`contacts__title ${themeClass}`}>Ирина Медведева</h2>
                    <div className='contacts__line'></div>
                    <p className={`contacts__text ${themeClass}`}>коуч, психолог</p>

                    <button className={`contacts__btn contacts__btn-telegram hover ${themeClass}`}
                        onClick={handleGoTelegram}>
                        Telegram
                    </button>

                    <button className={`contacts__btn contacts__btn-whatsapp hover ${themeClass}`}
                        onClick={handleGoWhatsApp}>
                        WhatsApp
                    </button>

                </div>
            </div>
        </section>
    );
}

export default Contacts;

