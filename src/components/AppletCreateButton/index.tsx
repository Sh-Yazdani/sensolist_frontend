"use client";

import { addApplet } from "@/lib/features/applet/appletSlice";
import { IApplet } from "@/types/general";
import { Add, AddSquare } from "iconsax-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AppletCreateModal from "../AppletCreateModal";
import Button from "../UI/Button";

interface AppletCreateButtonProps {
  applets: IApplet[];
}

export default function AppletCreateButton({
  applets,
}: AppletCreateButtonProps) {
  const dispatch = useDispatch();
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
          dispatch(addApplet(d));
        }}
        closeEditModal={() => {}}
        editApplet={() => {}}
        appletEdit={null}
      />
    </>
  );
}
