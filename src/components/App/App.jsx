import React, { useState } from 'react';
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

  const savedDarkMode = localStorage.getItem('darkMode');

  const [isDarkMode, setIsDarkMode] = useState(savedDarkMode ? JSON.parse(savedDarkMode) : false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;

      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const themeClass = isDarkMode ? 'dark-theme' : '';

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>

      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        themeClass={themeClass}
      />

      <Routes>
        <Route
          path='/'
          element={<Main
            themeClass={themeClass} />}
        />

        <Route
          path='/about-project'
          element={<AboutProject
            themeClass={themeClass}
            isDarkMode={isDarkMode}
          />}
        />
        <Route
          path='/price'
          element={<PriceOfServices
            themeClass={themeClass}
          />}
        />
        <Route
          path='/about-me'
          element={<AboutMe
            themeClass={themeClass}
            isDarkMode={isDarkMode}
          />}
        />
        <Route
          path='/contacts'
          element={<Contacts
            themeClass={themeClass}
          />
          }
        />
        <Route
          path='/whatsapp'
          element={<WhatsAppLink
            themeClass={themeClass}
          />
          }
        />
        <Route
          path='/telegram'
          element={<TelegramLink
            themeClass={themeClass}
          />
          }
        />
        <Route
          path='/privacy-policy'
          element={<PrivacyPolicy
            themeClass={themeClass}
          />}
        />

        <Route
          path='*'
          element={<NotFoundPage
            themeClass={themeClass}
          />}
        />
      </Routes>
      <Footer
        themeClass={themeClass} />
    </div>
  );
}

export default App
