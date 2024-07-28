import {
  IAirQualityData,
  IChartData,
  IDashboard,
  IWidgetTableData,
} from "@/types/general";
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
    addWidget: (
      state,
      action: PayloadAction<{
        dashboardId: number;
        widget: {
          name: string;
          image: string;
          chartData?: IChartData;
          tableData?: IWidgetTableData;
          airQualityData?: IAirQualityData;
        };
      }>
    ) => {
      let dashboard: IDashboard = state.dashboards.filter(
        (item) => item.id === action.payload.dashboardId
      )[0];
      const widgets = dashboard.widgets
        ? [...dashboard.widgets, action.payload.widget]
        : [action.payload.widget];
      state.dashboards = [
        ...state.dashboards.filter((item) => item.id !== dashboard.id),
        {
          id: dashboard.id,
          name: dashboard.name,
          description: dashboard.description,
          image: dashboard.image,
          pin: dashboard.pin,
          widgets: widgets,
        },
      ];
    },
  },
});

export const {
  addDashboard,
  removeDashboard,
  pinDashboard,
  unPinDashboard,
  editDashboard,
  addWidget,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
