import { IRole } from "@/types/general";
import { createTheme, ThemeProvider } from "@mui/material";
import { Edit2 } from "iconsax-react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

interface UserManagerRolesTableProps {
  tableData: IRole[];
}

export default function UserManagerRolesTable({
  tableData,
}: UserManagerRolesTableProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [data, setData] = useState<IRole[]>(tableData);
  //   const [userEdit, setUserEdit] = useState<IUser | null>(null);

  const { resolvedTheme } = useTheme();

  const darkTheme = createTheme({
    palette: {
      mode: resolvedTheme === "dark" ? "dark" : "light",
    },
  });

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
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <div className="w-[112px] h-[40px]"></div>;
  }
  return (
    <div className="p-8">
      <ThemeProvider theme={darkTheme}>
        <MaterialReactTable table={table} />
      </ThemeProvider>
    </div>
  );
}
