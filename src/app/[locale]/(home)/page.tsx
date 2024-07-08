import HomePinnedAppletes from "@/components/HomePinnedApplets";
import HomePinnedDashboardes from "@/components/HomePinnedDashboards";
import { IApplet, IDashboard } from "@/types/general";

export default function Home() {
  const pinnedApplets: IApplet[] = [
    {
      name: "applet's name",
      description: "Applets's description",
      pin: true,
      image: "/assets/dashboard/img-5.png",
    },
    {
      name: "applet's name",
      description: "Applets's description",
      pin: true,
      image: "/assets/dashboard/img-6.png",
    },
    {
      name: "applet's name",
      description: "Applets's description",
      pin: true,
      image: "/assets/dashboard/img-1.png",
    },
    {
      name: "applet's name",
      description: "Applets's description",
      pin: true,
      image: "/assets/dashboard/img-2.png",
    },
  ];
  const pinnedDashboards: IDashboard[] = [
    {
      name: "Dashboard's name",
      description: "Dashboard's description",
      pin: true,
      image: "/assets/dashboard/img-1.png",
    },
    {
      name: "Dashboard's name",
      description: "Dashboard's description",
      pin: true,
      image: "/assets/dashboard/img-2.png",
    },
    {
      name: "Dashboard's name",
      description: "Dashboard's description",
      pin: true,
      image: "/assets/dashboard/img-3.png",
    },
    {
      name: "Dashboard's name",
      description: "Dashboard's description",
      pin: true,
      image: "/assets/dashboard/img-4.png",
    },
  ];
  return (
    <main className="flex flex-col py-6 px-4 md:flex-row md:gap-4 lg:gap-10">
      <HomePinnedAppletes appletes={pinnedApplets} />
      <HomePinnedDashboardes dashboards={pinnedDashboards} />
    </main>
  );
}
