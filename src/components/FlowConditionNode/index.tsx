import { RootState } from "@/lib/store";
import { ConditionNodeType } from "@/types/general";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function FlowConditionNode({
  data,
  isConnectable,
}: NodeProps<ConditionNodeType>) {
  const { index } = data;
  const { conditionNodes } = useSelector(
    (state: RootState) => state.appletSlice
  );
  const [selectedNode, setSelectedNode] = useState(
    conditionNodes?.length ? conditionNodes[index] : null
  );
  console.log("selected node", selectedNode);
  return (
    <>
      <div className=" border border-neutral-6 px-4 py-2 rounded-lg flex items-center text-base dark:text-neutral-4">
        <div className="flex flex-col">
          {selectedNode?.inputs.map((input, i) => (
            <div key={i}>
              {input}
              <Handle
                type="target"
                position={Position.Left}
                style={{ background: "#555" }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
              />
            </div>
          ))}
        </div>

        <span className="ml-2">{index}</span>
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          style={{ background: "#555" }}
          isConnectable={isConnectable}
        />
      </div>
    </>
  );
}
