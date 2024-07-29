"use client";

import { RootState } from "@/lib/store";
import { Accordion } from "flowbite-react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  actionNodes,
  controlNodes,
  thingNodes,
  triggerNodes,
} from "./nodeItems";
export default function FlowSidebar() {
  const { conditionNodes } = useSelector(
    (state: RootState) => state.appletSlice
  );
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [variableCount] = useState<number>(3);
  const onVariableDragStart = (
    event: {
      dataTransfer: {
        setData: (arg0: string, arg1: any) => void;
        effectAllowed: string;
      };
    },
    nodeType: any,
    item: string,
    count: number,
    name: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("name", name);
    event.dataTransfer.setData("value", item);
    event.dataTransfer.setData("count", count);
    event.dataTransfer.effectAllowed = "move";
  };
  const onConditionDragStart = (
    event: {
      dataTransfer: {
        setData: (arg0: string, arg1: any) => void;
        effectAllowed: string;
      };
    },
    nodeType: any
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("value", "condition");
    event.dataTransfer.setData(
      "index",
      conditionNodes?.length ? conditionNodes?.length : 0
    );
    event.dataTransfer.effectAllowed = "move";
  };
  const onDragStart = (
    event: {
      dataTransfer: {
        setData: (arg0: string, arg1: any) => void;
        effectAllowed: string;
      };
    },
    nodeType: any,
    item: string
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("value", item);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div
      className={` relative transition-all ${
        isOpen ? "visiblel" : " invisible w-0"
      }`}
    >
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="absolute md:hidden bg-neutral-2 py-3 right-[-1.5rem] top-10 rounded-r-xl z-20 visible"
      >
        {isOpen ? <ArrowLeft2 /> : <ArrowRight2 />}
      </button>
      <div
        className={`flex flex-col w-[280px] h-full z-20 bg-white dark:bg-primary-Shade-1
        `}
      >
        <Accordion className=" h-full">
          <Accordion.Panel>
            <Accordion.Title>Things</Accordion.Title>
            <Accordion.Content>
              {thingNodes.map((item, i) => (
                <div
                  key={item.value}
                  className={`${
                    i !== 0 && "mt-4"
                  } border border-neutral-6 px-4 py-2 rounded-lg flex items-center dark:text-neutral-4`}
                  onDragStart={(event) =>
                    onDragStart(event, "triggerNode", item.value)
                  }
                  draggable
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Triggers</Accordion.Title>
            <Accordion.Content>
              {triggerNodes.map((item, i) => (
                <div
                  key={item.value}
                  className={`${
                    i !== 0 && "mt-4"
                  } border border-neutral-6 px-4 py-2 rounded-lg flex items-center dark:text-neutral-4`}
                  onDragStart={(event) =>
                    onDragStart(event, "triggerNode", item.value)
                  }
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
                  } border border-neutral-6 px-4 py-2 rounded-lg flex items-center dark:text-neutral-4`}
                  onDragStart={(event) =>
                    onDragStart(event, "triggerNode", item.value)
                  }
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
                  } border border-neutral-6 px-4 py-2 rounded-lg flex items-center dark:text-neutral-4`}
                  onDragStart={(event) =>
                    item.value === "condition"
                      ? onConditionDragStart(event, "conditionNode")
                      : onDragStart(event, "triggerNode", item.value)
                  }
                  draggable
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Variables</Accordion.Title>
            <Accordion.Content>
              {[...new Array(variableCount)].map((_var, i) => (
                <div
                  key={i}
                  className={`mt-4 border border-neutral-6 px-4 py-2 rounded-lg flex items-center dark:text-neutral-4`}
                  onDragStart={(event) =>
                    onVariableDragStart(
                      event,
                      "variableNode",
                      `${i + 1}`,
                      (i + 1) * 5,
                      "Variable"
                    )
                  }
                  draggable
                >
                  <span className="ml-2">Variable {i + 1}</span>
                  <span className="ml-auto">{(i + 1) * 5}</span>
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}
