import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRelatedProducts } from '../../store/apiActions';
import { selectRelatedProducts } from '../../store/selectors';

import noImage from './no-preview.jpg';
import { Container, Image, Category, Price, Anchor, Card } from './styles/style'

const RelatedItems = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(loadRelatedProducts), []);

  const relatedProducts = useSelector(selectRelatedProducts);

  console.log(relatedProducts)

  return (
    <div>
      <h3>Related Products</h3>
      <Container>
      {relatedProducts.map(product => {
        return <Anchor key={product.id} href={`/#${product.id}`}>
                <Card>
                  {!product.url ? <Image src={noImage}></Image> : <Image src={product.url}></Image>}
                  <div>
                    <Category>{product.category}</Category>
                    <h5><b>{product.name}</b></h5>
                    <Price>${product.default_price}</Price>
                    <div>{product.rating}</div>
                  </div>
                </Card>
               </Anchor>
      })}
      </Container>
    </div>
  );
};

export default RelatedItems;