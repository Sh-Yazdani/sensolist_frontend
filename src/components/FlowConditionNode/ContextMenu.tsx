import { Copy, Edit, Trash } from "iconsax-react";

export default function ContextMenu() {
  return (
    <div className=" absolute bg-neutral-4 rounded-lg flex flex-col">
      <div className="p-4 border-b border-neutral-6 flex text-neutral-8 text-sm items-center">
        <Edit className="mr-4 size-4" /> Edit
      </div>
      <div className="p-4 border-b border-neutral-6 flex text-neutral-8 text-sm items-center">
        <Copy className="mr-4 size-4" /> Copy
      </div>
      <div className="p-4 flex text-neutral-8 text-sm items-center">
        <Trash className="mr-4 size-4" /> Delete
      </div>
    </div>
  );
}
