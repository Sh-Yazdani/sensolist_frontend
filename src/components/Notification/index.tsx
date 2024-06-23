"use client";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Notification() {
  const { alerts } = useSelector(
    (state: RootState) => state.notificationReducer
  );
  console.log("state", alerts);
  return <></>;
}
