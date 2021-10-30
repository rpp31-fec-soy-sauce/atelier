import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stars from '../universal_components/StarRatingStaticSmall.jsx';
import { getOutfits, addOutfit, deleteOutfit } from '../../store/funcActions.js';

import { loadRelatedProducts } from '../../store/apiActions';
import { selectRelatedProducts, selectProduct, selectCurrentStyle, selectedStyle, selectAverageRating } from '../../store/selectors';

import noImage from '../../../assets/no-preview.jpg';
import plusSign from '../../../assets/plussign.jpg';
import { Container1, Container2, Image, Category, Price, Anchor, Card, Add } from '../styles/Card.js'

const RelatedItems = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);

  const relatedProducts = useSelector(selectRelatedProducts);
  const currentProduct = useSelector(selectProduct);
  const currentStyle = useSelector(selectCurrentStyle(undefined));
  const averageRating = useSelector(selectAverageRating);



  const localStorage = () => {
    console.log('saved')
  };

  console.log('currentProduct', currentProduct);
  console.log('currentStyle', currentStyle)
  console.log(averageRating)


  return (
    <div>
      <h3>Related Products</h3>
      <Container1>
      {relatedProducts.map(product => {
        return <Anchor key={product.id}>
                <Card>
                  {!product.url ? <Image src={noImage}></Image> : <Image src={product.url}></Image>}
                  <div>
                    <Category>{product.category}</Category>
                    <h5><b>{product.name}</b></h5>
                    <Price>${product.default_price}</Price>
                    <Stars averageRating={product.rating}/>
                  </div>
                </Card>
               </Anchor>
      })}
      </Container1>
      <h3>Your Outfit</h3>
      <Container2>
        <Add onClick={() => localStorage()}>
            <Image src={plusSign}></Image>
            <div style={{marginTop: "30px", fontWeight: 'Bold'}}>Add to Outfit</div>
        </Add>
      </Container2>
      <Container1>

      </Container1>

    </div>
  );
};

export default RelatedItems;