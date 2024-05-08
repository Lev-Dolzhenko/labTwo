import React from "react";

//images
import logotype from "../images/logotypeBasket.svg";

const HeaderNav = ({
  name,
  saved,
  isPopup,
  setIsPopup,
  isPopupAcc,
  setIsPopupAcc,
}) => {
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
          <li className="header__item">
            <a href="#!">Home</a>
          </li>
          <li className="header__item">
            <a href="#!">About</a>
          </li>
          <li className="header__item">
            <a href="#!">Shop</a>
          </li>
          <li className="header__item">
            <button onClick={() => setIsPopupAcc(!isPopupAcc)} href="#!">
              Accout-{name}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNav;
