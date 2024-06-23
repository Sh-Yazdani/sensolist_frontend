"use client";

import { RootState } from "@/lib/store";
import { INotificationAlert } from "@/types/general";
import { TickCircle } from "iconsax-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Notification() {
  const { alerts } = useSelector(
    (state: RootState) => state.notificationReducer
  );

  console.log("alert", alerts);

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
  return (
    <div
      className={`fixed transition-all left-8 top-8
      rounded-lg flex shadow pl-[42px] 
      ${show ? "ml-0" : " ml-[-480px] "}
    w-[440px] min-h-[90px] bg-green-success`}
    >
      <div className="flex flex-row items-center">
        <TickCircle color="#343434" />
        <div className="flex flex-col text-natural-8 ml-2">
          <div className=" text-2xl">succes</div>
          <div>{alert.message}</div>
        </div>
      </div>
    </div>
  );
}
