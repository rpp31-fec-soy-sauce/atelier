import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  styles: [],
  relatedProducts: [],
  reviews: [],
  reviewsMeta:{},
  questions: []
};

const slice = createSlice({
  name: 'atelier',

  initialState,

  reducers: {
    productLoaded(state, action) {
      state.product = action.payload;
    },

    stylesLoaded(state, action) {
      state.styles = action.payload.results;
    },

    questionsLoaded(state, action) {
      state.questions = action.payload.results;
    },

    reviewsLoaded(state, action) {
      state.reviews = action.payload.results;
    },

    reviewsMetaLoaded(state, action) {
      state.reviewsMeta = action.payload;
    },

    relatedProductsLoaded(state, action) {
      state.relatedProducts = action.payload;
    }
  }
});

export default slice.reducer;
export const actions = slice.actions;