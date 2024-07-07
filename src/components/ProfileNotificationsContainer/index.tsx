"use client";

import { useState } from "react";
import Tabs from "../UI/Tabs";

export default function ProfileNotificationsContainer() {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  return (
    <div className="flex flex-col h-full">
      <Tabs
        items={["all", "unread", "read"]}
        currentIndex={currentTabIndex}
        onTabChange={(i: number) => {
          setCurrentTabIndex(i);
        }}
      />
    </div>
  );
}
