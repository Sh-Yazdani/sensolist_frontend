"use client";

import { IDashboard } from "@/types/general";
import { useState } from "react";
import DashboardCard from "../DashboardCard";
import DashboardCreateModal from "../DashboardCreateModal";
import DashboardEmptyState from "../DashboardEmptyState";

interface DashboardContentProps {
  dashboards: IDashboard[];
  setDashboards: (d: IDashboard[]) => void;
  removeDashboard: (d: IDashboard) => void;
}

export default function DashboardContent({
  dashboards,
  setDashboards,
  removeDashboard,
}: DashboardContentProps) {
  // const [dashboards, setDashboards] = useState<IDashboard[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  console.log(dashboards);
  return (
    <>
      {dashboards.length ? (
        <div className="w-full pt-4 gap-4 flex flex-wrap">
          {dashboards.map((dashboard: IDashboard) => (
            <DashboardCard
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
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={(a: boolean) => setIsCreateModalOpen(a)}
        addDashboard={(d: IDashboard) => {
          setDashboards([...dashboards, d]);
        }}
      />
    </>
  );
}
