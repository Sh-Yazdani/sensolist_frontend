"use client";

import { Notification } from "iconsax-react";
import { useState } from "react";

export default function Notifications() {
  const [newNotification, setNewNotification] = useState<boolean>(true);
  return (
    <button
      className="relative flex w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] mx-4 rounded-full
     bg-white-opacity-100 shadow"
    >
      <Notification className="m-auto lg:size-8 size-6" />
      {newNotification && (
        <div
          className="absolute w-[8px] h-[8px] lg:w-2.5 lg:h-2.5 top-0 right-1
      bg-secondary-main rounded-full
        "
        ></div>
      )}
    </button>
  );
}
