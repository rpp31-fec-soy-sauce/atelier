import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {},
  styles: [],
  relatedProducts: [],
  reviews: [],
  reviewsMeta: {},
  questions: [],
  userOutfits: [],
  reportedQuestions: []
};

const slice = createSlice({
  name: 'atelier',

  initialState,

  reducers: {
    productLoaded(state, action) {
      state.product = action.payload;
    },

    relatedProductsLoaded(state, action) {
      state.relatedProducts = action.payload;
    },

    stylesLoaded(state, action) {
      state.styles = action.payload.results;
    },

    questionsLoaded(state, action) {
      state.questions = action.payload.results.sort(
        (q1, q2) => q2.question_helpfulness - q1.question_helpfulness
      );
    },

    reviewsLoaded(state, action) {
      state.reviews = action.payload.results;
    },

    reviewsMetaLoaded(state, action) {
      state.reviewsMeta = action.payload;
    },

    relatedProductsLoaded(state, action) {
      state.relatedProducts = action.payload;
    },

    userOutfitsUpdated(state, action) {
      state.userOutfits = action.payload;
    },

    // reportQuestionUpdated(state, action) {

    // }
  }
});

export default slice.reducer;
export const actions = slice.actions;