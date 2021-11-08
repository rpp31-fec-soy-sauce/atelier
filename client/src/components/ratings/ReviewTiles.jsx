import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectReviews } from '../../store/selectors';
import { ReviewTile, ReviewTileHeader, ReviewTileFooter, ReviewTilesListContainer, ReviewTileBodyResponse } from './styles/Container.style'
import { ReviewTileBodyItem, ReviewTileBodySummary } from './styles/Item.style'
import StarRatingStatic from '../universal_components/StarRatingStatic.jsx'
import check_box from '../../../assets/check_box.png'
import ReviewTileBody from './ReviewTileBody.jsx'
import ReviewTilePictures from './ReviewTilePictures.jsx'

const ReviewTiles = (props) => {

  const reviews = useSelector(selectReviews);
  const displayCount = props.displayCount;

  const reviewsToDisplay = reviews && reviews.length > 0 ? reviews.slice(0, displayCount) : []; 

  const reviewTileConstructor = reviewsToDisplay.map(review => {
    let dateStr =new Date(review.date);
    let convertedDate = dateStr.toLocaleDateString();
    
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
          {review.response ? <ReviewTileBodyResponse>{review.response}</ReviewTileBodyResponse> : null}
          <ReviewTileFooter>
            <ReviewTileBodyItem>Helpful? YES (make clickable) ({review.helpfulness}) | </ReviewTileBodyItem>
            <ReviewTileBodyItem>Report (make clickable)</ReviewTileBodyItem>
          </ReviewTileFooter>
      </ReviewTile>
    )
  })

  return (<ReviewTilesListContainer>{reviewTileConstructor}</ReviewTilesListContainer>)
}


export default ReviewTiles