import Modal from "../UI/Modal";

interface ChartFormModalProps {
  open: boolean;
  onClose: () => void;
  chartName: string;
}

export default function ChartFormModal({
  open,
  onClose,
  chartName,
}: ChartFormModalProps) {
  return (
    <Modal onClose={onClose} open={open}>
      <div className=" border-b border-neutral-4 pb-3">
        Add Widget :{" "}
        <span className=" capitalize font-semibold">{chartName}</span>
      </div>
    </Modal>
  );
}
