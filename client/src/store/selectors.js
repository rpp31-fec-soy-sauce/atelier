import { getDefaultStyle, aggregateRatings, totalReviewCount, calculatePercentRecommended , calculatePercentByRating} from "../utils/utils";

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


export const selectPercentRecommendedProduct = state => {
  const reviewsAggregate = selectReviewsMeta(state);
  return calculatePercentRecommended(reviewsAggregate);
}

export const selectPercentByRating = state => {
  const reviewsAggregate = selectReviewsMeta(state);
  return calculatePercentByRating(reviewsAggregate);
}

export const selectTotalReviewCount = state => totalReviewCount(state.reviewsMeta.ratings);
