import { IPermission, IUser } from "@/types/general";
import { Checkbox, Table } from "flowbite-react";
import Select from "../UI/Select";

export default function UserManagerEditPermissions({ user }: { user: IUser }) {
  const permissions: IPermission[] = [
    {
      name: "projects",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "daily reports",
      view: false,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "equipment damage reports",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "employee accident reports",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "employees",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "equipments",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "materials",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "project gallery",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
  ];
  return (
    <div className="overflow-x-auto">
      <div className="mb-4">
        {user.firstName} {user.lastName} Permissions
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Entity</Table.HeadCell>
          <Table.HeadCell>View</Table.HeadCell>
          <Table.HeadCell>Add</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>Column READ blacklist</Table.HeadCell>
          <Table.HeadCell>Column WRITE blacklist</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {permissions.map((permission) => (
            <Table.Row key={permission.name}>
              <Table.Cell className=" capitalize">{permission.name}</Table.Cell>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>
                <Checkbox />
              </Table.Cell>
              <Table.Cell>
                <Select
                  options={[
                    {
                      value: "1",
                      title: "Option 1",
                    },
                    {
                      value: "2",
                      title: "Option 2",
                    },
                  ]}
                />
              </Table.Cell>
              <Table.Cell>
                <Select
                  options={[
                    {
                      value: "1",
                      title: "Option 1",
                    },
                    {
                      value: "2",
                      title: "Option 2",
                    },
                  ]}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
