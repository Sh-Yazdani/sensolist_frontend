"use client";

import { RootState } from "@/lib/store";
import { Add, CloseCircle, TickCircle } from "iconsax-react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";

interface DashboardHeaderProps {
  dashboardId: number;
  onWidgetAdd: () => void;
  isSelectOpen: boolean;
}

export default function DashboardHeader({
  dashboardId,
  onWidgetAdd,
  isSelectOpen,
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
      <div className=" capitalize dark:text-white">
        {selectedDashboard?.name}
      </div>
      <Button className="ml-auto px-4" onClick={onWidgetAdd}>
        <Add className="mr-1" />
        Add widget
      </Button>
      <Button className="mx-4 text-neutral-6" variant="text">
        <CloseCircle className="mr-1" /> cancel
      </Button>
      <Button className="px-2 py-1 h-[40px]" variant="secondary">
        <TickCircle className="mr-1" /> save
      </Button>
    </div>
  );
}
