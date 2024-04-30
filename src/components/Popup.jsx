import React from "react";

//images
import closeIcon from "../images/close.svg";

const Popup = ({ saved, isPopup, setIsPopup }) => {
  return (
    <div className={`popup ${isPopup ? "" : "none"}`}>
      <ul className="popup__list">
        {saved?.map((savedItem) => (
          <li key={savedItem.id} className="popup__item">
            <div className="popup__item_image">
              <img src={savedItem.image} alt={savedItem.title} />
            </div>
            <div className="popup__item_title">
              <h4 className="title4">{savedItem.title}</h4>
            </div>
            <div className="popup__item_row">
              <span className="popup__item_price">{savedItem.price}$</span>
              <span className="popup__item_rate">
                rating: {savedItem.rating.rate}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsPopup(!isPopup)} className="popup__button">
        <img src={closeIcon} alt="close Icon" />
      </button>
    </div>
  );
};

export default Popup;
