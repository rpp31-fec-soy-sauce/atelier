import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPercentByRating, selectReviewsMeta } from '../../store/selectors';
import { RatingsFilterBreakdownRow } from './styles/Container.style';
import ProgressBar from './ProgressBar.jsx';

const RatingsFiltering = () => {

  const starPercentage = useSelector(selectPercentByRating);
  const ReviewsMeta = useSelector(selectReviewsMeta);

  let starRendering = starPercentage ? Object.keys(starPercentage).map( key => {
      return (
        <RatingsFilterBreakdownRow key={key}>
            {key} Stars
            <ProgressBar starPercentage={starPercentage[key]}/>
            <div>{ReviewsMeta.ratings[key]}</div>
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