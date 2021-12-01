import React from "react";
import { Price } from "../styles/Card";

const PriceTag = ({ price }) => {

  // console.log('Price', JSON.parse(price[0]))

  if (!price) {
    return null;
  }

  if (price.length === 1) {
    return (
      <Price>${JSON.parse(price[0])}.00</Price>
    );
  } else {
      return (
        <div>
          <span style={{color: 'red', fontSize: '12px'}}>${JSON.parse(price[0])}.00&nbsp;</span>
          <span style={{ textDecoration: 'line-through', fontSize: '12px', color: '#adb6bc' }}>${JSON.parse(price[1])}.00</span>
        </div>
      );
  }

};

export default PriceTag;

// const PriceTag = ({ currentStyle }) => {
//   if (!currentStyle) return null;
//   if (currentStyle.sale_price === null)
//     return <p>{'$' + currentStyle.original_price}</p>;
//   return (
//     <p>
//       <b style={{ color: 'red' }}>{`$${currentStyle.sale_price}  `}</b>
//       <span style={{ textDecoration: 'line-through' }}>
//         {currentStyle.original_price}
//       </span>
//     </p>
//   );
// };