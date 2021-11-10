import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noImage from '../../../assets/no-preview.jpg';
import { Container0, CarouselBox, Anchor, Card, Image, Category, Price, RightArrow, LeftArrow } from '../styles/Card.js';
import Stars from '../universal_components/StarRatingStaticSmall.jsx';
import { loadRelatedProducts, loadReviewsMeta, loadReviews, loadQuestions, loadStyles, loadProduct } from '../../store/apiActions';
import { selectRelatedProducts } from '../../store/selectors';

const Carousel = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);

  const relatedProducts = useSelector(selectRelatedProducts);

  const [current, setCurrent] = useState(0);
  const relatedLength = relatedProducts.length;

  const moveLeft = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const moveRight = () => {
    if (current < relatedLength) {
      setCurrent(current + 1);
    }
  }

  let start = current;
  let end = start + 4;


  const handleProductChange = (id) => {
    history.pushState(null, null, id);
    dispatch(loadProduct());
    dispatch(loadStyles());
    dispatch(loadQuestions());
    dispatch(loadReviews());
    dispatch(loadReviewsMeta());
    dispatch(loadRelatedProducts);


    setTimeout( () => {
      window.scroll(0, 0);
      setCurrent(0);
    }, 400)


  };

  if (relatedLength === 0) {
    return <div><b>NONE</b></div>
  } else {
    return (
      <Container0>
        {current > 0 ? <LeftArrow role='left-arrow' onClick={() => moveLeft()}/> : null}
        <CarouselBox >
          {relatedProducts.slice(start, end).map(product => {
            return <Anchor key={product.id} onClick={() => handleProductChange(product.id)}>
                    <Card role='card'>
                      {!product.url ? <Image role='images' src={noImage} style={{height: '170px'}}></Image> : <Image role='images' style={{height: '170px'}} src={product.url}></Image>}
                      <div>
                        <Category>{product.category}</Category>
                        <h5><b>{product.name}</b></h5>
                        <Price>${product.default_price}</Price>
                        <Stars averageRating={product.rating}/>
                      </div>
                    </Card>
                  </Anchor>
          })}
        </CarouselBox>
        {current === relatedLength - 4 ? null : <RightArrow role='right-arrow' onClick={() => moveRight()}/>}
      </Container0>
    );
  }
};

export default Carousel;