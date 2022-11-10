import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: {
    id: null,
    title: null,
    imgUrl: null,
    rating: null,
    addres: null,
    short_desc: null,
    gener: null,
    dishes: null,
    long: null,
    lat: null,
  },
};

export const resturantSlice = createSlice({
  name: "resturant",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResturant } = resturantSlice.actions;

export const selectResturant = (state) => state.resturant.items;

export default resturantSlice.reducer;
