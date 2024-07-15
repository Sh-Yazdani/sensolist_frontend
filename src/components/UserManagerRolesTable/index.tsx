import { IRole } from "@/types/general";
import { createTheme, ThemeProvider } from "@mui/material";
import { Edit2 } from "iconsax-react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import UserManagerAddRoleForm from "../UserManagerAddRoleForm";

interface UserManagerRolesTableProps {
  tableData: IRole[];
}

export default function UserManagerRolesTable({
  tableData,
}: UserManagerRolesTableProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [data, setData] = useState<IRole[]>(tableData);
  const [addRoleOpen, setAddRoleOpen] = useState<boolean>(false);

  const { resolvedTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: resolvedTheme === "dark" ? "dark" : "light",
    },
  });

  const handleOnEditRow: MRT_TableOptions<IRole>["onEditingRowSave"] = (
    vals
  ) => {
    console.log("values", vals);
    setData((prev) => [
      ...prev.filter((item) => item.name !== vals.row.original.name),
      vals.values,
    ]);
    vals.table.setEditingRow(null);
  };

  const columns = useMemo<MRT_ColumnDef<IRole>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowActions: true,
    positionActionsColumn: "last",
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        className="w-[80px]"
        onClick={() => {
          setAddRoleOpen(true);
        }}
      >
        add role
      </Button>
    ),
    renderRowActions: ({ row }) => {
      return (
        <button
          onClick={() => {
            table.setEditingRow(row);
          }}
        >
          <Edit2 />
        </button>
      );
    },

    onEditingRowSave: handleOnEditRow,
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <div className="w-[112px] h-[40px]"></div>;
  }
  return (
    <>
      <div className="p-8">
        <ThemeProvider theme={darkTheme}>
          <MaterialReactTable table={table} />
        </ThemeProvider>
      </div>
      <Modal
        open={addRoleOpen}
        onClose={() => {
          setAddRoleOpen(false);
        }}
      >
        <UserManagerAddRoleForm
          closeModal={() => {
            setAddRoleOpen(false);
          }}
          addRole={(name: string, description: string) => {
            setData((prev) => [
              ...prev,
              {
                name: name,
                description: description,
              },
            ]);
          }}
        />
      </Modal>
    </>
  );
}
