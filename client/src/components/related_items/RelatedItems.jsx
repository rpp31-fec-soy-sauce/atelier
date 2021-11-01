import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stars from '../universal_components/StarRatingStaticSmall.jsx';
import { getOutfits, addOutfit, deleteOutfit } from '../../store/funcActions.js';

import { loadRelatedProducts } from '../../store/apiActions';
import { selectRelatedProducts, selectProduct, selectCurrentStyle, selectedStyle, selectAverageRating, selectUserOutfits } from '../../store/selectors';

import xIcon from '../../../assets/xIcon.png';
import noImage from '../../../assets/no-preview.jpg';
import plusSign from '../../../assets/plussign.jpg';
import { Container1, Container2, Image, Category, Price, Anchor, Card, Add, AllOutfits, RelatedSection, InnerBox, Icon, Overlay } from '../styles/Card.js'

const RelatedItems = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);
  useEffect(() => dispatch(getOutfits), []);

  const relatedProducts = useSelector(selectRelatedProducts);
  const currentProduct = useSelector(selectProduct);
  const currentStyle = useSelector(selectCurrentStyle(undefined));
  const averageRating = useSelector(selectAverageRating);

  const userOutfit = useSelector(selectUserOutfits);

  const localStorageAdd = () => {
    const product = {
      _id: currentProduct.id,
      category: currentProduct.category,
      name: currentProduct.name,
      price: currentProduct.default_price,
      photo: currentStyle.photos[0].thumbnail_url,
      rating: averageRating
    }

    addOutfit(product);
  };

  const localStorageDelete = (id) => {
    deleteOutfit(id);
  };

  return (
    <RelatedSection>
      <InnerBox>
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
      <AllOutfits>
        <Container2>
          <Add onClick={() => localStorageAdd()}>
              <Image src={plusSign}></Image>
              <div style={{marginTop: "30px", fontWeight: 'Bold'}}>Add to Outfit</div>
          </Add>
        </Container2>
        <Container1>
          { userOutfit.length > 0 ?
            userOutfit.map(element => {
              return <Card key={element._id}>
                      {!element.photo ?
                        <Overlay><Image src={noImage}></Image><Icon onClick={() => localStorageDelete(element._id)} src={xIcon}></Icon></Overlay>
                       : <Overlay><Image src={element.photo}></Image><Icon onClick={() => localStorageDelete(element._id)} src={xIcon}></Icon></Overlay>}
                      <div>
                        <Category>{element.category}</Category>
                        <h5><b>{element.name}</b></h5>
                        <Price>${element.price}</Price>
                        <Stars averageRating={element.rating}/>
                      </div>
                    </Card>
            })
          : null}
        </Container1>
      </AllOutfits>
      </InnerBox>

    </RelatedSection>
  );
};

export default RelatedItems;