import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeData: {},
  isLoading: false,
};

export const recipeSlice = createSlice({
  name: "recipeSlice",
  initialState,
  reducers: {
    getRecipeData: {
      reducer: (state) => {},
      prepare: (userId, successCallback, failureCallback) => {
        return {
          payload: { userId, successCallback, failureCallback },
        };
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { getRecipeData } = recipeSlice.actions;

export default recipeSlice.reducer;
