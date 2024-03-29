import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Main.css";

import MainPhoto from "../../images/MainPhoto.png";
import useHeaderHeight from "../../hooks/useHeaderHeight";

const Main = ({ themeClass }) => {
  const headerHeight = useHeaderHeight();

  const navigate = useNavigate();

  const handleGoPrice = () => {
    navigate("/price");
  };

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className={`main ${themeClass}`} id="main">
      <div
        className="main__wrapper "
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <img
          className={`main__photo ${themeClass}`}
          src={MainPhoto}
          alt="фотография автора"
        />

        <div className={`main__blok-info ${themeClass}`}>
          <h2 className="main__title">Ирина Медведева</h2>

          <h3 className="main__subtitle">коуч ACC ICF, психолог</h3>
          <p className="main__text">
            Поддерживаю Вас и помогаю раскрыть Ваш потенциал на пути к
            достижению результата.
          </p>
          <button
            className={`main__link hover ${themeClass}`}
            onClick={handleGoPrice}
          >
            Хочу в коучинг
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
