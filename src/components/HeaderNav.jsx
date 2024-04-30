import React from "react";

//images
import logotype from "../images/logotypeBasket.svg";

const HeaderNav = ({ saved, isPopup, setIsPopup }) => {
  const links = ["Home", "About", "Shop", "Accout"];
  return (
    <div className="header__row">
      <div className="header__logotype">
        <button onClick={() => setIsPopup(!isPopup)} href="#!">
          <img src={logotype} alt="Логотип Компании" />
          {saved.length !== 0 && <span></span>}
        </button>
      </div>
      <nav className="header__navigation">
        <ul className="header__list">
          {links.map((link) => (
            <li key={link} className="header__item">
              <a href="#!">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
