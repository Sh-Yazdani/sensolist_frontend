import { CloseCircle, TickCircle } from "iconsax-react";
import Button from "../UI/Button";

export default function AppletHeader({
  appletName,
  toggleEditMode,
  editMode,
}: {
  appletName: string;
  toggleEditMode: (a: boolean) => void;
  editMode: boolean;
}) {
  return (
    <div className="w-full h-16 bg-neutral-2 shadow dark:bg-primary-tint-1 flex items-center px-6">
      <div className=" capitalize dark:text-white">{appletName}</div>
      {editMode ? (
        <>
          <Button className="ml-auto mx-4 text-neutral-6" variant="text">
            <CloseCircle className="mr-1" /> cancel
          </Button>
          <Button
            onClick={() => {
              toggleEditMode(false);
            }}
            className="px-2 py-1 h-[40px]"
            variant="secondary"
          >
            <TickCircle className="mr-1" /> save
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            toggleEditMode(true);
          }}
          className="ml-auto px-2 py-1 h-[40px]"
          variant="secondary"
        >
          <TickCircle className="mr-1" /> Edit
        </Button>
      )}
    </div>
  );
}
