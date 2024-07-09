"use client";

import DashboardContent from "@/components/DashboardContent";
import DashboardCreateButton from "@/components/DashboardCreateButton";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import { RootState } from "@/lib/store";
import { IDashboard } from "@/types/general";
import { useSelector } from "react-redux";

// let dashboards:  = [];

// after connecting to server this component must be a server side component

export default function Page() {
  // const [dashboards, setDashbaords] = useState<IDashboard[]>([]);
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  // console.log(state);
  const removeFromDashboards = (dashboard: IDashboard) => {
    console.log("removeFromDashboards", dashboard);
    // setDashbaords((prev) => prev.filter((dash) => dash.id !== dashboard.id));
  };

  const pinDashboard = (dashboard: IDashboard) => {
    // setDashbaords((prev) => [
    //   ...prev.filter((dash) => dash.id !== dashboard.id),
    //   { ...dashboard, pin: true },
    // ]);
  };

  return (
    <div className=" flex flex-col pt-20 md:pt-0 md:pr-4 px-4">
      <div className="md:relative flex flex-row-reverse justify-end">
        <DashboardCreateButton dashboards={dashboards} />
        <SearchBar />
        <SortBy />
      </div>
      <DashboardContent
        pinDashboard={pinDashboard}
        removeDashboard={removeFromDashboards}
        dashboards={dashboards}
      />
    </div>
  );
}
