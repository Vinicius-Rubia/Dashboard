import { MenuState } from "@/interfaces/redux/MenuState";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MenuState = {
  isOpen: true,
};

export const slice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setShowMenu(state) {
      return { ...state, isOpen: !state.isOpen };
    },
  },
});

export const { setShowMenu } = slice.actions;

export const selectMenu = (state: any): MenuState => state.menuModel;

export default slice.reducer;
