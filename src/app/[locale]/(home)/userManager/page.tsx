import UserManagerTable from "@/components/UserManagerTable";
import { IUser } from "@/types/general";

const tableData: IUser[] = [
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

export default function Page() {
  return (
    <div className="flex flex-col flex-1 md:mt-[100px] lg:mt-[120px]">
      <UserManagerTable tableData={tableData} />
    </div>
  );
}
