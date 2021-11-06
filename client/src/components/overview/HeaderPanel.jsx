import React from 'react';
import { useSelector } from 'react-redux';
import { selectAverageRating } from '../../store/selectors';
import Stars from '../universal_components/StarRatingStatic.jsx';

const HeaderPanel = ({ product, currentStyle }) => {
  const rating = useSelector(selectAverageRating);

  return (
    <div>
      <Stars averageRating={rating}/>
      <a href="">Read all reviews</a>
      <h3 style={{ fontWeight: 300, margin: 0, marginTop: '0.5rem' }}>
        {product.category?.toUpperCase()}
      </h3>
      <h1 role="heading" aria-level="1" style={{ fontWeight: 'bold', fontSize: '3rem', margin: 0 }}>
        {product.name}
      </h1>
      <PriceTag currentStyle={currentStyle} />
    </div>
  );
};

const PriceTag = ({ currentStyle }) => {
  if (!currentStyle) return null;
  if (currentStyle.sale_price === null)
    return <p>{'$' + currentStyle.original_price}</p>;
  return (
    <p>
      <b style={{ color: 'red' }}>{`$${currentStyle.sale_price}  `}</b>
      <span style={{ textDecoration: 'line-through' }}>
        {currentStyle.original_price}
      </span>
    </p>
  );
};

export default HeaderPanel;
