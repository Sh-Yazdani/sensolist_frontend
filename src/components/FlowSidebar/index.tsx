"use client";

import { Accordion } from "flowbite-react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
import {
  actionNodes,
  controlNodes,
  thingNodes,
  triggerNodes,
} from "./nodeItems";
export default function FlowSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
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
            <Accordion.Title>Variables</Accordion.Title>
            <Accordion.Content>
              <div
                className={`mt-4 border border-neutral-6 px-4 py-2 rounded-lg flex items-center dark:text-neutral-4`}
                onDragStart={(event) =>
                  onDragStart(event, "triggerNode", "variable")
                }
                draggable
              >
                <span className="ml-2">Variable</span>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}
