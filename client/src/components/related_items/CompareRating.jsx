import React from "react";
import { Row } from "../styles/Card.js";

const CompareRating = ({currentRating, clickedRating}) => {

  if (currentRating === clickedRating) {
    return (
      <Row>
        <div></div>
        <div>Higher Rating</div>
        <div></div>
      </Row>
    );
  } else if (currentRating > clickedRating) {
    return (
    <Row>
      <div>&#10003;</div>
      <div>Higher Rating</div>
      <div></div>
    </Row>
    );
  } else {
    return (
    <Row>
      <div></div>
      <div>Higher Rating</div>
      <div>&#10003;</div>
    </Row>
    );
  }
};

export default CompareRating;

// {modalData.currentProduct.rating > modalData.clickedProduct.rating ?
//   <Row>
//     <div>&#10003;</div>
//     <div>Higher Rating</div>
//     <div></div>
//   </Row>
// :
//   <Row>
//     <div></div>
//     <div>Higher Rating</div>
//     <div>&#10003;</div>
//   </Row>
// }