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
