"use client";

import useContextMenu from "@/hooks/useContextMenu";
import { removeEditNode } from "@/lib/features/applet/appletSlice";
import { RootState } from "@/lib/store";
// import { NodeDataType } from "@/types/general";
import { NodeDataType } from "@/types/general";
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
import { useDispatch, useSelector } from "react-redux";
import AppletHeader from "../AppletHeader";
import FlowConditionNode from "../FlowConditionNode";
import FlowSidebar from "../FlowSidebar";
import { getNodeByValue } from "../FlowSidebar/nodeItems";
import FlowTriggerNode from "../FlowTriggerNode";
import FlowVariableNode from "../FlowVariableNode";
import ConditionFormModal from "./ConditionFormModal";
import RefrencesFormModal from "./RefrencesFormModal";
import ThingFormModal from "./ThingFormModal";
import ThirdPartyFormModal from "./ThirdPartyFormModal";
import TriggerOrderFormModal from "./TriggerOrderFormModal";

const initialNodes: Node[] = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes: NodeTypes = {
  triggerNode: FlowTriggerNode,
  variableNode: FlowVariableNode,
  conditionNode: FlowConditionNode,
};

export default function FlowContent({ appletId }: { appletId: number }) {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  const [editMode, setEditMode] = useState<boolean>(true);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const dispatch = useDispatch();
  const { conditionNodes: selector } = useSelector(
    (state: RootState) => state.appletSlice
  );

  const { editNode, conditionNodes } = useSelector(
    (state: RootState) => state.appletSlice
  );

  console.log("edit node", editNode);

  const [thingModalOpen, setThingModalOpen] =
    useState<Node<NodeDataType> | null>(null);

  const [thirdPartyModalOpen, setThirdPartyModalOpen] =
    useState<Node<NodeDataType> | null>(null);

  const [refrencesModalOpen, setRefrencesModalOpen] =
    useState<Node<NodeDataType> | null>(null);

  const [triggerOrderModalOpen, setTriggerOrderModalOpen] =
    useState<Node<NodeDataType> | null>(null);

  const [conditionModalOpen, setConditionModalOpen] =
    useState<Node<NodeDataType> | null>(null);

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
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newId = getId();
      const newNode = {
        id: newId,
        type,
        position,
        data:
          type === "triggerNode"
            ? { ...triggeredNode, nodeId: newId }
            : type === "conditionNode"
            ? {}
            : {
                name: event.dataTransfer.getData("name"),
                value: event.dataTransfer.getData("value"),
                count: event.dataTransfer.getData("count"),
              },
      };
      if (nodeValue.includes("thing")) {
        setThingModalOpen(newNode);
        return;
      }
      if (nodeValue === "thirdParty") {
        setThirdPartyModalOpen(newNode);
        return;
      }
      if (nodeValue === "refrences") {
        setRefrencesModalOpen(newNode);
        return;
      }
      if (nodeValue === "triggerOrders") {
        setTriggerOrderModalOpen(newNode);
        return;
      }
      if (nodeValue === "condition") {
        setConditionModalOpen(newNode);
        return;
      }

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
      <ThingFormModal
        onAddNode={() => {
          if (thingModalOpen) {
            setNodes((nds) => nds.concat(thingModalOpen));
          }
        }}
        node={thingModalOpen}
        open={!!thingModalOpen}
        onClose={() => {
          setThingModalOpen(null);
        }}
      />
      <ThirdPartyFormModal
        onAddNode={() => {
          if (thirdPartyModalOpen) {
            setNodes((nds) => nds.concat(thirdPartyModalOpen));
          }
        }}
        node={thirdPartyModalOpen}
        open={!!thirdPartyModalOpen}
        onClose={() => {
          setThirdPartyModalOpen(null);
        }}
      />
      <RefrencesFormModal
        onAddNode={() => {
          if (refrencesModalOpen) {
            setNodes((nds) => nds.concat(refrencesModalOpen));
          }
        }}
        node={refrencesModalOpen}
        open={!!refrencesModalOpen}
        onClose={() => {
          setRefrencesModalOpen(null);
        }}
      />
      <TriggerOrderFormModal
        onAddNode={() => {
          if (triggerOrderModalOpen) {
            setNodes((nds) => nds.concat(triggerOrderModalOpen));
          }
        }}
        node={triggerOrderModalOpen}
        open={
          !!triggerOrderModalOpen || editNode?.nodeName === "Trigger Orders"
        }
        onClose={() => {
          if (editNode) {
            dispatch(removeEditNode());
          } else {
            setTriggerOrderModalOpen(null);
          }
        }}
        edit={editNode?.nodeData}
      />
      <ConditionFormModal
        onAddNode={() => {
          if (conditionModalOpen) {
            setNodes((nds) => nds.concat(conditionModalOpen));
          }
        }}
        node={conditionModalOpen}
        open={!!conditionModalOpen || editNode?.nodeName === "condition"}
        onClose={() => {
          if (editNode) {
            dispatch(removeEditNode());
          } else {
            setConditionModalOpen(null);
          }
        }}
        edit={editNode?.nodeData}
      />
    </>
  );
}
