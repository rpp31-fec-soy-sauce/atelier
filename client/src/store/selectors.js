export const selectProduct = state => state.product;
export const selectRelatedProducts = state => state.relatedProducts;
export const selectStyles = state => state.styles;
// export const selectQuestions = state => state.questions;
export const selectReviews = state => state.reviews;
export const selectReviewsMeta = state => state.reviewsMeta;

export const selectQuestions = searchText => ({ questions }) => {
  if (searchText.length < 3) return questions;
  questions.filter(q => q.question_body.toLowerCase.includes(searchText.toLowerCase()));
};