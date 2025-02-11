import { createSlice } from "@reduxjs/toolkit";

interface IHotelProps {
  districtStatus: string[];
  facilityStatus: string[];
  hostLangStatus: string[];
  rateStatus: string[];
  priceStatus: { min: number; max: number };
  filterTagStatus: string[];
}

const initialState: IHotelProps = {
  districtStatus: [],
  facilityStatus: [],
  hostLangStatus: [],
  rateStatus: [],
  priceStatus: { min: 10, max: 10000 },
  filterTagStatus: [],
};

const hotelFilterReducer = createSlice({
  name: "hotelFilter",
  initialState,
  reducers: {
    setDistrictStatus: (state, action) => {
      state.districtStatus = action.payload;
    },
    setFacilityStatus: (state, action) => {
      state.facilityStatus = action.payload;
    },
    setHostLangStatus: (state, action) => {
      state.hostLangStatus = action.payload;
    },
    setRateStatus: (state, action) => {
      state.rateStatus = action.payload;
    },
    setPriceStatus: (state, action) => {
      state.priceStatus = action.payload;
      console.log(action.payload,"d")
    },
    setFilterTagStatus: (state, action) => {
      state.filterTagStatus = action.payload;
    },
    hotelRemoveFilter: (state, action) => {
      const { key, value } = action.payload as { key: keyof IHotelProps; value: any };
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

export const { setDistrictStatus, setFacilityStatus, setHostLangStatus, setRateStatus, setPriceStatus, setFilterTagStatus, hotelRemoveFilter } = hotelFilterReducer.actions;

export default hotelFilterReducer.reducer;
