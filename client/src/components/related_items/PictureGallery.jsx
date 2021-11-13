import React from "react";
import { Row } from "../styles/Card.js";
const PictureGallery = ({currentGallery, clickedGallery}) => {

  console.log('currentGallery', currentGallery, 'clickedGallery', clickedGallery)

  if (currentGallery && !clickedGallery){
    return (
      <Row>
        <div>&#10003;</div>
        <div>Picture(s) Available</div>
        <div></div>
      </Row>
    );
  } else if (!currentGallery && clickedGallery) {
    return (
      <Row>
        <div></div>
        <div>Picture(s) Available</div>
        <div>&#10003;</div>
      </Row>
    );
  } else {
    return (
      <Row>
        <div>&#10003;</div>
        <div>Picture(s) Available</div>
        <div>&#10003;</div>
      </Row>
    );
  }

};

export default PictureGallery;