import { createSlice } from "@reduxjs/toolkit";

interface IRestaurantReducerProps {
  popularStatus: string[];
  cuisinesStatus: string[];
  deliverTimeStatus: string[];
}

const initialState: IRestaurantReducerProps = {
  popularStatus: [],
  cuisinesStatus: [],
  deliverTimeStatus: [],
};

const restaurantFilerReducer = createSlice({
  name: "restaurantFilter",
  initialState,
  reducers: {
    setPopularStatus: (state, action) => {
      state.popularStatus = action.payload;
    },
    setCuisinesStatus: (state, action) => {
      state.cuisinesStatus = action.payload;
    },
    setDeliverTimeStatus: (state, action) => {
      state.deliverTimeStatus = action.payload;
    },
  },
});

export const { setPopularStatus, setCuisinesStatus, setDeliverTimeStatus } = restaurantFilerReducer.actions;
export default restaurantFilerReducer.reducer;