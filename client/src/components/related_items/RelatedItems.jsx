import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRelatedProducts } from '../../store/apiActions';
import { selectRelatedProducts } from '../../store/selectors';

import noImage from './no-preview.jpg';
import { Container, Image, Category, Price } from './styles/style'

const RelatedItems = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);

  const relatedProducts = useSelector(selectRelatedProducts);

  return (
    <div>
<<<<<<< HEAD
      <h1>Related Items</h1>
      {/* <p>{JSON.stringify(relatedProducts)}</p> */}
=======
      <h3>Related Products</h3>
      <Container>
      {relatedProducts.map(product => {
        return <div key={product.id} style={{border: '1px solid black'}}>
                {!product.url ? <Image src={noImage}></Image> : <Image src={product.url}></Image>}
                <div>
                  <Category>{product.category}</Category>
                  <h5><b>{product.name}</b></h5>
                  <Price>${product.default_price}</Price>
                  <div>{product.rating}</div>
                </div>
              </div>
      })}
      </Container>
>>>>>>> 045a5c6e869935c65d41880badf13cffcc8162ee
    </div>
  );
};

export default RelatedItems;