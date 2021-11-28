import React, { useState } from 'react';
import { ShowMore } from './styles/Item.style'

const ReviewTileBody = (props) => {
    let reviewBodyText = props.reviewBodyText ? props.reviewBodyText : '';

    let reviewBodyFirst250 = reviewBodyText.slice(0, 250).concat('...')

    const buttonVisibility = () => {
      if (reviewBodyText.length > 250) {
        return 'visible'
      } else return 'hidden'
    }

    const [ReviewBodyCurrentText, setReviewBodyCurrentText] = useState(reviewBodyFirst250);
    const [showMoreButtonStatus, setShowMoreButtonStatus] = useState(buttonVisibility());

    return (
      <>
        {ReviewBodyCurrentText === reviewBodyText.concat('...') ? 
          setReviewBodyCurrentText(reviewBodyText) : ReviewBodyCurrentText}
        <ShowMore
          style={{visibility: showMoreButtonStatus}} 
          alt="showMoreButton"
          role="showMore"
          data-element={'showMoreButton'}
          data-module={'review'} 
          onClick={(e) => {
            setReviewBodyCurrentText(reviewBodyText);
            setShowMoreButtonStatus('hidden');
          }}>Show More &#x25BE;
        </ShowMore>
      </>
    )
};

export default ReviewTileBody;