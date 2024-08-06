import { configureStore } from "@reduxjs/toolkit";
import appletSlice from "./features/applet/appletSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";
import notificationReducer from "./features/notification/notificatioSlice";
import profileSlice from "./features/profile/profileSlice";
import thingsSlice from "./features/things/thingsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      notificationReducer,
      profileSlice,
      appletSlice,
      dashboardSlice,
      thingsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
