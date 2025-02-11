import { createSlice } from "@reduxjs/toolkit";

interface IGridReducerProps {
  gridSize: number;
  gridStyle: string;
  toPage: number;
  totalPages: number;
  productCount: string;
}

const initialState: IGridReducerProps = {
  gridSize: 2,
  gridStyle: "",
  toPage: 1,
  totalPages: 1,
  productCount: "",
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setGridSize: (state, action) => {
      state.gridSize = action.payload;
    },
    setGridStyle: (state, action) => {
      state.gridStyle = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setProductCount: (state, action) => {
      state.productCount = action.payload;
    },
    setToPage: (state, action) => {
      state.toPage = action.payload;
    },
  },
});

export const { setGridSize, setGridStyle, setTotalPages, setProductCount, setToPage } = gridSlice.actions;
export default gridSlice.reducer;
