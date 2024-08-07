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

export interface _IThings {
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
  draftWidgets?: ISubWidget[];
}

export interface ISubWidget {
  name: string;
  image: string;
  parent?: string;
  chartData?: IChartData;
  tableData?: IWidgetTableData;
  airQualityData?: IAirQualityData;
  indoorEnvironmentData?: IIndoorEnvironmentData;
  outdoorEnvironmentData?: IOutdoorEnvironmentData;
  guageData?: IGuageData;
  cardData?: ICardData;
  alarmData?: IAlarmData;
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

export interface IWidget {
  name: string;
  image: string;
  onSelect?: (sub: { name: string; image: string }) => void;
  subWidget?: ISubWidget[];
}

export interface IChartFormData {
  title: string;
  thing: string;
  xAxesLabel: string;
  yAxesLabel: string;
  yAxesMin: number;
  yAxesMax: number;
  yAxesUnit: string;
  description?: string;
}

export interface IChartData extends IChartFormData {
  charactristic: string[];
  senderId: string;
}

export interface IAlarmData {
  title: string;
  thing: string;
  charactristic: string;
}

export interface IGuageData {
  title: string;
  thing: string;
  charactristic: string;
  min: number;
  max: number;
  unit: string;
  description?: string;
}

export interface ICardData {
  title: string;
  thing: string;
  value: string;
  unit: string;
  charactristic: string;
  description?: string;
}

export interface IAirQualityData {
  title: string;
  thing: string;
  charactristic: string;
  unit: string;
  description?: string;
}

export interface IIndoorEnvironmentFormData {
  title: string;
  thing: string;
  description?: string;
}

export interface IIndoorEnvironmentData extends IIndoorEnvironmentFormData {
  charactristic: string[];
  senderId: string;
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

// nodes

export interface IConditionNodeInputs {
  title?: string;
  description?: string;
  inputs: string[];
  outputs: string[];
  conditions: { value: string; condition: string }[];
}

export type NodeDataType =
  | {
      value?: string | undefined;
      name?: string | undefined;
      icon?: React.ReactNode;
      count?: undefined;
    }
  | { name: string; value: string; count: string };

export interface ITriggerNodeData {
  value: string;
  name: string;
  icon: React.ReactNode;
}

export interface IVariableNode {
  nodeId: string;
  name: string;
  value: number;
}

export interface ITriggerNode {
  nodeId: string;
  title: string;
  description?: string;
  charactristic?: string;
  dashboard?: string;
  variable?: string;
  variableValue?: string;
}
export interface IConditionNode extends IConditionNodeInputs {
  nodeId: string;
}

export type TriggerNodeType = Node<{
  nodeId: string;
  value: string;
  name: string;
  icon: React.ReactNode;
}>;

export type ConditionNodeType = Node<{
  nodeId: string;
}>;

export type VariableNodeType = Node<{
  value: string;
  name: string;
  count: number;
}>;

export interface IEditNode {
  nodeId?: string;
  title?: string;
  description?: string;
  charactristic?: string;
  dashboard?: string;
  inputs?: string[];
  outputs?: string[];
  conditions?: { value: string; condition: string }[];
  name?: string;
  value?: number;
  variableValue?: string;
  variable?: string;
}

// Response

export interface IResponse {
  statusCode: number;
  message?: string;
  error?: string;
}

// authentication

export interface ILoginResponse extends IResponse {
  expiresOn?: string;
  otpToken?: string;
}

export interface IOtpResponse extends IResponse {
  accessToken?: string;
  expiresOn?: string;
}

//things

export interface IThing {
  actions: string[];
  activition: string;
  brand: string;
  characteristics: string[];
  description: string;
  id: string;
  images: { fieldId: string; isCover: boolean }[];
  model: string;
  name: string;
  type: string;
  senderId: string;
}

export interface ICharactristic {
  name: string;
  sender_id: string;
}

export interface IThingsResponse extends IResponse {
  list?: IThing[];
}
