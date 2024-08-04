"use client";

import {
  addDraftWidgets,
  cancelDraftWidgets,
  saveDraftWidgets,
} from "@/lib/features/dashboard/dashboardSlice";
import { RootState } from "@/lib/store";
import { ISubWidget } from "@/types/general";
import { Add } from "iconsax-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  // const [widgets, setWidgets] = useState<ISubWidget[]>([]);
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  const selectedDashboard = [
    ...dashboards.filter((dash) => dash.id === dashboardId),
  ][0];

  if (!selectedDashboard) {
    redirect("/dashboard");
  }

  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(saveDraftWidgets({ dashboardId: selectedDashboard.id }));
    setEditMode(false);
  };
  const onCancel = () => {
    cancelDraftWidgets({ dashboardId: selectedDashboard.id });
    setEditMode(false);
  };

  console.log("selectedDashboard", selectedDashboard);

  return (
    <div className="flex flex-col h-full flex-1 relative md:pl-5 overflow-hidden">
      <DashboardWidgetSelect
        onAddWidget={(wdg: ISubWidget) => {
          dispatch(addDraftWidgets({ dashboardId: dashboardId, widget: wdg }));
        }}
        dashboardId={dashboardId}
        onClose={() => {
          setIsSelectOpen(false);
        }}
        isOpen={isSelectOpen}
      />
      <WidgetsHeader
        editMode={editMode}
        goToEditMode={() => {
          setEditMode(true);
        }}
        onSave={() => {
          onSave();
        }}
        onCancel={() => {
          onCancel();
        }}
        isSelectOpen={isSelectOpen}
        onWidgetAdd={() => {
          setIsSelectOpen(true);
        }}
        dashboardId={dashboardId}
      />
      <div className=" m-auto w-full flex-1 p-4">
        {(selectedDashboard?.widgets?.length || 0) +
        (selectedDashboard?.draftWidgets?.length || 0) ? (
          <div className="w-full flex flex-wrap gap-4">
            {selectedDashboard?.widgets &&
              selectedDashboard?.widgets.map((wdg) => (
                <Widget
                  saved={false}
                  dashboardId={selectedDashboard.id}
                  editMode={editMode}
                  key={wdg.name}
                  widget={wdg}
                />
              ))}
            {selectedDashboard.draftWidgets?.map((wdg) => (
              <Widget
                saved={true}
                dashboardId={selectedDashboard.id}
                editMode={editMode}
                key={wdg.name}
                widget={wdg}
              />
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
