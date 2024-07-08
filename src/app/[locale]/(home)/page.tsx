import HomePinnedAppletes from "@/components/HomePinnedApplets";
import { IApplet } from "@/types/general";

export default function Home() {
  const pinnedApplets: IApplet[] = [
    {
      name: "applet's name",
      description: "Applets's description",
      pin: true,
      image: "/assets/thing.jpeg",
    },
    {
      name: "applet's name",
      description: "Applets's description",
      pin: true,
      image: "/assets/thing.jpeg",
    },
    {
      name: "applet's name",
      description: "Applets's description",
      pin: true,
      image: "/assets/thing.jpeg",
    },
    {
      name: "applet's name",
      description: "Applets's description",
      pin: true,
      image: "/assets/thing.jpeg",
    },
  ];
  return (
    <main className="flex flex-col py-6 px-4">
      <HomePinnedAppletes appletes={pinnedApplets} />
    </main>
  );
}
