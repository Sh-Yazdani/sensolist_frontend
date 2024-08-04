import { IDashboard, ISubWidget } from "@/types/general";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardState {
  dashboards: IDashboard[];
  pinedDashboards: IDashboard[];
  widgetEdit?: { dashboardId: number; widget: ISubWidget; draft?: boolean };
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
    addDraftWidgets: (
      state,
      action: PayloadAction<{
        dashboardId: number;
        widget: ISubWidget;
      }>
    ) => {
      state.dashboards = state.dashboards.map((dash) =>
        dash.id === action.payload.dashboardId
          ? {
              ...dash,
              draftWidgets: dash.draftWidgets
                ? [...dash.draftWidgets, action.payload.widget]
                : [action.payload.widget],
            }
          : dash
      );
    },
    saveDraftWidgets: (
      state,
      action: PayloadAction<{
        dashboardId: number;
      }>
    ) => {
      state.dashboards = state.dashboards.map((dash) => {
        const saveWidgets = dash.widgets ? dash.widgets : [];
        const draftWidgets = dash.draftWidgets ? dash.draftWidgets : [];
        return dash.id === action.payload.dashboardId
          ? {
              ...dash,
              draftWidgets: [],
              widgets: [...saveWidgets, ...draftWidgets],
            }
          : dash;
      });
    },
    cancelDraftWidgets: (
      state,
      action: PayloadAction<{
        dashboardId: number;
      }>
    ) => {
      state.dashboards = state.dashboards.map((dash) => {
        return dash.id === action.payload.dashboardId
          ? {
              ...dash,
              draftWidgets: [],
            }
          : dash;
      });
    },
    addWidgetEdit: (
      state,
      action: PayloadAction<{
        dashboardId: number;
        widget: ISubWidget;
        draft: boolean;
      }>
    ) => {
      state.widgetEdit = action.payload;
    },
    removeWidgetEdit: (state) => {
      delete state.widgetEdit;
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
  addWidgetEdit,
  saveDraftWidgets,
  cancelDraftWidgets,
  addDraftWidgets,
  removeWidgetEdit,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
