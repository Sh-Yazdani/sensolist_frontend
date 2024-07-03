"use client";

import { IDashboard } from "@/types/general";
import { useState } from "react";
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
        <div>modal test</div>
      </Modal>
    </>
  );
}
