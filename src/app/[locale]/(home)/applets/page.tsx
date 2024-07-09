"use client";

import AppletContent from "@/components/AppletContent";
import AppletCreateButton from "@/components/AppletCreateButton";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import { RootState } from "@/lib/store";
import { IApplet } from "@/types/general";
import { useSelector } from "react-redux";

export default function Page() {
  const { applets } = useSelector((state: RootState) => state.appletSlice);
  const removeFromApplets = (applet: IApplet) => {
    // setApplets((prev) => prev.filter((app) => app.id !== applet.id));
  };

  const pinApplet = (applet: IApplet) => {
    // setApplets((prev) => [
    //   ...prev.filter((app) => app.id !== applet.id),
    //   { ...applet, pin: true },
    // ]);
  };

  return (
    <div className=" flex flex-col pt-20 md:pt-0 md:pr-4 px-4">
      <div className="md:relative flex flex-row-reverse justify-end">
        <AppletCreateButton applets={applets} />
        <SearchBar />
        <SortBy />
      </div>
      <AppletContent
        pinApplet={pinApplet}
        removeApplet={removeFromApplets}
        applets={applets}
      />
    </div>
  );
}
