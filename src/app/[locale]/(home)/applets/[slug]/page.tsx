"use client";

import FlowContent from "@/components/FlowContent";
import FlowSidebar from "@/components/FlowSidebar";
import { ReactFlowProvider } from "@xyflow/react";

export default function page() {
  return (
    <div className=" flex flex-row">
      <ReactFlowProvider>
        <FlowSidebar />
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}
