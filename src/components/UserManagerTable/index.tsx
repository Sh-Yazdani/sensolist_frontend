"use client";

import { IUser } from "@/types/general";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";

interface UserManagerTableProps {
  tableData: IUser[];
}

// const data: IUser[] = [];

export default function UserManagerTable({ tableData }: UserManagerTableProps) {
  const [data, setData] = useState<IUser[]>(tableData);
  const columns = useMemo<MRT_ColumnDef<IUser>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });
  return (
    <div className=" p-8">
      <MaterialReactTable table={table} />
    </div>
  );
}
