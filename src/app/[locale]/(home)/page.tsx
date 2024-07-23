import HomeMyThings from "@/components/HomeMythings";
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
    <main className="flex flex-1">
      <div className="flex flex-col px-4 gap-4 flex-1 max-w-[1000px] mx-auto w-full">
        <HomeMyThings />
        <HomePinnedAppletes />
        <HomePinnedDashboardes />
      </div>
    </main>
  );
}
