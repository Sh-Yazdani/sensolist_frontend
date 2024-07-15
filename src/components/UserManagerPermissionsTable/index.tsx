"use client";

import { IUser } from "@/types/general";
import { createTheme, ThemeProvider } from "@mui/material";
import { ProfileDelete, UserAdd, UserEdit } from "iconsax-react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import UserManagerAddUserForm from "../UserManagerAddUserForm";
import UserManagerEditPermissions from "../UserManagerEditPemissions";

interface UserManagerTableProps {
  tableData: IUser[];
}

export default function UserManagerPermissionsTable({
  tableData,
}: UserManagerTableProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [data, setData] = useState<IUser[]>(tableData);
  const [userEdit, setUserEdit] = useState<IUser | null>(null);
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false);

  const { resolvedTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: resolvedTheme === "dark" ? "dark" : "light",
    },
  });

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

    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        className="w-[180px] whitespace-nowrap"
        onClick={() => {
          setAddUserOpen(true);
        }}
      >
        <UserAdd className="mr-2" />
        Create new user
      </Button>
    ),
    renderRowActions: ({ row }) => {
      console.log(row);
      return (
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setUserEdit(row.original);
            }}
          >
            <UserEdit />
          </button>
          <button
            onClick={() => {
              setData((prev) =>
                prev.filter((item) => item.id !== row.original.id)
              );
            }}
          >
            <ProfileDelete />
          </button>
        </div>
      );
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <div className="w-[112px] h-[40px]"></div>;
  }
  return (
    <>
      <div className=" p-8">
        <ThemeProvider theme={darkTheme}>
          <MaterialReactTable table={table} />
        </ThemeProvider>
      </div>
      <Modal
        large
        open={userEdit ? true : false}
        onClose={() => {
          setUserEdit(null);
        }}
      >
        {userEdit && <UserManagerEditPermissions user={userEdit} />}
      </Modal>
      <Modal
        open={addUserOpen}
        onClose={() => {
          setAddUserOpen(false);
        }}
      >
        <UserManagerAddUserForm
          closeModal={() => {
            setAddUserOpen(false);
          }}
          addUser={(firstName: string, lastName: string, role: string) => {
            setData((prev) => [
              ...prev,
              {
                id: firstName + lastName,
                firstName: firstName,
                lastName: lastName,
                role: role,
              },
            ]);
          }}
        />
      </Modal>
    </>
  );
}
