"use client";

import { Notification } from "iconsax-react";
import { useState } from "react";

export default function Notifications() {
  const [newNotification, setNewNotification] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <button
      className="relative flex w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] mx-4 rounded-full
     dark:bg-white-opacity-100 shadow bg-neutral-3"
    >
      <Notification className="m-auto lg:size-8 size-6 dark:text-white text-primary-tint-3" />
      {newNotification && (
        <div
          className="absolute w-[8px] h-[8px] lg:w-2.5 lg:h-2.5 top-0 right-1
      bg-secondary-main rounded-full"
        ></div>
      )}
      {isOpen && (
        <div
          className="absolute z-10 lg:w-[400px] lg:h-[554px] w-[100vw] max-w-[400px] h-[460px] mx-4
      border border-primary-tint-3 rounded-2xl rounded-tr-none
       right-0 top-11 lg:top-16 px-2 py-4 lg:px-4
       bg-white dark:bg-primary-Shade-1"
        >
          <div
            className="w-full border-b text-black border-neutral-6 text-xl text-start pb-2
          lg:text-2xl dark:text-neutral-2 dark:border-neutral-3"
          >
            Notification center
          </div>
        </div>
      )}
    </button>
  );
}
