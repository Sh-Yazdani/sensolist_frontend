"use client";

import { getAllDashboard } from "@/ApiCall/dashboards";
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
import { IDashboardResponse, IOldDashboard } from "@/types/general";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const [dashboardData, setDashboardData] = useState<IDashboardResponse>();
  useEffect(() => {
    const getData = async () => {
      const res = await getAllDashboard();
      setDashboardData(res);
    };
    getData();
  }, []);

  console.log("fetched dashboards", dashboardData);

  const fixedData: IOldDashboard[] = dashboardData?.list
    ? dashboardData?.list.map((dash) => {
        return {
          id: dash.id || "",
          name: dash.name,
          description: dash.description,
          image: dash.imageId || "",
          pin: dash.pinned || false,
          widgets: [],
          draftWidgets: [],
        };
      })
    : [];

  // console.log("all dashboards", data);
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );

  const [displayDashboards, setDisplayDashboards] = useState<IOldDashboard[]>([
    ...dashboards,
    ...fixedData,
  ]);
  useEffect(() => {
    setDisplayDashboards([...dashboards, ...fixedData]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboards, dashboardData]);
  const dispatch = useDispatch();

  const removeFromDashboards = (dashboard: IOldDashboard) => {
    dispatch(removeDashboard(dashboard));
  };

  const pinDashboard = (dashboard: IOldDashboard) => {
    dispatch(pinDashboardAction(dashboard));
  };

  const unPinDashboard = (dashboard: IOldDashboard) => {
    dispatch(unPinDashboardAction(dashboard));
  };

  return (
    <div className=" flex flex-col">
      <div className="md:relative flex flex-row-reverse justify-end gap-4 px-4">
        <DashboardCreateButton dashboards={displayDashboards} />
        <SortBy />
        <SearchBar />
      </div>
      <DashboardContent
        unPinDashboard={unPinDashboard}
        pinDashboard={pinDashboard}
        removeDashboard={removeFromDashboards}
        dashboards={displayDashboards}
      />
    </div>
  );
}
