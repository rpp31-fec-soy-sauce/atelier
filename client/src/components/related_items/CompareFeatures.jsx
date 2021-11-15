import { current } from "immer";
import React from "react";
import { Row } from "../styles/Card.js";
import "underscore"

const CompareFeatures = ({currentFeatures, clickedFeatures}) => {

  console.log('currentFeatures: ', currentFeatures, 'clickedFeatures: ', clickedFeatures)

  let copyCurrentFeatures = currentFeatures.slice();
  let copyClickedFeatures = clickedFeatures.slice();

  let sameFeature = [];

  copyCurrentFeatures.forEach((element, currIndex) => {
    copyClickedFeatures.forEach((item, clickedIndex) => {
      if (_.isEqual(element, item)) {
        sameFeature.push(element);
      }
    });
  });

  console.log(sameFeature)
  // console.log(copyCurrentFeatures)
  // console.log(copyClickedFeatures)

  return (
    <div>Hello</div>
  );

};

export default CompareFeatures;

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

// if (currentRating === clickedRating) {
//   return (
//     <Row>
//       <div></div>
//       <div>Higher Rating</div>
//       <div></div>
//     </Row>
//   );
// } else if (currentRating > clickedRating) {
//   return (
//   <Row>
//     <div>&#10003;</div>
//     <div>Higher Rating</div>
//     <div></div>
//   </Row>
//   );
// } else {
//   return (
//   <Row>
//     <div></div>
//     <div>Higher Rating</div>
//     <div>&#10003;</div>
//   </Row>
//   );
// }