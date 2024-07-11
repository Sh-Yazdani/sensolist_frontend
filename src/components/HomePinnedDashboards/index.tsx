"use client";

import { RootState } from "@/lib/store";
import { IDashboard } from "@/types/general";
import { Element3 } from "iconsax-react";
import { useSelector } from "react-redux";
import EmptyState from "./EmptyState";
import PinnedDashboardCard from "./PinnedDashboardCard";

export default function HomePinnedDashboardes() {
  const { pinedDashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  return (
    <div
      className="flex flex-col w-full rounded-2xl bg-black-opacity-50 dark:bg-white-opacity-50 
    p-4 overflow-x-auto md:w-[calc(50%-8px)] lg:w-[calc(50%-20px)]"
    >
      <div className="flex items-center">
        <Element3 className=" text-secondary-main size-6 mr-2" />
        <span className=" text-neutral-8 capitalize dark:text-neutral-2 lg:text-lg">
          Pinned Dashboards
        </span>
      </div>
      <div className="flex mt-4 lg:mt-10 gap-4 w-fit md:flex-col md:w-full lg:flex-row lg:flex-wrap m-auto">
        {pinedDashboards.length ? (
          pinedDashboards.map((dashboard: IDashboard, i) => (
            <PinnedDashboardCard
              image={dashboard.image}
              name={dashboard.name}
              key={i}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
