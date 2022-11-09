import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const baskeSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("item not present");
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = baskeSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export default baskeSlice.reducer;
