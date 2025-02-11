import { createSlice } from "@reduxjs/toolkit";

interface ITourReducerProps {
  flightStatus: string[];
  travelStatus: string[];
  tripDurationStatus: string[];
  filterTourTags: string[];
}

const initialState: ITourReducerProps = {
  flightStatus: [],
  travelStatus: [],
  tripDurationStatus: [],
  filterTourTags: [],
};

const tourFilterReducer = createSlice({
  name: "tourFilter",
  initialState,
  reducers: {
    setFlightStatus: (state, action) => {
      state.flightStatus = action.payload;
    },
    setTravelStatus: (state, action) => {
      state.travelStatus = action.payload;
    },
    setTripDurationStatus: (state, action) => {
      state.tripDurationStatus = action.payload;
    },
    setFilterTourTags: (state, action) => {
      state.filterTourTags = action.payload;
    },
     tourRemoveFilter: (state, action) => {
          const { key, value } = action.payload as { key: keyof ITourReducerProps; value: any };
          if (Array.isArray(state[key])) {
            (state[key] as string[]) = (state[key] as string[]).filter((item) => item !== value);
          } 
          else {
            (state[key] as string | number) = typeof state[key] === "number" ? 0 : "";
          }
        },
  },
});

export const { setFlightStatus, setTravelStatus, setTripDurationStatus, setFilterTourTags, tourRemoveFilter } = tourFilterReducer.actions;
export default tourFilterReducer.reducer;
