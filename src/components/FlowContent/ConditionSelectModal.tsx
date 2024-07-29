import SecondaryModal from "../UI/SecondaryModal";

interface ConditionSelectModalProps {
  open: number | null;
  onClose: () => void;
  setCondition: (condition: string) => void;
}

export default function ConditionSelectModal({
  open,
  onClose,
  setCondition,
}: ConditionSelectModalProps) {
  console.log("condition select", open);
  return (
    <SecondaryModal onClose={onClose} open={!!open}>
      trst
    </SecondaryModal>
  );
}
