import { IDashboard } from "@/types/general";
import DashboardCreateForm from "../DashboardCreateForm";
import Modal from "../UI/Modal";

interface DashboardCreateModalProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (a: boolean) => void;
  addDashboard: (d: IDashboard) => void;
  dashboards: IDashboard[];
  closeEditModal: () => void;
  editDashboard: (d: IDashboard) => void;
  dashboardEdit: IDashboard | null;
}

export default function DashboardCreateModal({
  isCreateModalOpen,
  setIsCreateModalOpen,
  addDashboard,
  dashboards,
  closeEditModal,
  editDashboard,
  dashboardEdit,
}: DashboardCreateModalProps) {
  return (
    <Modal
      open={isCreateModalOpen}
      onClose={() => {
        setIsCreateModalOpen(false);
        closeEditModal();
      }}
    >
      <DashboardCreateForm
        initialValues={dashboardEdit}
        dashboards={dashboards}
        onCancel={() => {
          setIsCreateModalOpen(false);
          closeEditModal();
        }}
        edit={dashboardEdit}
        dashboardAdd={(dashboard: IDashboard) => {
          if (dashboardEdit) {
            console.log("edit dash", dashboard);
            editDashboard(dashboard);
          } else {
            addDashboard(dashboard);
          }
        }}
      />
    </Modal>
  );
}
