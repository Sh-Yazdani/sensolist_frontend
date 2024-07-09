import { IApplet } from "@/types/general";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppletState {
  applets: IApplet[];
}

const initialState: AppletState = {
  applets: [],
};

export const appletSlice = createSlice({
  name: "applet",
  initialState,
  reducers: {
    addApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets.push(action.payload);
    },
    removeApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = state.applets.filter(
        (dash) => dash.id !== action.payload.id
      );
    },
    pinApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = [
        ...state.applets.filter((app) => app.id !== action.payload.id),
        { ...action.payload, pin: true },
      ];
    },
    unPinApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = [
        ...state.applets.filter((app) => app.id !== action.payload.id),
        {
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          image: action.payload.image,
        },
      ];
    },
  },
});
export const { addApplet, removeApplet, pinApplet, unPinApplet } =
  appletSlice.actions;
export default appletSlice.reducer;
