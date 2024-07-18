import { ITriggerNode } from "@/types/general";
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

export const triggerNodes: ITriggerNode[] = [
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

export const actionNodes: ITriggerNode[] = [
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

export const controlNodes: ITriggerNode[] = [
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

export const thingNodes: ITriggerNode[] = [
  {
    name: "Thing 1",
    value: "thing1",
    icon: <Devices />,
  },
  {
    name: "Thing 2",
    value: "thing2",
    icon: <Devices />,
  },
  {
    name: "Thing 3",
    value: "thing3",
    icon: <Devices />,
  },
];

//after seperating nodes this must be change
export const getNodeByValue = (val: string) => {
  const array = [
    ...triggerNodes,
    ...actionNodes,
    ...controlNodes,
    ...thingNodes,
    {
      name: "Variable",
      value: "variable",
      icon: <></>,
    },
  ];
  const filtered = array.filter((item) => item.value === val);
  return filtered.length ? filtered[0] : null;
};
