"use client";

import { RootState } from "@/lib/store";
import { ISubWidget } from "@/types/general";
import { Add } from "iconsax-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import DashboardWidgetSelect from "../WidgetSelect";
import WidgetsHeader from "../WidgetsHeader";
import Widget from "./Widget";

interface DashboardWidgetsProps {
  dashboardId: number;
}

export default function DashboardWidgets({
  dashboardId,
}: DashboardWidgetsProps) {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [widgets, setWidgets] = useState<
    { dashboardId: number; widget: ISubWidget }[]
  >([]);
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  const selectedDashboard = [
    ...dashboards.filter((dash) => dash.id === dashboardId),
  ][0];

  if (!selectedDashboard) {
    redirect("/dashboard");
  }

  const onSave = () => {
    console.log("on save");
  };
  const onCancel = () => {
    console.log("on cancel");
  };

  return (
    <div className="flex flex-col h-full flex-1 relative md:pl-5 overflow-hidden">
      <DashboardWidgetSelect
        onAddWidget={(dId: number, wdg: ISubWidget) => {
          setWidgets((prev) =>
            prev?.length
              ? [...prev, { dashboardId: dId, widget: wdg }]
              : [{ dashboardId: dId, widget: wdg }]
          );
        }}
        dashboardId={dashboardId}
        onClose={() => {
          setIsSelectOpen(false);
        }}
        isOpen={isSelectOpen}
      />
      <WidgetsHeader
        editMode={editMode}
        toggleEditMode={(a: boolean) => setEditMode(a)}
        isSelectOpen={isSelectOpen}
        onWidgetAdd={() => {
          setIsSelectOpen(true);
        }}
        dashboardId={dashboardId}
      />
      <div className=" m-auto w-full flex-1 p-4">
        {selectedDashboard?.widgets?.length || 0 + widgets?.length || 0 ? (
          <div className="w-full flex flex-wrap gap-4">
            {selectedDashboard?.widgets &&
              selectedDashboard?.widgets.map((wdg) => (
                <Widget key={wdg.name} widget={wdg} />
              ))}
            {widgets.map((wdg) => (
              <Widget key={wdg.widget.name} widget={wdg.widget} />
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
