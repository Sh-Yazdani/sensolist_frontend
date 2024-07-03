"use client";

import { IDashboard } from "@/types/general";
import { useState } from "react";
import DashboardCreateForm from "../DashboardCreateForm";
import DashboardEmptyState from "../DashboardEmptyState";
import Modal from "../UI/Modal";

interface DashboardContentProps {
  dashboards: IDashboard[];
}

export default function DashboardContent({
  dashboards,
}: DashboardContentProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
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
      <Modal
        open={isCreateModalOpen}
        onClose={() => {
          setIsCreateModalOpen(false);
        }}
      >
        <DashboardCreateForm
          onCancel={() => {
            setIsCreateModalOpen(false);
          }}
          dashboardAdd={(dashboard: IDashboard) => {
            dashboards.concat(dashboard);
          }}
        />
      </Modal>
    </>
  );
}
