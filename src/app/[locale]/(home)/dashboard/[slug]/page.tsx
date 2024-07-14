import DashboardWidgets from "@/components/DashboardWidgets";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className=" flex flex-col md:mt-[100px] flex-1 px-4">
      <DashboardWidgets dashboardId={Number(params.slug)} />
    </div>
  );
}
