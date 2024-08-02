import useContextMenu from "@/hooks/useContextMenu";
import { addEditNode, deleteNode } from "@/lib/features/applet/appletSlice";
import { RootState } from "@/lib/store";
import { VariableNodeType } from "@/types/general";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContextMenu from "../FlowContextMenu";

export default function FlowVariableNode({
  data,
  id,
  isConnectable,
}: NodeProps<VariableNodeType>) {
  const { name, value } = data;
  const { variableNodes } = useSelector(
    (state: RootState) => state.appletSlice
  );

  console.log("variable node", variableNodes);

  const [selectedNode, setSelectedNode] = useState(
    variableNodes?.length
      ? variableNodes.filter((item) => item.nodeId === id)[0]
      : null
  );

  useEffect(() => {
    setSelectedNode(
      variableNodes?.length
        ? variableNodes.filter((item) => item.nodeId === id)[0]
        : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableNodes]);

  const dispatch = useDispatch();
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div
        onContextMenu={(e) => {
          console.log("context right click");
          e.preventDefault();
          setClicked(true);
          setPoints({
            x: e.pageX,
            y: e.pageY,
          });
        }}
        className=" border border-neutral-6 px-4 py-2 rounded-lg flex items-center text-base dark:text-neutral-4"
      >
        <span className="ml-2">
          {selectedNode?.name} {selectedNode?.value}
        </span>
        {/* <span className="ml-4">{count}</span> */}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
      {clicked && (
        <ContextMenu
          onEditSelect={() => {
            if (selectedNode)
              dispatch(addEditNode({ nodeData: selectedNode, nodeName: name }));
          }}
          onDelete={() => {
            if (selectedNode)
              dispatch(
                deleteNode({ index: variableNodes?.indexOf(selectedNode) })
              );
          }}
        />
      )}
    </>
  );
}
