import { useState } from "react";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Shop from "./sections/Shop";
import Popup from "./components/Popup";

function App() {
  const [saved, setSaved] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  return (
    <>
      <Header saved={saved} isPopup={isPopup} setIsPopup={setIsPopup} />
      <Shop saved={saved} setSaved={setSaved} />
      <Popup saved={saved} isPopup={isPopup} setIsPopup={setIsPopup} />
      <Footer />
    </>
  );
}

export default App;
