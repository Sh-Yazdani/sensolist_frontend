"use client";

import { IRole, IUser } from "@/types/general";
import { useState } from "react";
import Tabs from "../UI/Tabs";
import UserManagerPermissionsTable from "../UserManagerPermissionsTable";
import UserManagerRolesTable from "../UserManagerRolesTable";

interface UserManagerContainerProps {
  permissionsTableData: IUser[];
  rolesTableData: IRole[];
}

export default function UserManagerContainer({
  permissionsTableData,
  rolesTableData,
}: UserManagerContainerProps) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <>
      <Tabs
        className="mt-8 md:mt-2"
        items={["roles", "permissions"]}
        currentIndex={currentTabIndex}
        onTabChange={(i: number) => {
          setCurrentTabIndex(i);
        }}
      />
      {currentTabIndex === 0 ? (
        <UserManagerRolesTable tableData={rolesTableData} />
      ) : (
        <UserManagerPermissionsTable tableData={permissionsTableData} />
      )}
    </>
  );
}
