import React, { useState, useEffect } from "react";

const Shop = ({ saved, setSaved }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  const saveItem = (dataItem) => {
    setSaved((prevDataItem) => {
      return [...prevDataItem, dataItem].filter(
        (item, idx, arr) => arr.indexOf(item) === idx
      );
    });
  };

  return (
    <section className="shop">
      <div className="container">
        <div className="shop__wrapper">
          <ul className="shop__list">
            {data?.map((dataItem) => (
              <li key={dataItem.id} className="shop__item">
                <div className="shop__item_image">
                  <img src={dataItem.image} alt={dataItem.title} />
                </div>
                <div className="shop__item_title">
                  <h4 className="title4">{dataItem.title}</h4>
                </div>
                <div className="shop__item_row">
                  <span className="shop__item_price">{dataItem.price}$</span>
                  <span className="shop__item_rate">
                    rating: {dataItem.rating.rate}
                  </span>
                </div>
                <div className="shop__item_button">
                  <button onClick={() => saveItem(dataItem)}>buy</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Shop;
