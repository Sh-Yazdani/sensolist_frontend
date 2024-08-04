import { ISubWidget } from "@/types/general";
import { Edit, Trash } from "iconsax-react";

interface WidgetCardContainerProps {
  children: React.ReactNode;
  editMode: boolean;
  widget: ISubWidget;
}

export default function WidgetCardContainer({
  children,
  editMode,
}: WidgetCardContainerProps) {
  return (
    <div className="overflow-auto w-[400px] bg-black-opacity-100 dark:bg-white-opacity-50 rounded-lg p-4 flex flex-col">
      {editMode && (
        <div className="w-full flex items-center justify-end">
          <button className="mr-2">
            <Edit className=" size-5" />
          </button>
          <button>
            <Trash className=" size-5" />
          </button>
        </div>
      )}
      {children}
    </div>
  );
}
