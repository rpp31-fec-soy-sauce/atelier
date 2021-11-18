import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { selectPercentByRating, selectReviewsMeta } from '../../store/selectors';
import { RatingsFilterBreakdownRow } from './styles/Container.style';
import StarPercentageBar from './StarPercentageBar.jsx';
import { updateStarFilters } from '../../store/funcActions';

const RatingsFiltering = () => {

  const starPercentage = useSelector(selectPercentByRating);
  const ReviewsMeta = useSelector(selectReviewsMeta);

  const [filtersApplied, setFiltersApplied] = useState([]);

  const handleFilterClick = async (e) => {
    let filters = filtersApplied.slice(0);
    let filterValue = e.target.attributes.filtervalue.value;

    if (filters.indexOf(filterValue) === -1) {
      filters.push(filterValue);
      filters = filters.sort();

      setFiltersApplied(filters)
      updateStarFilters(filters);
      
    } else {
      filters = filters.filter(filter => filter !== filterValue);
      setFiltersApplied(filters);
      updateStarFilters(filters);
    }
  }

  let starRendering = starPercentage ? Object.keys(starPercentage).map( key => {
      return (
        <RatingsFilterBreakdownRow key={key}>
            <button
              filtervalue={key}
              onClick={ (e) => { handleFilterClick(e) }}  
              style={{
                border: 'none', 
                backgroundColor: 'white', 
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              {key} Stars
            </button>
            <StarPercentageBar starPercentage={starPercentage[key]}/>
            <div>{ReviewsMeta.ratings[key] ? ReviewsMeta.ratings[key] : 0}</div>
        </RatingsFilterBreakdownRow>
      )
  }) : null;

  return (
    <>
      {starRendering}           
      {filtersApplied.length > 0 ? <div>Filters Applied: &nbsp; {filtersApplied.join(', ')}</div> : null}
    </>
  );
};

export default RatingsFiltering;