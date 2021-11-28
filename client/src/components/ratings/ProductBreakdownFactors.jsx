import React from "react";
import blackTriangle from '../../../assets/blackTriangle.png';

const ProductBreakdownFactors = (props) => {
  const { productFactorValue } = props;

  const position = ((230/5) * productFactorValue -10);

  const containerStyles = {
    height: 10,
    width: 230,
    backgroundColor: "#e0e0de",
    margin: 0
  }

  const trianglePosition = {
    height: 14,
    width: 14,
    position: 'relative',
    left: position
  }

  return (
    <div style={containerStyles}>
      <img data-testid="trianglePointer" style={trianglePosition} src={blackTriangle}></img>
    </div>
  );
};

export default ProductBreakdownFactors;