import { PayloadAction } from "@reduxjs/toolkit";
import { GlobalStateInterface } from "../../interfaces/store";

export const movieReducer = {
  setModalStatus: (
    state: GlobalStateInterface,
    action: PayloadAction<boolean>
  ) => {
    state.modal = action.payload;
  },
  setModalId: (state: GlobalStateInterface, action: PayloadAction<string>) => {
    state.modalId = action.payload;
  },
  clearPicksError: (state: GlobalStateInterface) => {
    state.moviePicksError = "";
  },
};
