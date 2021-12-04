import React from "react";
import { Price } from "../styles/Card";

const PriceTag = ({ price }) => {

  // console.log('Price', JSON.parse(price[0]))

  if (!price) {
    return null;
  }

  if (price.length === 1) {
    return (
      <Price role='original-price'>${JSON.parse(price[0])}.00</Price>
    );
  } else {
      return (
        <div>
          <span role='sale-price' style={{color: 'red', fontSize: '12px'}}>${JSON.parse(price[0])}.00&nbsp;</span>
          <span role='original-price' style={{ textDecoration: 'line-through', fontSize: '12px', color: '#adb6bc' }}>${JSON.parse(price[1])}.00</span>
        </div>
      );
  }

};

export default PriceTag;