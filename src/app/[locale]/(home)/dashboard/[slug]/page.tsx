import DashboardWidgets from "@/components/DashboardWidgets";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className=" flex flex-col flex-1 md:px-4">
      <DashboardWidgets dashboardId={Number(params.slug)} />
    </div>
  );
}
