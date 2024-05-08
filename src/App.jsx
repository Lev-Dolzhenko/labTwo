import { useState } from "react";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Shop from "./sections/Shop";
import Popup from "./components/Popup";
import PopupAcc from "./components/PopupAcc";

function App() {
  const [saved, setSaved] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [name, setName] = useState("");
  const [isPopupAcc, setIsPopupAcc] = useState(false);
  return (
    <>
      <Header
        isPopupAcc={isPopupAcc}
        setIsPopupAcc={setIsPopupAcc}
        name={name}
        saved={saved}
        isPopup={isPopup}
        setIsPopup={setIsPopup}
      />
      <Shop saved={saved} setSaved={setSaved} />
      <Popup saved={saved} isPopup={isPopup} setIsPopup={setIsPopup} />
      <PopupAcc
        isPopupAcc={isPopupAcc}
        setIsPopupAcc={setIsPopupAcc}
        name={name}
        setName={setName}
      />
      <Footer />
    </>
  );
}

export default App;
