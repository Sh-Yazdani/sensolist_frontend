"use client";

import { RootState } from "@/lib/store";
import { INotificationAlert } from "@/types/general";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Notification() {
  const { alerts } = useSelector(
    (state: RootState) => state.notificationReducer
  );

  const [alert, setAlert] = useState<INotificationAlert>({
    type: "success",
    message: "",
  });
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [alerts]);

  const onClose = () => {
    setShow(false);
  };

  console.log("state", alerts);
  return show ? <div>{alert.message}</div> : null;
}
