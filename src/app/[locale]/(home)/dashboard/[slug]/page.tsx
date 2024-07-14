import DashboardHeader from "@/components/DashboardHeader";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className=" flex flex-col md:mt-[100px] flex-1 px-4">
      <DashboardHeader dashboardId={Number(params.slug)} />
      {params.slug}
    </div>
  );
}
