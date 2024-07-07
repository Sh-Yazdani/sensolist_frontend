"use client";

import AppletContent from "@/components/AppletContent";
import AppletCreateButton from "@/components/AppletCreateButton";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import { IApplet } from "@/types/general";
import { useState } from "react";

export default function Page() {
  const [applets, setApplets] = useState<IApplet[]>([]);

  const removeFromApplets = (applet: IApplet) => {
    setApplets((prev) => [...prev.filter((app) => app.name !== applet.name)]);
  };

  const pinApplet = (applet: IApplet) => {
    setApplets((prev) => [
      ...prev.filter((app) => app.name !== applet.name),
      { ...applet, pin: true },
    ]);
  };

  return (
    <div className=" flex flex-col pt-20 md:pt-0 md:pr-4 px-4">
      <div className="md:relative flex flex-row-reverse justify-end">
        <AppletCreateButton setApplets={setApplets} applets={applets} />
        <SearchBar />
        <SortBy />
      </div>
      <AppletContent
        pinApplet={pinApplet}
        removeApplet={removeFromApplets}
        setApplets={setApplets}
        applets={applets}
      />
    </div>
  );
}
