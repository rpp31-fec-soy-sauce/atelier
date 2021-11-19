import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredReviews } from '../../store/selectors';
import { ReviewTile, ReviewTileHeader, ReviewTileFooter, ReviewTilesListContainer, ReviewTileBodyResponse } from './styles/Container.style'
import { ReviewTileBodyItem, ReviewTileBodySummary } from './styles/Item.style'
import StarRatingStatic from '../universal_components/StarRatingStatic.jsx'
import check_box from '../../../assets/check_box.png'
import ReviewTileBody from './ReviewTileBody.jsx'
import ReviewTilePictures from './ReviewTilePictures.jsx'
import makeApiCall from '../../store/api';
import * as apiActions from '../../store/apiActions';

const ReviewTiles = (props) => {

  const dispatch = useDispatch();
  const { loadReviews, loadReviewsMeta } = bindActionCreators(apiActions, dispatch);
  const filteredReviews = useSelector(selectFilteredReviews);
  const displayCount = props.displayCount;
  const reviewsToDisplay = filteredReviews && filteredReviews.length > 0 ? filteredReviews.slice(0, displayCount) : []; 

  const handleHelpfulClick = (e) => {
    let localHelpful = e.target.attributes.localhelpful ? e.target.attributes.localhelpful.value : false;

    if (!localHelpful) {
      let reviewId = e.target.attributes.reviewid.value;
      let reviewHelpfulness = e.target.attributes.reviewhelpfulness.value;
      
      localStorage.setItem(`${reviewId}isHelpful`, JSON.stringify(true))
      
      
      makeApiCall('PUT', `/reviews/${reviewId}/helpful`, {helpfulness: reviewHelpfulness + 1})
      .then( (res) => {
        return res;
      })
      .then ( (resDone) => {
        loadReviewsMeta();
        loadReviews(1, 100);
      })
      .catch( (err) => {
        console.log('error', err);
      })
    }
  }

  const reviewTileConstructor = reviewsToDisplay.map(review => {
    let dateStr =new Date(review.date);
    let convertedDate = dateStr.toLocaleDateString();
    let localHelpful = localStorage.getItem(`${review.review_id}isHelpful`);
    
    return (
      <ReviewTile role={review.review_id} key={review.review_id}>
          <ReviewTileHeader>
            <ReviewTileBodyItem>
              <StarRatingStatic averageRating={review.rating}/>
            </ReviewTileBodyItem>
            <ReviewTileBodyItem>
              {review.reviewer_name}, {convertedDate}
            </ReviewTileBodyItem>
          </ReviewTileHeader>
          <ReviewTileBodySummary>{review.summary}</ReviewTileBodySummary>
          <ReviewTileBodyItem><ReviewTileBody reviewBodyText={review.body}/></ReviewTileBodyItem>
          {review.recommend ? <ReviewTileBodyItem>
            <img data-testid="checkbox" className="checkbox" src={check_box}></img> 
            I recommend this product
            </ReviewTileBodyItem> : null}
          <ReviewTileBodyItem>
            <ReviewTilePictures reviewPhotos={review.photos}/>
          </ReviewTileBodyItem>
          {review.response ? 
            <>
              <ReviewTileBodyResponse><strong>Reponse From Seller:</strong></ReviewTileBodyResponse>
              <ReviewTileBodyResponse> {review.response}</ReviewTileBodyResponse> 
            </> : null}
          <ReviewTileFooter>
            <ReviewTileBodyItem>Helpful? 
              <button 
                reviewid={review.review_id}
                reviewhelpfulness={review.helpfulness}
                localhelpful={localHelpful}                
                onClick={ (e) => { handleHelpfulClick(e) }}  
                style={{
                  border: 'none', 
                  backgroundColor: 'white', 
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}>
              Yes </button> &nbsp; ({review.helpfulness})
            </ReviewTileBodyItem>
          </ReviewTileFooter>
      </ReviewTile>
    )
  })

  return (<ReviewTilesListContainer>{reviewTileConstructor}</ReviewTilesListContainer>)
}


export default ReviewTiles