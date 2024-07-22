import { VariableNodeType } from "@/types/general";
import { Handle, NodeProps, Position } from "@xyflow/react";

export default function FlowVariableNode({
  data,
  isConnectable,
}: NodeProps<VariableNodeType>) {
  const { name, value, count } = data;
  console.log("node name", name);
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
        <span className="ml-2">
          {name} {value}
        </span>
        <span className="ml-4">{count}</span>
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
