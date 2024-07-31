import { IApplet, IConditionNodeInputs } from "@/types/general";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppletState {
  applets: IApplet[];
  pinnedApplets: IApplet[];
  conditionNodes?: IConditionNodeInputs[];
  editNode?: IConditionNodeInputs;
}

const initialState: AppletState = {
  applets: [],
  pinnedApplets: [],
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
    editApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = [
        ...state.applets.filter((app) => app.id !== action.payload.id),
        action.payload,
      ];
    },
    pinApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = [
        ...state.applets.filter((app) => app.id !== action.payload.id),
        { ...action.payload, pin: true },
      ];
      state.pinnedApplets = [
        ...state.pinnedApplets,
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
      state.pinnedApplets = state.pinnedApplets.filter(
        (app) => app.id !== action.payload.id
      );
    },
    addConditionNode: (state, action: PayloadAction<IConditionNodeInputs>) => {
      state.conditionNodes = state.conditionNodes?.length
        ? [...state.conditionNodes, action.payload]
        : [action.payload];
    },
    addEditNode: (state, action: PayloadAction<IConditionNodeInputs>) => {
      state.editNode = action.payload;
    },
    removeEditNode: (state) => {
      delete state.editNode;
    },
    editNode: (
      state,
      action: PayloadAction<{ newNode: IConditionNodeInputs; index: number }>
    ) => {
      if (state.conditionNodes)
        state.conditionNodes[action.payload.index] = action.payload.newNode;
    },
    deleteNode: (
      state,
      action: PayloadAction<{ index: number | undefined }>
    ) => {
      state.conditionNodes = state.conditionNodes?.filter(
        (_item, index) => index !== action.payload.index
      );
    },
  },
});
export const {
  addApplet,
  removeApplet,
  pinApplet,
  unPinApplet,
  editApplet,
  addConditionNode,
  addEditNode,
  removeEditNode,
  editNode,
  deleteNode,
} = appletSlice.actions;
export default appletSlice.reducer;
