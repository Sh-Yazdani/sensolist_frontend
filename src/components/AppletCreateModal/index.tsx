import { IApplet } from "@/types/general";
import AppletCreateForm from "../AppletCreateForm";
import Modal from "../UI/Modal";

interface AppletCreateModalProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (a: boolean) => void;
  addApplet: (d: IApplet) => void;
  applets: IApplet[];
  closeEditModal: () => void;
  editApplet: (d: IApplet) => void;
  appletEdit: IApplet | null;
}

export default function AppletCreateModal({
  isCreateModalOpen,
  setIsCreateModalOpen,
  addApplet,
  applets,
  closeEditModal,
  editApplet,
  appletEdit,
}: AppletCreateModalProps) {
  return (
    <Modal
      open={isCreateModalOpen}
      onClose={() => {
        setIsCreateModalOpen(false);
        closeEditModal();
      }}
    >
      <AppletCreateForm
        initialValues={appletEdit}
        applets={applets}
        onCancel={() => {
          setIsCreateModalOpen(false);
          closeEditModal();
        }}
        edit={appletEdit}
        appletAdd={(applet: IApplet) => {
          if (appletEdit) {
            editApplet(applet);
          } else {
            addApplet(applet);
          }
        }}
      />
    </Modal>
  );
}
