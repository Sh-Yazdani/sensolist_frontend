"use client";

import { addApplet } from "@/lib/features/applet/appletSlice";
import { IApplet } from "@/types/general";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AppletCard from "../AppletCard";
import AppletCreateModal from "../AppletCreateModal";
import AppletEmptyState from "../AppletEmptyState";

interface AppletContentProps {
  applets: IApplet[];
  removeApplet: (d: IApplet) => void;
  pinApplet: (d: IApplet) => void;
  unPinApplet: (d: IApplet) => void;
}

export default function AppletContent({
  applets,
  removeApplet,
  pinApplet,
  unPinApplet,
}: AppletContentProps) {
  const dispatch = useDispatch();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  console.log(applets);
  return (
    <>
      {applets.length ? (
        <div className="w-full pt-4 gap-4 flex flex-wrap">
          {applets.map((applet: IApplet) => (
            <AppletCard
              unPinApplet={unPinApplet}
              pinApplet={pinApplet}
              removeApplet={removeApplet}
              key={applet.name}
              applet={applet}
            />
          ))}
        </div>
      ) : (
        <AppletEmptyState
          setCreateOpen={() => {
            setIsCreateModalOpen(true);
          }}
        />
      )}
      <AppletCreateModal
        applets={applets}
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={(a: boolean) => setIsCreateModalOpen(a)}
        addApplet={(d: IApplet) => {
          dispatch(addApplet(d));
        }}
      />
    </>
  );
}
