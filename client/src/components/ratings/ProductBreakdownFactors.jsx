import React from "react";
import blackTriangle from '../../../assets/blackTriangle.png';

const ProductBreakdownFactors = (props) => {
  const { productFactorValue } = props;

  console.log('productFactorValue', productFactorValue)

  console.log('(230/5) * productFactorValue', (230/5) * productFactorValue)
  
  const position = ((230/5) * productFactorValue)+100;

  const containerStyles = {
    height: 10,
    width: 230,
    backgroundColor: "#e0e0de",
    margin: 5
  }

  const trianglePosition = {
    height: 14,
    width: 14,
    position: 'absolute',
    left: position
  }

  return (
    <div style={containerStyles}>
        <img style={trianglePosition} src={blackTriangle}></img>
    </div>
  );
};

export default ProductBreakdownFactors;