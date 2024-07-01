interface DropDownModalProps {
  onClick: () => void;
}

export default function DropDownModal({ onClick }: DropDownModalProps) {
  return (
    <div
      className=" fixed w-[100vw] h-[100vh] z-20 top-0 left-0"
      onClick={onClick}
    ></div>
  );
}
