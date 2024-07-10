"use client";

import { IUser } from "@/types/general";
import { UserEdit } from "iconsax-react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import Modal from "../UI/Modal";

interface UserManagerTableProps {
  tableData: IUser[];
}

// const data: IUser[] = [];

export default function UserManagerTable({ tableData }: UserManagerTableProps) {
  const [data, setData] = useState<IUser[]>(tableData);
  const [userEdit, setUserEdit] = useState<IUser | null>(null);
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
    enableRowPinning: true,
    enableRowActions: true,
    positionActionsColumn: "last",
    renderRowActions: ({ row }) => {
      console.log(row);
      return (
        <button
          onClick={() => {
            setUserEdit(row.original);
          }}
        >
          <UserEdit />
        </button>
      );
    },
  });
  return (
    <>
      <div className=" p-8">
        <MaterialReactTable table={table} />
      </div>
      <Modal
        large
        open={userEdit ? true : false}
        onClose={() => {
          setUserEdit(null);
        }}
      >
        test
      </Modal>
    </>
  );
}
