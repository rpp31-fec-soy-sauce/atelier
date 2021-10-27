import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRelatedProducts } from '../../store/apiActions';
import { selectRelatedProducts } from '../../store/selectors';

import image from './sample.jpg'; // This is a test image
import { Container, Image, Category, Price } from './styles/style'

const RelatedItems = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);

  const relatedProducts = useSelector(selectRelatedProducts);

  return (
    <div>
      <h3>Related Products</h3>
      <Container>
      {relatedProducts.map(product => {
        return <div key={product.id} style={{border: '1px solid black'}}>
                <Image src={image}></Image>
                <div>
                  <Category>{product.category}</Category>
                  <h5><b>{product.name}</b></h5>
                  <Price>${product.default_price}</Price>
                  <div>stars...</div>
                </div>
              </div>
      })}
      </Container>
    </div>
  );
};

export default RelatedItems;