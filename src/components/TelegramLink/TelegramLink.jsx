import React, { useEffect } from "react";

import "./TelegramLink.css";
import useHeaderHeight from "../../hooks/useHeaderHeight";

const phoneUserName = process.env.REACT_APP_TELEGRAM_USERNAME;
const phoneNumber = process.env.REACT_APP_PHONE;

const TelegramLink = ({ themeClass }) => {
  const handleTelegramClick = () => {
    const telegramUrl = `https://t.me/${phoneUserName}`;
    window.open(telegramUrl, "_blank");
  };

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={`telegram ${themeClass}`}>
      <div
        className="telegram__wrapper"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <div className={`telegram__container ${themeClass}`}></div>
        <h2 className={`telegram__title ${themeClass}`}>
          Telegram: {phoneNumber}
        </h2>
        <p className={`telegram__text ${themeClass}`}>
          Вы можете задать вопрос
          <br /> или записаться на консультацию:
        </p>
        <button
          className={`telegram__btn hover ${themeClass}`}
          onClick={handleTelegramClick}
        >
          НАПИШИТЕ МНЕ
        </button>
      </div>
    </div>
  );
};

export default TelegramLink;
