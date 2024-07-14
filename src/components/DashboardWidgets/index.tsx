"use client";

import { Add } from "iconsax-react";
import { useState } from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardWidgetSelect from "../DashboardWidgetSelect";
import Button from "../UI/Button";

const widgets = [];

interface DashboardWidgetsProps {
  dashboardId: number;
}

export default function DashboardWidgets({
  dashboardId,
}: DashboardWidgetsProps) {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col h-full flex-1 relative md:pl-5 overflow-hidden">
      <DashboardWidgetSelect
        onClose={() => {
          setIsSelectOpen(false);
        }}
        isOpen={isSelectOpen}
      />
      <DashboardHeader
        isSelectOpen={isSelectOpen}
        onWidgetAdd={() => {
          setIsSelectOpen(true);
        }}
        dashboardId={dashboardId}
      />
      <div className=" m-auto w-fit">
        {widgets.length ? (
          <></>
        ) : (
          <Button
            onClick={() => {
              setIsSelectOpen(true);
            }}
            className="px-4"
          >
            <Add className="mr-2" /> Add widget
          </Button>
        )}
      </div>
    </div>
  );
}
