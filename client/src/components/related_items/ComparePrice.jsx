import React from "react";
import { Row } from "../styles/Card.js";

const ComparePrice = ({currentPrice, clickedPrice}) => {

  if (currentPrice === clickedPrice) {
    return (
      <Row>
        <div></div>
        <div>Lower Price</div>
        <div></div>
      </Row>
    );
  } else if (currentPrice < clickedPrice) {
    return (
    <Row>
      <div>&#10003;</div>
      <div>Lower Price</div>
      <div></div>
    </Row>
    );
  } else {
    return (
    <Row>
      <div></div>
      <div>Lower Price</div>
      <div>&#10003;</div>
    </Row>
    );
  }
};

export default ComparePrice;