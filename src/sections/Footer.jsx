import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__list">
            <li className="footer__item footer__item_title">
              Навигационные ссылки
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Главная
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                О нас
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Контакты
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Блог
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Карта сайта
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item footer__item_title">
              Информация о компании
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Бориса Галушкина 9
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                +7 (999) 999 99 99
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                mail@yandex.ru
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item footer__item_title">
              Юридическая информация
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Условия использования
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Политика конфиденциальности
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Авторское право
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item footer__item_title">
              Дополнительные разделы
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Подписка на новости
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Обратная связь
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Помощь
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#!">
                Часто задаваемые вопросы
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
