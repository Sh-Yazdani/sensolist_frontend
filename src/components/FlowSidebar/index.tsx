"use client";

import { Accordion } from "flowbite-react";
import {
  Book,
  BoxTime,
  Calendar,
  Call,
  Colorfilter,
  DeviceMessage,
  Devices,
  Link,
  LogoutCurve,
  MainComponent,
  Math,
  Message,
  Message2,
  Messenger,
  Notification,
  ShoppingCart,
} from "iconsax-react";

const triggerNodes = [
  {
    name: "Thing",
    value: "thing",
    icon: <Devices />,
  },
  {
    name: "Third Party",
    value: "thirdParty",
    icon: <Messenger />,
  },
  {
    name: "Scheduler",
    value: "scheduler",
    icon: <Calendar />,
  },
  {
    name: "Trigger Orders",
    value: "triggerOrders",
    icon: <ShoppingCart />,
  },
  {
    name: "Refrences",
    value: "refrences",
    icon: <Book />,
  },
];

const actionNodes = [
  {
    name: "Action Devices",
    value: "actionDevices",
    icon: <Devices />,
  },
  {
    name: "Virtual Devices",
    value: "virtualDevices",
    icon: <MainComponent />,
  },
  {
    name: "Email",
    value: "email",
    icon: <DeviceMessage />,
  },
  {
    name: "Set Variables",
    value: "setVariables",
    icon: <Math />,
  },
  {
    name: "SMS",
    value: "sms",
    icon: <Message />,
  },
  {
    name: "Call",
    value: "call",
    icon: <Call />,
  },
  {
    name: "Notification",
    value: "notification",
    icon: <Notification />,
  },
  {
    name: "Telegram",
    value: "telegram",
    icon: <Message2 />,
  },
];

const controlNodes = [
  {
    name: "Time Filter",
    value: "timeFilter",
    icon: <BoxTime />,
  },
  {
    name: "Condition",
    value: "condition",
    icon: <Colorfilter />,
  },
  {
    name: "Thing History",
    value: "thingHistory",
    icon: <Calendar />,
  },
  {
    name: "Exit Form Workflow",
    value: "exit",
    icon: <LogoutCurve />,
  },
  {
    name: "Link to another workflow",
    value: "link",
    icon: <Link />,
  },
  {
    name: "Get Variables",
    value: "variables",
    icon: <Math />,
  },
];

export default function FlowSidebar() {
  const onDragStart = (
    event: {
      dataTransfer: {
        setData: (arg0: string, arg1: any) => void;
        effectAllowed: string;
      };
    },
    nodeType: any
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="flex flex-col w-[280px] h-auto">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>Triggers</Accordion.Title>
          <Accordion.Content>
            {triggerNodes.map((item, i) => (
              <div
                key={item.value}
                className={`${
                  i !== 0 && "mt-4"
                } border border-neutral-6 px-4 py-2 rounded-lg flex items-center`}
                onDragStart={(event) => onDragStart(event, "default")}
                draggable
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </div>
            ))}
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Actions</Accordion.Title>
          <Accordion.Content>
            {actionNodes.map((item, i) => (
              <div
                key={item.value}
                className={`${
                  i !== 0 && "mt-4"
                } border border-neutral-6 px-4 py-2 rounded-lg flex items-center`}
                onDragStart={(event) => onDragStart(event, "default")}
                draggable
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </div>
            ))}
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Flow Controls</Accordion.Title>
          <Accordion.Content>
            {controlNodes.map((item, i) => (
              <div
                key={item.value}
                className={`${
                  i !== 0 && "mt-4"
                } border border-neutral-6 px-4 py-2 rounded-lg flex items-center`}
                onDragStart={(event) => onDragStart(event, "default")}
                draggable
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </div>
            ))}
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
