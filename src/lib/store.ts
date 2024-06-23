import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/notification/notificatioSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { notificationReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
