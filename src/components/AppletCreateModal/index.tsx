import { IApplet } from "@/types/general";
import AppletCreateForm from "../AppletCreateForm";
import Modal from "../UI/Modal";

interface AppletCreateModalProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (a: boolean) => void;
  addApplet: (d: IApplet) => void;
  applets: IApplet[];
}

export default function AppletCreateModal({
  isCreateModalOpen,
  setIsCreateModalOpen,
  addApplet,
  applets,
}: AppletCreateModalProps) {
  return (
    <Modal
      open={isCreateModalOpen}
      onClose={() => {
        setIsCreateModalOpen(false);
      }}
    >
      <AppletCreateForm
        applets={applets}
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
