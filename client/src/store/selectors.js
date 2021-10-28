export const selectProduct = state => state.product;
export const selectRelatedProducts = state => state.relatedProducts;
export const selectStyles = state => state.styles;
export const selectQuestions = state => state.questions;
export const selectReviews = state => state.reviews;
export const selectReviewsMeta = state => state.reviewsMeta;
export const selectTotalReviewCount = state => totalReviewCount(state.reviewsMeta.ratings);


const totalReviewCount = (reviewRatingsObject = 0) => { 
    let totalReviewCount = 0;
    if (reviewRatingsObject !== 0) {
      Object.values(reviewRatingsObject).forEach((value) => {
        totalReviewCount += parseInt(value);
      });
    }

    return totalReviewCount;
};

