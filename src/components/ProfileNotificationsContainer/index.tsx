"use client";

import { INotification } from "@/types/general";
import { useEffect, useState } from "react";
import Tabs from "../UI/Tabs";
import EmptyState from "./EmptyState";

export default function ProfileNotificationsContainer({
  notifications,
}: {
  notifications: INotification[];
}) {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [displayNotifications, setDisplayNotifications] =
    useState<INotification[]>(notifications);

  useEffect(() => {
    setDisplayNotifications(
      currentTabIndex === 0
        ? notifications
        : currentTabIndex === 1
        ? notifications.filter((notif) => notif.new)
        : notifications.filter((notif) => !notif.new)
    );
  }, [currentTabIndex, notifications]);
  return (
    <div className="flex flex-col h-full">
      <Tabs
        items={["all", "unread", "read"]}
        currentIndex={currentTabIndex}
        onTabChange={(i: number) => {
          setCurrentTabIndex(i);
        }}
      />
      {displayNotifications.length === 0 ? <EmptyState /> : <></>}
    </div>
  );
}
