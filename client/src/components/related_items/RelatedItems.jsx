import React from 'react';
import { RelatedSection } from '../styles/Card.js';
import Carousel from './Carousel.jsx';
import YourOutfit from './YourOutfit.jsx';

const RelatedItems = () => {

  return (
    <RelatedSection>
      <div>
      <h3>RELATED PRODUCTS</h3>
      <Carousel></Carousel>
      <h3>YOUR OUTFIT</h3>
      <YourOutfit></YourOutfit>
      </div>
    </RelatedSection>
  );
};

export default RelatedItems;