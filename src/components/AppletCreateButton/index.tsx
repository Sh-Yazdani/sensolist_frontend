"use client";

import { IApplet } from "@/types/general";
import { Add, AddSquare } from "iconsax-react";
import { useState } from "react";
import AppletCreateModal from "../AppletCreateModal";
import Button from "../UI/Button";

interface AppletCreateButtonProps {
  applets: IApplet[];
  setApplets: (d: IApplet[]) => void;
}

export default function AppletCreateButton({
  applets,
  setApplets,
}: AppletCreateButtonProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  if (!applets.length) return;
  return (
    <>
      <Button
        onClick={() => {
          setIsCreateModalOpen(true);
        }}
        className="w-10 h-10 md:w-fit ml-auto px-5"
      >
        <span className="flex md:hidden">
          <Add />
        </span>
        <div className="hidden md:flex items-center">
          <AddSquare className=" text-white mr-2" />
          <span className=" capitalize">Create Applet</span>
        </div>
      </Button>
      <AppletCreateModal
        applets={applets}
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={(a: boolean) => setIsCreateModalOpen(a)}
        addApplet={(d: IApplet) => {
          setApplets([...applets, d]);
        }}
      />
    </>
  );
}
