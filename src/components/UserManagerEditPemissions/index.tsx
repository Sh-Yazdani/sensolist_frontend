import { IPermission, IUser } from "@/types/general";
import { Checkbox, Table } from "flowbite-react";

export default function UserManagerEditPermissions({ user }: { user: IUser }) {
  const thingsPermissions: IPermission[] = [
    {
      name: "thing 1",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "thing 2",
      view: false,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "thing 3",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
  ];
  const appletsPermissions: IPermission[] = [
    {
      name: "applet 1",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "applet 2",
      view: false,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "applet 3",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
  ];
  const dashboardsPermissions: IPermission[] = [
    {
      name: "dashboard 1",
      view: true,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "dashboard 2",
      view: false,
      add: false,
      edit: true,
      delete: true,
    },
    {
      name: "dashboard 3",
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
          <Table.HeadCell className="w-[280px]">things</Table.HeadCell>
          <Table.HeadCell>View</Table.HeadCell>
          <Table.HeadCell>Add</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {thingsPermissions.map((permission) => (
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Table>
        <Table.Head>
          <Table.HeadCell className="w-[280px]">applets</Table.HeadCell>
          <Table.HeadCell>View</Table.HeadCell>
          <Table.HeadCell>Add</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {appletsPermissions.map((permission) => (
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Table>
        <Table.Head>
          <Table.HeadCell className="w-[280px]">dashboards</Table.HeadCell>
          <Table.HeadCell>View</Table.HeadCell>
          <Table.HeadCell>Add</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {dashboardsPermissions.map((permission) => (
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
