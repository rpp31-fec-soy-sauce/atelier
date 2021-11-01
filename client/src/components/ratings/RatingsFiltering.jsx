import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPercentByRating } from '../../store/selectors';
import { RatingsFilterBreakdownRow } from './styles/Container.style';
import ProgressBar from './ProgressBar.jsx';

const RatingsFiltering = () => {

  const starPercentage = useSelector(selectPercentByRating);

  let starRendering = starPercentage ? Object.keys(starPercentage).map( key => {
      return (
        <RatingsFilterBreakdownRow>
            {key} Stars
            <ProgressBar starPercentage={starPercentage[key]}/>
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