import { TriggerNodeType } from "@/types/general";
import { NodeProps } from "@xyflow/react";

export default function FlowTriggerNode(props: NodeProps<TriggerNodeType>) {
  console.log("node data", props);

  return <div>test node</div>;
}
