import { IDashboard } from "@/types/general";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardState {
  dashboards: IDashboard[];
  pinedDashboards: IDashboard[];
}

const initialState: DashboardState = {
  dashboards: [],
  pinedDashboards: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addDashboard: (state, action: PayloadAction<IDashboard>) => {
      state.dashboards.push(action.payload);
    },
    removeDashboard: (state, action: PayloadAction<IDashboard>) => {
      state.dashboards = state.dashboards.filter(
        (dash) => dash.id !== action.payload.id
      );
    },
    pinDashboard: (state, action: PayloadAction<IDashboard>) => {
      state.dashboards = [
        ...state.dashboards.filter((dash) => dash.id !== action.payload.id),
        { ...action.payload, pin: true },
      ];
      state.pinedDashboards = [
        ...state.pinedDashboards,
        { ...action.payload, pin: true },
      ];
    },
    unPinDashboard: (state, action: PayloadAction<IDashboard>) => {
      state.dashboards = [
        ...state.dashboards.filter((dash) => dash.id !== action.payload.id),
        {
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          image: action.payload.image,
        },
      ];
      state.pinedDashboards = state.pinedDashboards.filter(
        (dash) => dash.id !== action.payload.id
      );
    },
  },
});

export const { addDashboard, removeDashboard, pinDashboard, unPinDashboard } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
