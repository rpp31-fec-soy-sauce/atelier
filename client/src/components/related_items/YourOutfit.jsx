import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plusSign from '../../../assets/plussign.jpg';
import xIcon from '../../../assets/xIcon.png';
import noImage from '../../../assets/no-preview.jpg';
import Stars from '../universal_components/StarRatingStaticSmall.jsx';
import { getOutfits, addOutfit, deleteOutfit } from '../../store/funcActions.js';
import { selectProduct, selectCurrentStyle, selectedStyle, selectAverageRating, selectUserOutfits } from '../../store/selectors';
import { Container1, Container2, Image, Category, Price, Card, Add, AllOutfits, Icon, Parent } from '../styles/Card.js';
import PriceTag from './PriceTag.jsx';

const YourOutfit = () => {

  const dispatch = useDispatch();
  const styleId = useSelector((state) => state.currentStyle);
  useEffect(() => dispatch(getOutfits), []);

  const currentProduct = useSelector(selectProduct);
  const currentStyle = useSelector(selectCurrentStyle(styleId));
  const averageRating = useSelector(selectAverageRating);

  const userOutfit = useSelector(selectUserOutfits);

  // console.log(currentStyle)

  const localStorageAdd = () => {
    const product = {
      _id: currentProduct.id,
      category: currentProduct.category,
      name: currentProduct.name,
      price: currentStyle.sale_price ? [currentStyle.sale_price, currentStyle.original_price] : [currentStyle.original_price],
      photo: currentStyle.photos[0].thumbnail_url,
      rating: averageRating
    }

    addOutfit(product);
  };

  const localStorageDelete = (id) => {
    deleteOutfit(id);
  };

  return (
    <AllOutfits>
      <Container2>
        <Add data-element={'AddOutfitButton'} data-module={'related-items'} onClick={() => localStorageAdd()}>
            <Image src={plusSign}></Image>
            <div style={{marginTop: "30px", fontWeight: 'Bold'}}>Add to Outfit</div>
        </Add>
      </Container2>
      <Container1>
        { userOutfit.length > 0 ?
          userOutfit.map(element => {
            return <Card key={element._id}>
                    {!element.photo ?
                      <Parent><Image src={noImage} alt={element.name}></Image><Icon data-element={'RemoveOutfit'} data-module={'related-items'} onClick={() => localStorageDelete(element._id)} src={xIcon}></Icon></Parent>
                      : <Parent><Image alt={element.name} src={element.photo}></Image><Icon data-element={'RemoveOutfit'} data-module={'related-items'} onClick={() => localStorageDelete(element._id)} src={xIcon}></Icon></Parent>}
                    <div>
                      <Category>{element.category}</Category>
                      <h5><b>{element.name}</b></h5>
                      <PriceTag role='price-tag' price={element.price}></PriceTag>
                      <Stars averageRating={element.rating}/>
                    </div>
                  </Card>
          })
        : null}
      </Container1>
    </AllOutfits>
  );

};

export default YourOutfit;

