import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  sidebarIsOpen: boolean;
}

const initialState: InitialState = {
  sidebarIsOpen: false,
};

export const drawersSlice = createSlice({
  name: "drawersSlice",
  initialState,
  reducers: {
    setSidebarIsOpen: (state, { payload }) => {
      state.sidebarIsOpen = payload;
    },
  },
});

export const { setSidebarIsOpen } = drawersSlice.actions;

export default drawersSlice.reducer;
