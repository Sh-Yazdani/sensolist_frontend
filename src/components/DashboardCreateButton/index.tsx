"use client";

import { IDashboard } from "@/types/general";
import { Add } from "iconsax-react";
import { useState } from "react";
import DashboardCreateModal from "../DashboardCreateModal";
import Button from "../UI/Button";

interface DashboardCreateButtonProps {
  dashboards: IDashboard[];
  setDashboards: (d: IDashboard[]) => void;
}

export default function DashboardCreateButton({
  dashboards,
  setDashboards,
}: DashboardCreateButtonProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  if (!dashboards.length) return;
  return (
    <>
      <Button className="w-10 h-10 ml-auto">
        <span className="flex md:hidden">
          <Add />
        </span>
      </Button>
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
