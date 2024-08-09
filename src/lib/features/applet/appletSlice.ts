import {
  IApplet,
  IConditionNode,
  IEditNode,
  ITestNode,
  ITriggerNode,
  IVariableNode,
} from "@/types/general";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppletState {
  applets: IApplet[];
  pinnedApplets: IApplet[];
  conditionNodes?: IConditionNode[];
  triggerNodes?: ITriggerNode[];
  variableNodes?: IVariableNode[];
  testNodes?: ITestNode[];
  editNode?: { nodeData: IEditNode; nodeName: string };
}

const initialState: AppletState = {
  applets: [
    {
      id: "66b602db33c99f2150bcdb05",
      name: "Indoor air quality",
      description: "Substantia approbo thesis vinco",
      image: "/assets/applet/img-1.png",
      pin: true,
    },
    {
      id: "66b602db33c99f2150bcdb04",
      name: "Outdoor air quality",
      description: "Aestas ademptio audentia.",
      image: "/assets/applet/img-2.png",
      pin: true,
    },
    {
      id: "66b602db33c99f2150bcdb06",
      name: "Industrial indoor AQ",
      description: "Thema utpote creptio temporibus.",
      image: "/assets/applet/img-3.png",
      pin: true,
    },
  ],
  pinnedApplets: [
    {
      id: "66b602db33c99f2150bcdb05",
      name: "Indoor air quality",
      description: "Substantia approbo thesis vinco",
      image: "/assets/applet/img-1.png",
      pin: true,
    },
    {
      id: "66b602db33c99f2150bcdb04",
      name: "Outdoor air quality",
      description: "Aestas ademptio audentia.",
      image: "/assets/applet/img-2.png",
      pin: true,
    },
    {
      id: "66b602db33c99f2150bcdb06",
      name: "Industrial indoor AQ",
      description: "Thema utpote creptio temporibus.",
      image: "/assets/applet/img-3.png",
      pin: true,
    },
  ],
};

export const appletSlice = createSlice({
  name: "applet",
  initialState,
  reducers: {
    addApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets.push(action.payload);
    },
    removeApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = state.applets.filter(
        (dash) => dash.id !== action.payload.id
      );
    },
    editApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = [
        ...state.applets.filter((app) => app.id !== action.payload.id),
        action.payload,
      ];
    },
    pinApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = [
        ...state.applets.filter((app) => app.id !== action.payload.id),
        { ...action.payload, pin: true },
      ];
      state.pinnedApplets = [
        ...state.pinnedApplets,
        { ...action.payload, pin: true },
      ];
    },
    unPinApplet: (state, action: PayloadAction<IApplet>) => {
      state.applets = [
        ...state.applets.filter((app) => app.id !== action.payload.id),
        {
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          image: action.payload.image,
        },
      ];
      state.pinnedApplets = state.pinnedApplets.filter(
        (app) => app.id !== action.payload.id
      );
    },
    addConditionNode: (state, action: PayloadAction<IConditionNode>) => {
      state.conditionNodes = state.conditionNodes?.length
        ? [...state.conditionNodes, action.payload]
        : [action.payload];
    },
    addEditNode: (
      state,
      action: PayloadAction<{
        nodeData: IEditNode;
        nodeName: string;
      }>
    ) => {
      state.editNode = action.payload;
    },
    removeEditNode: (state) => {
      delete state.editNode;
    },
    editNode: (
      state,
      action: PayloadAction<{ nodeName: string; newNode: IEditNode }>
    ) => {
      if (action.payload.nodeName === "condition") {
        if (state.conditionNodes)
          state.conditionNodes = state.conditionNodes.map((cdt) =>
            cdt.nodeId === action.payload.newNode.nodeId
              ? {
                  nodeId: action.payload.newNode.nodeId,
                  title: action.payload.newNode.title || "",
                  description: action.payload.newNode.description,
                  inputs: action.payload.newNode.inputs || [""],
                  outputs: action.payload.newNode.outputs || ["else", ""],
                  conditions: action.payload.newNode.conditions || [
                    { value: "", condition: "" },
                  ],
                }
              : cdt
          );
      } else if (
        action.payload.nodeName === "Trigger Orders" ||
        action.payload.nodeName === "Refrences" ||
        action.payload.nodeName === "Third Party" ||
        action.payload.nodeName.startsWith("Thing")
      ) {
        state.triggerNodes = state.triggerNodes?.map((trigger) =>
          trigger.nodeId === action.payload.newNode.nodeId
            ? {
                nodeId: action.payload.newNode.nodeId,
                title: action.payload.newNode.title || "",
                description: action.payload.newNode.description,
                dashboard: action.payload.newNode.dashboard,
              }
            : trigger
        );
      } else if (action.payload.nodeName === "variable") {
        state.variableNodes = state.variableNodes?.map((variable) =>
          variable.nodeId === action.payload.newNode.nodeId
            ? {
                nodeId: action.payload.newNode.nodeId,
                name: action.payload.newNode.name || "",
                value: action.payload.newNode.value || 0,
              }
            : variable
        );
      } else if (action.payload.nodeName === "Set Variables") {
        state.triggerNodes = state.triggerNodes?.map((trigger) =>
          trigger.nodeId === action.payload.newNode.nodeId
            ? {
                nodeId: action.payload.newNode.nodeId,
                title: action.payload.newNode.title || "",
                variable: action.payload.newNode.variable || "",
                variableValue: action.payload.newNode.variableValue,
              }
            : trigger
        );
      } else if (action.payload.nodeName === "Get Variables") {
        state.triggerNodes = state.triggerNodes?.map((trigger) =>
          trigger.nodeId === action.payload.newNode.nodeId
            ? {
                nodeId: action.payload.newNode.nodeId,
                title: action.payload.newNode.title || "",
                variable: action.payload.newNode.variable || "",
              }
            : trigger
        );
      }
    },
    deleteNode: (
      state,
      action: PayloadAction<{ index: number | undefined }>
    ) => {
      state.conditionNodes = state.conditionNodes?.filter(
        (_item, index) => index !== action.payload.index
      );
    },
    addTriggerNode: (state, action: PayloadAction<ITriggerNode>) => {
      state.triggerNodes = state.triggerNodes?.length
        ? [...state.triggerNodes, action.payload]
        : [action.payload];
    },
    addVariableNode: (state, action: PayloadAction<IVariableNode>) => {
      state.variableNodes = state.variableNodes?.length
        ? [...state.variableNodes, action.payload]
        : [action.payload];
    },
    addTestNode: (state, action: PayloadAction<ITestNode>) => {
      state.testNodes = state.testNodes?.length
        ? [...state.testNodes, action.payload]
        : [action.payload];
    },
  },
});
export const {
  addApplet,
  removeApplet,
  pinApplet,
  unPinApplet,
  editApplet,
  addConditionNode,
  addEditNode,
  removeEditNode,
  editNode,
  deleteNode,
  addTriggerNode,
  addVariableNode,
  addTestNode,
} = appletSlice.actions;
export default appletSlice.reducer;
