import { TriggerNodeType } from "@/types/general";
import { Handle, NodeProps, Position } from "@xyflow/react";

export default function FlowTriggerNode({
  data,
  isConnectable,
}: NodeProps<TriggerNodeType>) {
  const { name, icon } = data;
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className=" border border-neutral-6 px-4 py-2 rounded-lg flex items-center text-base dark:text-neutral-4">
        {icon}
        <span className="ml-2">{name}</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
}
