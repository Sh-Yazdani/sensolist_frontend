"use client";

import { RootState } from "@/lib/store";
import { Add, CloseCircle, Edit2, TickCircle } from "iconsax-react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";

interface DashboardHeaderProps {
  dashboardId: number;
  onWidgetAdd: () => void;
  isSelectOpen: boolean;
  onSave: () => void;
  editMode: boolean;
  goToEditMode: () => void;
}

export default function WidgetsHeader({
  dashboardId,
  onWidgetAdd,
  isSelectOpen,
  editMode,
  onSave,
  goToEditMode,
}: DashboardHeaderProps) {
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  const selectedDashboard = [
    ...dashboards.filter((dash) => dash.id === dashboardId),
  ][0];
  return (
    <div
      className={`w-full h-16 bg-neutral-2 shadow dark:bg-primary-tint-1 flex items-center px-6 transition-all ${
        isSelectOpen && "translate-x-[120%]"
      }`}
    >
      <div className=" flex-col">
        <div className=" capitalize dark:text-white mr-2">
          {selectedDashboard?.name}
        </div>
        <div className=" text-neutral-7 dark:text-neutral-4 mr-2 text-xs">
          {selectedDashboard?.description}
        </div>
      </div>
      {editMode ? (
        <>
          <Button className="ml-auto px-4" onClick={onWidgetAdd}>
            <Add className="md:mr-1" />
            <span className="hidden md:flex">Add widget</span>
          </Button>
          <Button className="mx-4 text-neutral-6" variant="text">
            <CloseCircle className="mr-1" /> cancel
          </Button>
          <Button
            onClick={() => {
              onSave();
            }}
            className="px-2 py-1 h-[40px]"
            variant="secondary"
          >
            <TickCircle className="mr-1" /> save
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            goToEditMode();
          }}
          className="px-2 py-1 h-[40px] ml-auto"
          variant="secondary"
        >
          <Edit2 className="mr-1" /> edit
        </Button>
      )}
    </div>
  );
}
