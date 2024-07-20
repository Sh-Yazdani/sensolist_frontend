"use client";

import { RootState } from "@/lib/store";
import { Add } from "iconsax-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import DashboardHeader from "../DashboardHeader";
import DashboardWidgetSelect from "../DashboardWidgetSelect";
import Button from "../UI/Button";

interface DashboardWidgetsProps {
  dashboardId: number;
}

export default function DashboardWidgets({
  dashboardId,
}: DashboardWidgetsProps) {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(true);
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  const selectedDashboard = [
    ...dashboards.filter((dash) => dash.id === dashboardId),
  ][0];

  if (!selectedDashboard) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col h-full flex-1 relative md:pl-5 overflow-hidden">
      <DashboardWidgetSelect
        dashboardId={dashboardId}
        onClose={() => {
          setIsSelectOpen(false);
        }}
        isOpen={isSelectOpen}
      />
      <DashboardHeader
        editMode={editMode}
        toggleEditMode={(a: boolean) => setEditMode(a)}
        isSelectOpen={isSelectOpen}
        onWidgetAdd={() => {
          setIsSelectOpen(true);
        }}
        dashboardId={dashboardId}
      />
      <div className=" m-auto w-full flex-1 p-4">
        {selectedDashboard?.widgets?.length ? (
          <div className="w-full flex flex-wrap gap-4">
            {selectedDashboard?.widgets.map((wdg) => (
              <div
                key={wdg.name}
                className=" bg-white dark:bg-primary-Shade-2 shadow flex flex-col 
                w-[calc(100%-8px)] md:w-[calc(33%-8px)] lg:w-[calc(25%-8px)] p-4 
                hover:shadow-neutral-6 cursor-pointer"
              >
                <div className=" capitalize text-sm mb-2 dark:text-white">
                  {wdg.name}
                </div>
                <div className="relative w-full aspect-square">
                  <Image fill src={wdg.image} alt="widget name" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          editMode && (
            <Button
              onClick={() => {
                setIsSelectOpen(true);
              }}
              className="px-4 m-auto mt-32"
            >
              <Add className="mr-2" /> Add widget
            </Button>
          )
        )}
      </div>
    </div>
  );
}
