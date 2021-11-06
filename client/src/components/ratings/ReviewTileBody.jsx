import React, { useState } from 'react';
import { ShowMore } from './styles/Item.style'

const ReviewTileBody = (props) => {
    let reviewBodyText = props.reviewBodyText ? props.reviewBodyText : '';

    let reviewBodyFirst250 = reviewBodyText.slice(0, 250).concat('...')

    const [ReviewBodyCurrentText, setReviewBodyCurrentText] = useState(reviewBodyFirst250);

    return (
      <>
        {ReviewBodyCurrentText}
        {ReviewBodyCurrentText !== reviewBodyText ? 
            <ShowMore onClick={(e) => {setReviewBodyCurrentText(reviewBodyText)}}>Show More &#x25BE;</ShowMore>
        : null}
      </>
    )
};

export default ReviewTileBody;