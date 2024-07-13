"use client";

import { Accordion } from "flowbite-react";
import { actionNodes, controlNodes, triggerNodes } from "./nodeItems";
export default function FlowSidebar() {
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
                } border border-neutral-6 px-4 py-2 rounded-lg flex items-center`}
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
                } border border-neutral-6 px-4 py-2 rounded-lg flex items-center`}
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
      </Accordion>
    </div>
  );
}
