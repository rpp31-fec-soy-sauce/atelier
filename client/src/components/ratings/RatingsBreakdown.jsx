import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAverageRating, selectPercentRecommendedProduct } from '../../store/selectors';
import { AverageRatingContainer, RatingsFilterBreakdownContainer } from './styles/Container.style';
import { AverageRatingNumber, AverageRatingStars } from './styles/Item.style';
import RatingsFiltering from './RatingsFiltering.jsx';
import StarRatingStatic from '../universal_components/StarRatingStatic.jsx'

const RatingsBreakdown = () => {

  const averageRating = useSelector(selectAverageRating);
  const percentRecommend = useSelector(selectPercentRecommendedProduct);

  return (
    <>
      <AverageRatingContainer>
        <AverageRatingNumber>{averageRating}</AverageRatingNumber>
        <AverageRatingStars>
            <StarRatingStatic averageRating={averageRating}/>
        </AverageRatingStars>
      </AverageRatingContainer>
      <div>{percentRecommend}% recommended this product</div>
      <RatingsFilterBreakdownContainer>
        <RatingsFiltering />
      </RatingsFilterBreakdownContainer>
    </>
  );
};

export default RatingsBreakdown;