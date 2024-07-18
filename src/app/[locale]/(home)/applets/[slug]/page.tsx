"use client";

import FlowContent from "@/components/FlowContent";
import FlowSidebar from "@/components/FlowSidebar";
import { ReactFlowProvider } from "@xyflow/react";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className=" flex flex-row flex-1">
      <ReactFlowProvider>
        <FlowSidebar />
        <FlowContent appletId={Number(params.slug)} />
      </ReactFlowProvider>
    </div>
  );
}
