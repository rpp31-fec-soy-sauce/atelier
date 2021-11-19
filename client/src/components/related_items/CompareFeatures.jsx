import React from "react";
import { Row } from "../styles/Card.js";

const CompareFeatures = ({currentFeatures, clickedFeatures}) => {

  console.log('currentFeatures: ', currentFeatures, 'clickedFeatures: ', clickedFeatures)

  let copyCurrentFeatures = currentFeatures.slice();
  let copyClickedFeatures = clickedFeatures.slice();

  let stringCurrentFeatures = copyCurrentFeatures.map(e => JSON.stringify(e));
  let stringClickedFeatures = copyClickedFeatures.map(e => JSON.stringify(e));

  let sameFeature = stringCurrentFeatures.filter(e => stringClickedFeatures.indexOf(e) >= 0);

  let filterCurrent = stringCurrentFeatures.filter(e => sameFeature.indexOf(e) < 0);
  let filterClicked = stringClickedFeatures.filter(e => sameFeature.indexOf(e) < 0);

  // console.log(stringCurrentFeatures)
  // console.log(stringClickedFeatures)
  // console.log('sameFeature: ', sameFeature)
  // console.log('filterCurrent: ', filterCurrent)
  // console.log('filterClicked: ', filterClicked)

  let parsedSameFeature = sameFeature.map(e => JSON.parse(e));
  let parsedCurrent = filterCurrent.map(e => JSON.parse(e));
  let parsedClicked = filterClicked.map(e => JSON.parse(e));

  // console.log(parsedSameFeature)
  // console.log(parsedCurrent)
  // console.log(parsedClicked)

  let transformSame = [];
  let transformCurrent = [];
  let transformClicked = [];

  if (parsedSameFeature.length > 0) {
    transformSame = parsedSameFeature.map((e, i) => {
      return (
        <Row role='rowSame' key={i} style={{margin: '10px 0'}}>
          <div>{e.value}</div>
          <div><b>{e.feature}</b></div>
          <div>{e.value}</div>
        </Row>
      );
    })
  }

  if (parsedCurrent.length > 0) {
    transformCurrent = parsedCurrent.map((e, i) => {
      return (
        <Row role='rowCurrent' key={i} style={{margin: '10px 0'}}>
          {e.value ? <div>{e.value}</div> : <div>&#10003;</div>}
          <div><b>{e.feature}</b></div>
          <div></div>
        </Row>
      );
    })
  }

  if (parsedClicked.length > 0) {
    transformClicked = parsedClicked.map((e, i) => {
      return (
        <Row role='rowClicked' key={i} style={{margin: '10px 0'}}>
          <div></div>
          <div><b>{e.feature}</b></div>
          {e.value ? <div>{e.value}</div> : <div>&#10003;</div>}
        </Row>
      );
    })
  }

  return (
    <div>
      {transformSame.length > 0 ? transformSame : null}
      {transformCurrent.length > 0 ? transformCurrent : null}
      {transformClicked.length > 0 ? transformClicked : null}
    </div>
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