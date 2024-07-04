import { IApplet } from "@/types/general";
import AppletCreateForm from "../AppletCreateForm";
import Modal from "../UI/Modal";

interface AppletCreateModalProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (a: boolean) => void;
  addApplet: (d: IApplet) => void;
}

export default function AppletCreateModal({
  isCreateModalOpen,
  setIsCreateModalOpen,
  addApplet,
}: AppletCreateModalProps) {
  return (
    <Modal
      open={isCreateModalOpen}
      onClose={() => {
        setIsCreateModalOpen(false);
      }}
    >
      <AppletCreateForm
        onCancel={() => {
          setIsCreateModalOpen(false);
        }}
        appletAdd={(applet: IApplet) => {
          addApplet(applet);
        }}
      />
    </Modal>
  );
}
