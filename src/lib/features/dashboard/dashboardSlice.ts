import { IDashboard, ISubWidget } from "@/types/general";
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
    editDashboard: (state, action: PayloadAction<IDashboard>) => {
      state.dashboards = [
        ...state.dashboards.filter((dash) => dash.id !== action.payload.id),
        action.payload,
      ];
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
    addWidgets: (
      state,
      action: PayloadAction<{
        dashboardId: number;
        widgets: ISubWidget[];
      }>
    ) => {
      state.dashboards = state.dashboards.map((dash) =>
        dash.id === action.payload.dashboardId
          ? {
              ...dash,
              widgets: dash.widgets
                ? [...dash.widgets, ...action.payload.widgets]
                : [...action.payload.widgets],
            }
          : dash
      );
    },
  },
});

export const {
  addDashboard,
  removeDashboard,
  pinDashboard,
  unPinDashboard,
  editDashboard,
  addWidgets,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
