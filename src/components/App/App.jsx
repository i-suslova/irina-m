import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutProject from '../AboutProject/AboutProject';
import PriceOfServices from '../PriceOfServices/PriceOfServices';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import WhatsAppLink from '../WhatsAppLink/WhatsAppLink';
import TelegramLink from '../TelegramLink/TelegramLink';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/about-project'
          element={<AboutProject />}
        />
        <Route
          path='/price'
          element={<PriceOfServices />}
        />
        <Route
          path='/about-me'
          element={<AboutMe />}
        />
        <Route
          path='/contacts'
          element={<Contacts />
          }
        />
        <Route
          path='/whatsapp'
          element={<WhatsAppLink />
          }
        />
        <Route
          path='/telegram'
          element={<TelegramLink />
          }
        />
        <Route
          path='/privacy-policy'
          element={<PrivacyPolicy />}
        />

        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
