import { createSlice } from "@reduxjs/toolkit";

interface ICabReducerProps {
  [key: string]: any;
  cabTypeStatus: string[];
  capacityStatus: string[];
  cabOptionStatus: string[];
}

const initialState: ICabReducerProps = {
  cabTypeStatus: [],
  capacityStatus: [],
  cabOptionStatus: [],
};

const cabFilterReducer = createSlice({
  name: "cabFilter",
  initialState,
  reducers: {
    setCabTypeStatus: (state, action) => {
      state.cabTypeStatus = action.payload;
    },
    setCapacityStatus: (state, action) => {
      state.capacityStatus = action.payload;
    },
    setCabOptionStatus: (state, action) => {
      state.cabOptionStatus = action.payload;
    },
    cabRemoveFilter: (state, action) => {
     const { key, value } = action.payload as { key: keyof ICabReducerProps; value: any };
     if (Array.isArray(state[key])) {
       (state[key] as string[]) = (state[key] as string[]).filter((item) => item !== value);
     } else if (typeof state[key] === "object" && state[key] !== null) {
       state.priceStatus = { min: 10, max: 10000 };
     } else {
       (state[key] as string | number) = typeof state[key] === "number" ? 0 : "";
     }
    },
  },
});

export const { setCabTypeStatus, setCapacityStatus, setCabOptionStatus, cabRemoveFilter } = cabFilterReducer.actions;
export default cabFilterReducer.reducer;
