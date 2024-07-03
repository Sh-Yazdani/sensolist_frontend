interface BackdropProps {
  onClick?: () => void;
}
export default function Backdrop({ onClick }: BackdropProps) {
  return (
    <div
      onClick={onClick}
      className=" fixed bg-black-opacity-400 top-0 left-0 w-[100vw] h-[100vh] z-20"
    ></div>
  );
}
