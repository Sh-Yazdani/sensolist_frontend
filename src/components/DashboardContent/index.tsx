"use client";

import { IDashboard } from "@/types/general";
import { useState } from "react";
import DashboardCreateModal from "../DashboardCreateModal";
import DashboardEmptyState from "../DashboardEmptyState";

interface DashboardContentProps {
  dashboards: IDashboard[];
}

export default function DashboardContent({
  dashboards,
}: DashboardContentProps) {
  // const [dashboards, setDashboards] = useState<IDashboard[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  console.log(dashboards);
  return (
    <>
      {dashboards.length ? (
        <div></div>
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
        addDashboard={(d: IDashboard) => dashboards.push(d)}
      />
    </>
  );
}
