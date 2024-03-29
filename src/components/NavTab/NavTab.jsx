import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./NavTab.css";
import Dropdown from "../Dropdown/Dropdown";

const NavTab = ({ themeClass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  const navItems = [
    {
      label: "О ГЛАВНОМ",
      path: "/about-project",
      content: [
        { item: "Для кого", id: "for-whom" },
        { item: "Что изменится", id: "will-change" },
        { item: "Как проходят коуч-сессии", id: "process" },
        { item: "Часто задаваемые вопросы", id: "questions" },
      ],
    },
    {
      label: "ОБО МНЕ",
      path: "/about-me",
      content: [
        { item: "Почему мне доверяют", id: "trust-me" },
        { item: "Обо мне", id: "my-education" },
        { item: "Дипломы и сертификаты", id: "my-diplomas" },
        { item: "Отзывы", id: "reviews" },
      ],
    },
    {
      label: "СТОИМОСТЬ",
      path: "/price",
      id: "price",
    },
    { label: "КОНТАКТЫ", path: "/contacts", id: "contacts" },
  ];

  const handleItemHover = (index) => {
    setIsModalOpen(true);
    setSelectedItem(navItems[index]);
  };

  const handleItemToggle = (index) => {
    setIsModalOpen(!isModalOpen);
    setSelectedItem(navItems[index]);
  };

  const handleItemClick = (path, sectionId) => {
    setIsModalOpen(false);

    // определяем высоту хедера
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;

    navigate(path);
    // скролл после завершения перехода плюс нулевая задержка
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementOffset = element.offsetTop - headerHeight;

          window.scrollTo({
            top: elementOffset,
            behavior: "smooth",
          });
        }
      }
    }, 0);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.closest(".nav-tab") === null) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <nav className={`nav-tab ${themeClass}`}>
      <ul className={`nav-tab__list ${themeClass}`}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className="nav-tab__item "
            onMouseEnter={() => handleItemHover(index)}
            onClick={() => handleItemToggle(index)}
          >
            <div className="nav-tab__item-container">
              {item.content ? (
                // у элемента есть content, используем Dropdown
                <button
                  className={`nav-tab__link ${themeClass}`}
                  onClick={() => handleItemClick(item.path, item.id)}
                >
                  {item.label}
                </button>
              ) : (
                // у элемента нет content, переходите напрямую
                <button
                  className={`nav-tab__link ${themeClass}`}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </button>
              )}
            </div>
            {isModalOpen &&
              selectedItem &&
              selectedItem.label === item.label && (
                <Dropdown
                  content={selectedItem.content}
                  onItemClick={(sectionId) =>
                    handleItemClick(item.path, sectionId)
                  }
                  onMouseEnter={() => setIsModalOpen(true)}
                  onMouseLeave={() => setIsModalOpen(false)}
                />
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTab;
