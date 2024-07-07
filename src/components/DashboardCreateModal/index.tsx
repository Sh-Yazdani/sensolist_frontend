import { IDashboard } from "@/types/general";
import DashboardCreateForm from "../DashboardCreateForm";
import Modal from "../UI/Modal";

interface DashboardCreateModalProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (a: boolean) => void;
  addDashboard: (d: IDashboard) => void;
}

export default function DashboardCreateModal({
  isCreateModalOpen,
  setIsCreateModalOpen,
  addDashboard,
}: DashboardCreateModalProps) {
  return (
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
          addDashboard(dashboard);
        }}
      />
    </Modal>
  );
}
