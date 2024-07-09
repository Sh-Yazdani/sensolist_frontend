"use client";

import AppletContent from "@/components/AppletContent";
import AppletCreateButton from "@/components/AppletCreateButton";
import SearchBar from "@/components/SearchBar";
import SortBy from "@/components/SortBy";
import {
  pinApplet as pinAppletAction,
  removeApplet,
  unPinApplet as unPinAppletAction,
} from "@/lib/features/applet/appletSlice";
import { RootState } from "@/lib/store";
import { IApplet } from "@/types/general";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const { applets } = useSelector((state: RootState) => state.appletSlice);
  const dispatch = useDispatch();
  const removeFromApplets = (applet: IApplet) => {
    dispatch(removeApplet(applet));
  };

  const pinApplet = (applet: IApplet) => {
    dispatch(pinAppletAction(applet));
  };

  const unPinApplet = (applet: IApplet) => {
    dispatch(unPinAppletAction(applet));
  };
  return (
    <div className=" flex flex-col pt-20 md:pt-0 md:pr-4 px-4 md:mt-[100px] lg:mt-[120px]">
      <div className="md:relative flex flex-row-reverse justify-end">
        <AppletCreateButton applets={applets} />
        <SearchBar />
        <SortBy />
      </div>
      <AppletContent
        unPinApplet={unPinApplet}
        pinApplet={pinApplet}
        removeApplet={removeFromApplets}
        applets={applets}
      />
    </div>
  );
}
