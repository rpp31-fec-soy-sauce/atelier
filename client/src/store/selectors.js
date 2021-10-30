import { getDefaultStyle, aggregateRatings, totalReviewCount } from "../utils/utils";

export const selectProduct = state => state.product;
export const selectRelatedProducts = state => state.relatedProducts;
export const selectStyles = state => state.styles;
export const selectReviews = state => state.reviews;
export const selectReviewsMeta = state => state.reviewsMeta;

export const selectQuestions = searchText => ({ questions }) => {
  if (searchText.length < 3) return questions;
  return questions.filter(q => q.question_body.toLowerCase().includes(searchText.toLowerCase()));
};

export const selectAverageRating = state => {
  const meta = selectReviewsMeta(state);
  return aggregateRatings(meta.ratings);
};

export const selectCurrentStyle = styleId => state => {
  const styles = selectStyles(state);
  if (!styleId) return getDefaultStyle(styles);
  return styles.find(style => style.style_id === styleId);
};

<<<<<<< HEAD
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
=======
export const selectTotalReviewCount = state => totalReviewCount(state.reviewsMeta.ratings);
>>>>>>> bcdbf011428b4568ec60483c2478f6e04ccc6a4c
