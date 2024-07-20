"use client";

import { RootState } from "@/lib/store";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  NodeTypes,
  OnConnect,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AppletHeader from "../AppletHeader";
import FlowSidebar from "../FlowSidebar";
import { getNodeByValue } from "../FlowSidebar/nodeItems";
import FlowTriggerNode from "../FlowTriggerNode";

const initialNodes: Node[] = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes: NodeTypes = { triggerNode: FlowTriggerNode };

export default function FlowContent({ appletId }: { appletId: number }) {
  const [editMode, setEditMode] = useState<boolean>(true);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const { applets } = useSelector((state: RootState) => state.appletSlice);
  const selectedApplet = [...applets.filter((app) => app.id === appletId)][0];

  const { screenToFlowPosition } = useReactFlow();

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { getData: (arg0: string) => string };
      clientX: number;
      clientY: number;
    }) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (typeof type === "undefined" || !type) {
        return;
      }
      const nodeValue = event.dataTransfer.getData("value");
      const triggeredNode = getNodeByValue(nodeValue);
      console.log("trigger node", triggeredNode);
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { ...triggeredNode },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [screenToFlowPosition]
  );

  return (
    <>
      {editMode && <FlowSidebar />}
      <div className="flex flex-grow flex-col h-auto">
        <AppletHeader
          appletName={selectedApplet?.name}
          editMode={editMode}
          toggleEditMode={(a: boolean) => {
            setEditMode(a);
          }}
        />
        <div className="flex-grow h-full" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
            // edgesUpdatable={!editMode}
            edgesFocusable={editMode}
            nodesDraggable={editMode}
            nodesConnectable={editMode}
            nodesFocusable={editMode}
            elementsSelectable={editMode}
          >
            <Background color="#ccc" variant={BackgroundVariant.Dots} />
            <Controls />
            <MiniMap nodeStrokeWidth={2} />
          </ReactFlow>
        </div>
      </div>
    </>
  );
}
