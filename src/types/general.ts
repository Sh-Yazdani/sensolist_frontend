import { Node } from "@xyflow/react";

export type LoginStepsType = "details" | "verification";

export type ChangePasswordStepsType =
  | "phoneNumber"
  | "verification"
  | "setPassword";

export type ForgetPasswordStepsType = "phoneNumber" | "verification" | "reset";

export interface LoginInputs {
  phoneNumber: string;
  password: string;
}

export interface ResetPasswordInputs {
  confirmPassword: string;
  password: string;
}

export interface INotificationAlert {
  message: string;
  type: "success" | "warning" | "error";
}

export interface IThings {
  id: string;
  name: string;
  model: string;
  type: string;
  images: string[];
  brand: string;
  actions: string;
  charactristics: string;
  activationDate: string;
  description: string;
}

export interface IDashboard {
  id: number;
  name: string;
  description: string;
  image?: string;
  pin?: boolean;
  widgets?: ISubWidget[];
}

export interface ISubWidget {
  name: string;
  image: string;
  chartData?: IChartData;
  tableData?: IWidgetTableData;
  airQualityData?: IAirQualityData;
  indoorEnvironmentData?: IIndoorEnvironmentData;
  outdoorEnvironmentData?: IOutdoorEnvironmentData;
}

export interface ICreateDashboardInputs {
  name: string;
  description: string;
  image: string;
}

export interface IApplet {
  id: number;
  name: string;
  description: string;
  image?: string;
  pin?: boolean;
}

export interface ICreateAppletInputs {
  name: string;
  description: string;
  image: string;
}

export interface IProfileMenuItem {
  name: string;
  title: string;
  link: string;
  icon: React.ReactNode;
}

export interface INotification {
  content: string;
  date: string;
  new: boolean;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  pin?: boolean;
}

export interface ISelectOption {
  title: string;
  value: string;
}

export interface IPermission {
  name: string;
  view: boolean;
  add: boolean;
  edit: boolean;
  delete: boolean;
}

export interface IRole {
  name: string;
  description: string;
}

export interface ITriggerNode {
  value: string;
  name: string;
  icon: React.ReactNode;
}

export type TriggerNodeType = Node<{
  value: string;
  name: string;
  icon: React.ReactNode;
}>;
export type ConditionNodeType = Node<{
  index: number;
}>;

export type VariableNodeType = Node<{
  value: string;
  name: string;
  count: number;
}>;

export interface IWidget {
  name: string;
  image: string;
  onSelect?: (sub: { name: string; image: string }) => void;
  subWidget?: ISubWidget[];
}

export interface ISubWidget {
  name: string;
  image: string;
}

export type NodeDataType =
  | {
      value?: string | undefined;
      name?: string | undefined;
      icon?: React.ReactNode;
      count?: undefined;
    }
  | { name: string; value: string; count: string };

export interface IChartData {
  title: string;
  thing: string;
  charactristic: string;
  xAxesLabel: string;
  yAxesLabel: string;
  yAxesMin: number;
  yAxesMax: number;
  yAxesUnit: string;
  description?: string;
}

export interface IAirQualityData {
  title: string;
  thing: string;
  charactristic: string;
  unit: string;
  description?: string;
}

export interface IIndoorEnvironmentData {
  title: string;
  thing: string;
  charactristic: string;
  description?: string;
}

export interface IOutdoorEnvironmentData {
  title: string;
  thing: string;
  charactristic: string;
  description?: string;
}

export interface IWidgetTableData {
  title: string;
  thing: string;
  charactristic: string;
  description?: string;
  columns: { key: string; name: string }[];
}

export interface ICondition {
  condition: string;
  value: string;
  output: string;
}

export interface IConditionNodeInputs {
  title: string;
  description: string;
  inputs: string[];
  outputs: string[];
  conditions: { value: string; condition: string }[];
}
