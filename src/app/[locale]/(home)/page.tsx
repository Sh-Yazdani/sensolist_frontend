import HomePinnedAppletes from "@/components/HomePinnedApplets";
import HomePinnedDashboardes from "@/components/HomePinnedDashboards";
import { IDashboard } from "@/types/general";

export default function Home() {
  const pinnedDashboards: IDashboard[] = [
    {
      id: 0,
      name: "Dashboard's name",
      description: "Dashboard's description",
      pin: true,
      image: "/assets/dashboard/img-1.png",
    },
    {
      id: 0,
      name: "Dashboard's name",
      description: "Dashboard's description",
      pin: true,
      image: "/assets/dashboard/img-2.png",
    },
    {
      id: 0,
      name: "Dashboard's name",
      description: "Dashboard's description",
      pin: true,
      image: "/assets/dashboard/img-3.png",
    },
    {
      id: 0,
      name: "Dashboard's name",
      description: "Dashboard's description",
      pin: true,
      image: "/assets/dashboard/img-4.png",
    },
  ];
  return (
    <main className="flex flex-col py-6 px-4 md:flex-row gap-4 lg:gap-10 flex-1 md:mt-[100px] lg:mt-[120px]">
      <HomePinnedAppletes />
      <HomePinnedDashboardes />
    </main>
  );
}
