import React from "react";

//components
import HeaderNav from "../components/HeaderNav";

const Header = ({
  name,
  saved,
  isPopup,
  setIsPopup,
  isPopupAcc,
  setIsPopupAcc,
}) => {
  return (
    <header className="header">
      <div className="container">
        <HeaderNav
          setIsPopupAcc={setIsPopupAcc}
          isPopupAcc={isPopupAcc}
          name={name}
          saved={saved}
          isPopup={isPopup}
          setIsPopup={setIsPopup}
        />
        <div className="header__wrapper">
          <div className="header__wrapper_title">
            <h1 className="title1">
              Fashion that inspires: reveal your personality
            </h1>
          </div>
          <div className="header__wrapper_title">
            <h3 className="title3">
              Pamper yourself and create your own unique image
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
