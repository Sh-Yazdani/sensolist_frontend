"use client";

import FlowContent from "@/components/FlowContent";
import { ReactFlowProvider } from "@xyflow/react";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className=" flex flex-row flex-1">
      <ReactFlowProvider>
        <FlowContent appletId={params.slug} />
      </ReactFlowProvider>
    </div>
  );
}
