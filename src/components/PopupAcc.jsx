import React, { useState } from "react";

import closeIcon from "../images/close.svg";
import logoutIcon from "../images/logoutIcon.svg";

const PopupAcc = ({ isPopupAcc, setIsPopupAcc, name, setName }) => {
  const [pass, setPass] = useState("");
  const [log, setLog] = useState("");
  const [accounts, setAccounts] = useState([
    { name: "Leo", pass: "123" },
    { name: "Pavel", pass: "123" },
  ]);

  const authUser = (e, log, pass) => {
    e.preventDefault();
    for (let account of accounts) {
      if (account.name === log && account.pass === pass) {
        setName(log);
      } else {
        setAccounts([
          ...accounts,
          {
            name: log,
            pass: pass,
          },
        ]);
      }
    }
  };

  const logoutUser = () => {
    setName("");
  };

  return (
    <div className={`account ${isPopupAcc ? "" : "none"}`}>
      <form className="account__form">
        <div className="account__form_name">
          <label htmlFor="userName">Login</label>
          <input
            onChange={(e) => setLog(e.target.value)}
            placeholder="login"
            type="text"
            id="userName"
          />
        </div>
        <div className="accout__form_password">
          <label htmlFor="userPassword">Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
            type="password"
            id="userPassword"
          />
        </div>
        <div className="account__form_button">
          <button onClick={(e) => authUser(e, log, pass)}>Submit</button>
        </div>
      </form>
      <button
        onClick={() => setIsPopupAcc(!isPopupAcc)}
        className="account__button"
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <button onClick={() => logoutUser()} className="accout__button-logout">
        <img src={logoutIcon} alt="" />
      </button>
    </div>
  );
};

export default PopupAcc;
