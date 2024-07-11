"use client";

import DashboardContent from "@/components/DashboardContent";
import DashboardCreateButton from "@/components/DashboardCreateButton";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import {
  pinDashboard as pinDashboardAction,
  removeDashboard,
  unPinDashboard as unPinDashboardAction,
} from "@/lib/features/dashboard/dashboardSlice";
import { RootState } from "@/lib/store";
import { IDashboard } from "@/types/general";
import { useDispatch, useSelector } from "react-redux";
export default function Page() {
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  const dispatch = useDispatch();

  const removeFromDashboards = (dashboard: IDashboard) => {
    dispatch(removeDashboard(dashboard));
  };

  const pinDashboard = (dashboard: IDashboard) => {
    dispatch(pinDashboardAction(dashboard));
  };

  const unPinDashboard = (dashboard: IDashboard) => {
    dispatch(unPinDashboardAction(dashboard));
  };

  return (
    <div className=" flex flex-col pt-4 md:pt-0 md:pr-4 px-4 md:mt-[100px] lg:mt-[120px]">
      <div className="md:relative flex flex-row-reverse justify-end gap-4">
        <DashboardCreateButton dashboards={dashboards} />
        <SearchBar />
        <SortBy />
      </div>
      <DashboardContent
        unPinDashboard={unPinDashboard}
        pinDashboard={pinDashboard}
        removeDashboard={removeFromDashboards}
        dashboards={dashboards}
      />
    </div>
  );
}
