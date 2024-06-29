"use client";

import { Notification } from "iconsax-react";
import { useState } from "react";
import NotificationItem from "./NotificationItem";

export default function Notifications() {
  const [newNotification, setNewNotification] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fakeNotifications: {
    content: string;
    date: string;
    new: boolean;
  }[] = [
    {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: "Wed Jun 26 2024 19:56:01 GMT+0300 (GMT+03:00)",
      new: true,
    },
    {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: "Wed Jun 26 2024 19:56:01 GMT+0300 (GMT+03:00)",
      new: false,
    },
    {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: "Wed Jun 26 2024 19:56:01 GMT+0300 (GMT+03:00)",
      new: false,
    },
  ];
  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="relative flex w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] mx-4 rounded-full
     dark:bg-white-opacity-100 shadow bg-primary-tint-3 md:bg-neutral-3"
      >
        <Notification className="m-auto lg:size-8 size-6 dark:text-white md:text-primary-tint-3" />
        {newNotification && (
          <div
            className="absolute w-[8px] h-[8px] lg:w-2.5 lg:h-2.5 top-0 right-1
      bg-secondary-main rounded-full"
          ></div>
        )}
      </button>
      {isOpen && (
        <div
          className=" overflow-hidden absolute z-10 lg:w-[400px] lg:h-[554px] w-[80vw] max-w-[400px] h-[460px] mx-4
      border border-primary-tint-3 rounded-2xl rounded-tr-none
       right-0 top-11 lg:top-16 px-2 py-4 lg:px-4
       bg-white dark:bg-primary-Shade-1"
        >
          <div
            className=" w-full border-b text-black border-neutral-6 text-xl text-start pb-2
          lg:text-2xl dark:text-neutral-2 dark:border-neutral-3"
          >
            Notification center
          </div>
          {fakeNotifications.map((notification) => (
            <NotificationItem
              key={notification.content}
              content={notification.content}
              new={notification.new}
              date={notification.date}
            />
          ))}

          <div
            className="absolute h-14 w-full bg-white dark:bg-primary-Shade-1 left-0 bottom-0
          flex items-center gap-2 px-4"
          >
            <button className="w-1/2 bg-secondary-main rounded-lg text-white py-1.5 border-2 border-secondary-main">
              view all
            </button>
            <button className="w-1/2 rounded-lg border-2 border-secondary-main text-secondary-main py-1.5 whitespace-nowrap">
              mark all as read
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
