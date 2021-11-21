import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {},
  styles: [],
  relatedProducts: [],
  reviews: [],
  reviewsMeta: {},
  questions: [],
  userOutfits: [],
  starFilters: [],
  currentStyle: undefined
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

    currentStyleChanged(state, action) {
      state.currentStyle = action.payload;
    },

    stylesLoaded(state, action) {
      state.styles = action.payload.results;
    },

    questionsLoaded(state, action) {
      state.questions = action.payload.sort(
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

    questionReported(state, action) {
      state.questions.forEach(question => {
        if (question.question_id === action.payload.id) {
          question.reported = true;
        }
      })
    },

    questionHelpfulUpdated(state, action) {
      state.questions.forEach(question => {
        if (question.question_id === action.payload.id) {
          question.question_helpfulness++;
        }
      })
    },

    answerReported(state, action) {
      state.questions.forEach(question => {
        Object.entries(question.answers)
          .forEach(answer => {
            if (answer[1].id === action.payload.id) {
              answer[1].reported = true;
            }
          })
      })
    },

    answerHelpfulUpdated(state, action) {
      state.questions.forEach(question => {
        Object.entries(question.answers)
          .forEach(answer => {
            if (answer[1].id === action.payload.id) {
              answer[1].helpfulness++;
            }
          })
      })
    },

    updateStarFilter(state, action) {
      state.starFilters = action.payload;
    }

  }
});

export default slice.reducer;
export const actions = slice.actions;