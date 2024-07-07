import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/notification/notificatioSlice";
import profileSlice from "./features/profile/profileSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { notificationReducer, profileSlice },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
