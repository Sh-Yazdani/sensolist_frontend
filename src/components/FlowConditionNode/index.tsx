"use client";

import useContextMenu from "@/hooks/useContextMenu";
import { addEditNode } from "@/lib/features/applet/appletSlice";
import { RootState } from "@/lib/store";
import { ConditionNodeType, IConditionNodeInputs } from "@/types/general";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContextMenu from "./ContextMenu";

export default function FlowConditionNode({
  data,
  isConnectable,
}: NodeProps<ConditionNodeType>) {
  const { index } = data;
  const dispatch = useDispatch();
  const { conditionNodes } = useSelector(
    (state: RootState) => state.appletSlice
  );
  const [selectedNode, setSelectedNode] = useState(
    conditionNodes?.length ? conditionNodes[index] : null
  );

  const [editOpen, setEditOpen] = useState<IConditionNodeInputs | null>();

  const { clicked, setClicked, points, setPoints } = useContextMenu();

  return (
    <>
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setClicked(true);
          setPoints({
            x: e.pageX,
            y: e.pageY,
          });
        }}
        className="relative border border-neutral-6 py-2 rounded-lg flex flex-col items-center text-base dark:text-neutral-4"
      >
        <div className="mb-2">{selectedNode?.title}</div>
        <div className="flex items-center">
          <div className="flex flex-col mr-4">
            {selectedNode?.inputs.map((input, i) => (
              <div key={i} className="relative">
                <span className="ml-2">{input}</span>
                <Handle
                  type="target"
                  position={Position.Left}
                  style={{ background: "#555" }}
                  onConnect={(params) =>
                    console.log("handle onConnect", params)
                  }
                  isConnectable={isConnectable}
                />
              </div>
            ))}
          </div>

          {/* <span className="ml-2">{index}</span> */}
          <div className="flex flex-col ml-4 items-end">
            {selectedNode?.outputs.map((input, i) => (
              <div key={i} className="relative">
                <span className="mr-2">{input}</span>
                <Handle
                  type="source"
                  position={Position.Right}
                  id="a"
                  style={{ background: "#555" }}
                  isConnectable={isConnectable}
                />
              </div>
            ))}
          </div>
        </div>
        {clicked && (
          <ContextMenu
            onEditSelect={() => {
              if (selectedNode) dispatch(addEditNode(selectedNode));
            }}
          />
        )}
      </div>
    </>
  );
}
