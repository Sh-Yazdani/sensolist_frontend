import { RootState } from "@/lib/store";
import { TriggerNodeType } from "@/types/general";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { useSelector } from "react-redux";

export default function FlowTriggerNode({
  data,
  isConnectable,
}: NodeProps<TriggerNodeType>) {
  const { name, icon, value, nodeId } = data;
  const { thingNodes } = useSelector((state: RootState) => state.appletSlice);
  const selectedNode = thingNodes?.filter((item) => item.nodeId === nodeId)
    .length
    ? [...thingNodes?.filter((item) => item.nodeId === nodeId)][0]
    : null;
  if (!selectedNode) return;
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
        <span className="ml-2">{selectedNode.title}</span>
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
