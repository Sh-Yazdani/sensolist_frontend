"use client";

import {
  addDashboard,
  editDashboard,
} from "@/lib/features/dashboard/dashboardSlice";
import { IOldDashboard } from "@/types/general";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DashboardCard from "../DashboardCard";
import DashboardCreateModal from "../DashboardCreateModal";
import DashboardEmptyState from "../DashboardEmptyState";

interface DashboardContentProps {
  dashboards: IOldDashboard[];
  removeDashboard: (d: IOldDashboard) => void;
  pinDashboard: (d: IOldDashboard) => void;
  unPinDashboard: (d: IOldDashboard) => void;
}

export default function DashboardContent({
  dashboards,
  removeDashboard,
  pinDashboard,
  unPinDashboard,
}: DashboardContentProps) {
  const dispatch = useDispatch();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [dashboardEdit, setDashboardEdit] = useState<IOldDashboard | null>(
    null
  );
  return (
    <>
      {dashboards.length ? (
        <div className="w-full pt-4 gap-4 flex flex-wrap px-4">
          {dashboards.map((dashboard: IOldDashboard) => (
            <DashboardCard
              unPinDashboard={unPinDashboard}
              pinDashboard={pinDashboard}
              removeDashboard={removeDashboard}
              key={dashboard.name}
              dashboard={dashboard}
              editDashboard={(dash: IOldDashboard) => {
                setDashboardEdit(dash);
              }}
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
        isCreateModalOpen={isCreateModalOpen || !!dashboardEdit}
        setIsCreateModalOpen={(a: boolean) => setIsCreateModalOpen(a)}
        addDashboard={(d: IOldDashboard) => {
          dispatch(addDashboard(d));
        }}
        closeEditModal={() => {
          setDashboardEdit(null);
        }}
        editDashboard={(d: IOldDashboard) => {
          dispatch(editDashboard(d));
        }}
        dashboardEdit={dashboardEdit}
      />
    </>
  );
}
