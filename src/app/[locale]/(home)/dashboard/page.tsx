"use client";

import DashboardContent from "@/components/DashboardContent";
import DashboardCreateButton from "@/components/DashboardCreateButton";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import { IDashboard } from "@/types/general";
import { useState } from "react";

// let dashboards:  = [];

// after connecting to server this component must be a server side component

export default function Page() {
  const [dashboards, setDashbaords] = useState<IDashboard[]>([]);
  const removeFromDashboards = (dashboard: IDashboard) => {
    setDashbaords((prev) => [
      ...prev.filter((dash) => dash.name !== dashboard.name),
    ]);
  };
  return (
    <div className=" flex flex-col pt-20 md:pt-0 md:pr-4 px-4">
      <div className="md:relative flex flex-row-reverse justify-end">
        <DashboardCreateButton
          setDashboards={setDashbaords}
          dashboards={dashboards}
        />
        <SearchBar />
        <SortBy />
      </div>
      <DashboardContent
        removeDashboard={removeFromDashboards}
        setDashboards={setDashbaords}
        dashboards={dashboards}
      />
    </div>
  );
}
