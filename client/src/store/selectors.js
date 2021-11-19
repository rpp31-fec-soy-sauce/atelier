import { getDefaultStyle, aggregateRatings, totalReviewCount, calculatePercentRecommended , calculatePercentByRating } from "../utils/utils";

export const selectProduct = state => state.product;
export const selectRelatedProducts = state => state.relatedProducts;
export const selectStyles = state => state.styles;
export const selectReviews = state => state.reviews;
export const selectReviewsMeta = state => state.reviewsMeta;
export const selectStarFilters = state => state.starFilters;

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
  const reviewsAggregates = selectReviewsMeta(state);
  return calculatePercentRecommended(reviewsAggregates);
};

export const selectUserOutfits = state => state.userOutfits;

export const selectPercentByRating = state => {
  const reviewsAggregates = selectReviewsMeta(state);
  return calculatePercentByRating(reviewsAggregates);
}

export const selectTotalReviewCount = state => totalReviewCount(state.reviewsMeta.ratings);

export const selectFilteredReviews = state => {
  const reviews = selectReviews(state);
  const filters = selectStarFilters(state);

  if (filters.length > 0) {
    const filteredReviews = reviews.filter(review => filters.indexOf(review.rating) !== -1);
    return filteredReviews;
  } else {
    return reviews;
  }
};


