import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noImage from '../../../assets/no-preview.jpg';
import { Container1, CarouselBox, Anchor, Card, Image, Category, Price, RightArrow, LeftArrow } from '../styles/Card.js';
import Stars from '../universal_components/StarRatingStaticSmall.jsx';
import { loadRelatedProducts } from '../../store/apiActions';
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

  return (
    <Container1>
        {current > 0 ? <LeftArrow onClick={() => moveLeft()}/> : null}
        {current === relatedLength - 4 ? null : <RightArrow onClick={() => moveRight()}/>}
        <CarouselBox>
          {relatedProducts.slice(start, end).map(product => {
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
        </CarouselBox>
      </Container1>
  );
};

export default Carousel;