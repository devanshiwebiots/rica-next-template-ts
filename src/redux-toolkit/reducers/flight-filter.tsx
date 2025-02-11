import { createSlice } from "@reduxjs/toolkit";

interface IFlightReducerProps {
  stopStatus: string[];
  departureStatus: string[];
  arriveStatus: string[];
  airlineStatus: string[];
  flightFilterTagStatus: string[];
}

const initialState: IFlightReducerProps = {
  stopStatus: [],
  departureStatus: [],
  arriveStatus: [],
  airlineStatus: [],
  flightFilterTagStatus: [],
};

const flightFilterReducer = createSlice({
  name: "flightFilter",
  initialState,
  reducers: {
    setStopStatus: (state, action) => {
      state.stopStatus = action.payload;
    },
    setDepartureStatus: (state, action) => {
      state.departureStatus = action.payload;
    },
    setArriveStatus: (state, action) => {
      state.arriveStatus = action.payload;
    },
    setAirlineStatus: (state, action) => {
      state.airlineStatus = action.payload;
    },
    setFlightFilterTagStatus: (state, action) => {
      state.flightFilterTagStatus = action.payload;
    },
    flightRemoveFilter: (state, action) => {
          const { key, value } = action.payload as { key: keyof IFlightReducerProps; value: any };
          if (Array.isArray(state[key])) {
            (state[key] as string[]) = (state[key] as string[]).filter((item) => item !== value);
          }  else {
            (state[key] as string | number) = typeof state[key] === "number" ? 0 : "";
          }
        },
  },
});

export const { setStopStatus, setDepartureStatus, setArriveStatus, setAirlineStatus, setFlightFilterTagStatus, flightRemoveFilter } = flightFilterReducer.actions;

export default flightFilterReducer.reducer;