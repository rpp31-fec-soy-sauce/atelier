import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPercentByRating, selectReviewsMeta } from '../../store/selectors';
import { RatingsFilterBreakdownRow } from './styles/Container.style';
import StarPercentageBar from './StarPercentageBar.jsx';

const RatingsFiltering = () => {

  const starPercentage = useSelector(selectPercentByRating);
  const ReviewsMeta = useSelector(selectReviewsMeta);

  let starRendering = starPercentage ? Object.keys(starPercentage).map( key => {
      return (
        <RatingsFilterBreakdownRow key={key}>
            {key} Stars
            <StarPercentageBar starPercentage={starPercentage[key]}/>
            <div>{ReviewsMeta.ratings[key] ? ReviewsMeta.ratings[key] : 0}</div>
        </RatingsFilterBreakdownRow>
      )
  }) : null;

  return (
    <>
      {starRendering}           
    </>
  );
};

export default RatingsFiltering;