"use client";

import { IApplet } from "@/types/general";
import { useState } from "react";
import AppletCard from "../AppletCard";
import AppletCreateModal from "../AppletCreateModal";
import AppletEmptyState from "../AppletEmptyState";

interface AppletContentProps {
  applets: IApplet[];
  setApplets: (d: IApplet[]) => void;
  removeApplet: (d: IApplet) => void;
  pinApplet: (d: IApplet) => void;
}

export default function AppletContent({
  applets,
  setApplets,
  removeApplet,
  pinApplet,
}: AppletContentProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  console.log(applets);
  return (
    <>
      {applets.length ? (
        <div className="w-full pt-4 gap-4 flex flex-wrap">
          {applets.map((applet: IApplet) => (
            <AppletCard
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
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={(a: boolean) => setIsCreateModalOpen(a)}
        addApplet={(d: IApplet) => {
          setApplets([...applets, d]);
        }}
      />
    </>
  );
}
