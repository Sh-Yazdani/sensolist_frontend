"use client";

import { addDashboard } from "@/lib/features/dashboard/dashboardSlice";
import { IDashboard } from "@/types/general";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DashboardCard from "../DashboardCard";
import DashboardCreateModal from "../DashboardCreateModal";
import DashboardEmptyState from "../DashboardEmptyState";

interface DashboardContentProps {
  dashboards: IDashboard[];
  removeDashboard: (d: IDashboard) => void;
  pinDashboard: (d: IDashboard) => void;
  unPinDashboard: (d: IDashboard) => void;
}

export default function DashboardContent({
  dashboards,
  removeDashboard,
  pinDashboard,
  unPinDashboard,
}: DashboardContentProps) {
  const dispatch = useDispatch();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  console.log(dashboards);
  return (
    <>
      {dashboards.length ? (
        <div className="w-full pt-4 gap-4 flex flex-wrap">
          {dashboards.map((dashboard: IDashboard) => (
            <DashboardCard
              unPinDashboard={unPinDashboard}
              pinDashboard={pinDashboard}
              removeDashboard={removeDashboard}
              key={dashboard.name}
              dashboard={dashboard}
            />
          ))}
        </div>
      ) : (
        <DashboardEmptyState
          setCreateOpen={() => {
            setIsCreateModalOpen(true);
          }}
        />
      )}
      <DashboardCreateModal
        dashboards={dashboards}
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={(a: boolean) => setIsCreateModalOpen(a)}
        addDashboard={(d: IDashboard) => {
          dispatch(addDashboard(d));
        }}
      />
    </>
  );
}
