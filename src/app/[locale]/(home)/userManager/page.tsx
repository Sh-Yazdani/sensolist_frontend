import UserManagerContainer from "@/components/UserManagerContainer";
import { IRole, IUser } from "@/types/general";

const permissionsTableData: IUser[] = [
  {
    id: "hjpo32a",
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
  },
  {
    id: "hjpo32b",
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
  },
  {
    id: "hjpo32c",
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
  },
  {
    id: "hjpo32d",
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
  },
  {
    id: "hjpo32e",
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
  },
  {
    id: "hjpo32f",
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
  },
  {
    id: "hjpo32g",
    firstName: "John",
    lastName: "Doe",
    role: "Administrator",
  },
];

const rolesTableData: IRole[] = [
  {
    name: "developer",
    description: "same random description for developer role",
  },
  {
    name: "administrator",
    description: "same random description for administrator role",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col bg-primary-Shade-2 h-fit m-4 md:m-8 p-2 md:p-8">
      <UserManagerContainer
        rolesTableData={rolesTableData}
        permissionsTableData={permissionsTableData}
      />
    </div>
  );
}
