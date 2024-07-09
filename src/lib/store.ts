import { configureStore } from "@reduxjs/toolkit";
import appletSlice from "./features/applet/appletSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";
import notificationReducer from "./features/notification/notificatioSlice";
import profileSlice from "./features/profile/profileSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { notificationReducer, profileSlice, appletSlice, dashboardSlice },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
