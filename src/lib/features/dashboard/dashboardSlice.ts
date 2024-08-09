import { IOldDashboard, ISubWidget } from "@/types/general";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardState {
  dashboards: IOldDashboard[];
  pinedDashboards: IOldDashboard[];
  widgetEdit?: {
    index: number;
    dashboardId: string;
    widget: ISubWidget;
    draft: boolean;
  };
}

const initialState: DashboardState = {
  dashboards: [
    {
      id: "66b602db33c99f2150bcdb01",
      name: "Industrial indoor AQ",
      description: "Paens succedo curriculum ",
      image: "/assets/dashboard/img-1.png",
      pin: true,
    },
    {
      id: "66b602db33c99f2150bcdb00",
      name: "Indoor air quality",
      description: "Virtus illo volaticus vinculum ",
      image: "/assets/dashboard/img-2.png",
      pin: true,
    },
    {
      id: "66b602db33c99f2150bcdaff",
      name: "Outdoor air quality",
      description: "Clibanus autem quo. Laborum acer ",
      image: "/assets/dashboard/img-3.png",
      pin: true,
    },
  ],
  pinedDashboards: [
    {
      id: "66b602db33c99f2150bcdb01",
      name: "Industrial indoor AQ",
      description: "Paens succedo curriculum ",
      image: "/assets/dashboard/img-1.png",
      pin: true,
    },
    {
      id: "66b602db33c99f2150bcdb00",
      name: "Indoor air quality",
      description: "Virtus illo volaticus vinculum ",
      image: "/assets/dashboard/img-2.png",
      pin: true,
    },
    {
      id: "66b602db33c99f2150bcdaff",
      name: "Outdoor air quality",
      description: "Clibanus autem quo. Laborum acer ",
      image: "/assets/dashboard/img-3.png",
      pin: true,
    },
  ],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addDashboard: (state, action: PayloadAction<IOldDashboard>) => {
      state.dashboards.push(action.payload);
    },
    removeDashboard: (state, action: PayloadAction<IOldDashboard>) => {
      state.dashboards = state.dashboards.filter(
        (dash) => dash.id !== action.payload.id
      );
    },
    editDashboard: (state, action: PayloadAction<IOldDashboard>) => {
      state.dashboards = [
        ...state.dashboards.filter((dash) => dash.id !== action.payload.id),
        action.payload,
      ];
    },
    pinDashboard: (state, action: PayloadAction<IOldDashboard>) => {
      state.dashboards = [
        ...state.dashboards.filter((dash) => dash.id !== action.payload.id),
        { ...action.payload, pin: true },
      ];
      state.pinedDashboards = [
        ...state.pinedDashboards,
        { ...action.payload, pin: true },
      ];
    },
    unPinDashboard: (state, action: PayloadAction<IOldDashboard>) => {
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
        dashboardId: string;
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
        dashboardId: string;
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
        dashboardId: string;
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
        dashboardId: string;
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
        dashboardId: string;
        widget: ISubWidget;
        draft: boolean;
        index: number;
      }>
    ) => {
      state.widgetEdit = action.payload;
    },
    removeWidgetEdit: (state) => {
      delete state.widgetEdit;
    },
    editWidget: (
      state,
      action: PayloadAction<{
        dashboardId: string;
        widget: ISubWidget;
        draft: boolean;
        index: number;
      }>
    ) => {
      // state.dashboards = [];
      if (action.payload.draft) {
        state.dashboards = state.dashboards.map((dash) =>
          dash.id === action.payload.dashboardId
            ? {
                ...dash,
                draftWidgets: dash.draftWidgets?.map((wdg, i) =>
                  i === action.payload.index ? action.payload.widget : wdg
                ),
              }
            : dash
        );
      } else {
        state.dashboards = state.dashboards.map((dash) =>
          dash.id === action.payload.dashboardId
            ? {
                ...dash,
                widgets: dash.widgets?.map((wdg, i) =>
                  i === action.payload.index ? action.payload.widget : wdg
                ),
              }
            : dash
        );
      }
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
  editWidget,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
