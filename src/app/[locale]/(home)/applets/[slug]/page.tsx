"use client";

import FlowContent from "@/components/FlowContent";
import FlowSidebar from "@/components/FlowSidebar";
import { ReactFlowProvider } from "@xyflow/react";

export default function page() {
  return (
    <div className=" flex flex-row mt-8 md:mt-[100px] lg:mt-[120px] flex-1 pl-8">
      <ReactFlowProvider>
        <FlowSidebar />
        <FlowContent />
      </ReactFlowProvider>
    </div>
  );
}
