import { RootState } from "@/lib/store";
import { ConditionNodeType } from "@/types/general";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { useSelector } from "react-redux";

export default function FlowConditionNode({
  data,
  isConnectable,
}: NodeProps<ConditionNodeType>) {
  const { index } = data;
  const state = useSelector((state: RootState) => state.appletSlice);
  console.log("selected node", state);
  // const [selectedNode, setSelectedNode] = useState(
  //   conditionNodes?.length ? conditionNodes[index] : null
  // );
  // console.log("selected node", selectedNode);
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
        <span className="ml-2">{index}</span>
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
