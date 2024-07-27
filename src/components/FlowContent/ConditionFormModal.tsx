"use client";

import { NodeDataType } from "@/types/general";
import { Node } from "@xyflow/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

interface ConditionFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
}

interface ICreateNodeInputs {
  [key: string]: string;
}

export default function ConditionFormModal({
  open,
  onClose,
  node,
  onAddNode,
}: ConditionFormModalProps) {
  const [inputCount, setInputCount] = useState<number[]>([1]);
  const [outputCount, setOutputCount] = useState<number[]>([1]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateNodeInputs>();

  const onSubmit: SubmitHandler<ICreateNodeInputs> = (data) => {
    console.log("submit", data);
    onAddNode();
    reset();
    onClose();
  };

  return (
    <Modal onClose={onClose} open={open} large>
      <div className=" border-b border-neutral-4 pb-3 text-neutral-7 dark:text-neutral-2">
        <span className=" capitalize font-semibold">{node?.data.name}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[calc(50%-10px)]">
          <Input
            required
            error={
              errors.title?.type === "required" ? "This field is required" : ""
            }
            label="Title"
            register={register}
            name="title"
            className="mt-6"
          />
        </div>
        <div className="w-full flex items-start mt-6 gap-4">
          <div className="w-[calc(50%-10px)] bg-black-opacity-50 rounded-lg p-4 flex flex-col">
            <div className=" text-sm w-fit mx-auto">Diagram Inputs</div>
            <div className="mt-6 after:content-['*']">Label</div>
            {inputCount.map((num) => (
              <Input
                key={num}
                required
                error={
                  errors.label?.type === "required"
                    ? "This field is required"
                    : ""
                }
                register={register}
                name={`label${num}`}
                className="mt-4"
              />
            ))}
            <Button
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                setInputCount((prev) => [...prev, prev[prev.length - 1] + 1]);
              }}
              variant="secondary"
              className="px-3 h-[40px] mt-4 text-xs w-fit mx-auto"
            >
              Add New
            </Button>
          </div>
          <div className="w-[calc(50%-10px)] bg-black-opacity-50 rounded-lg p-4 flex flex-col">
            <div className=" text-sm w-fit mx-auto">Diagram Outputs</div>
            <div className="mt-6 after:content-['*']">Label</div>
            {outputCount.map((num) => (
              <Input
                key={num}
                required
                error={
                  errors.label?.type === "required"
                    ? "This field is required"
                    : ""
                }
                register={register}
                name={`label${num}`}
                className="mt-4"
              />
            ))}
            <Button
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                setOutputCount((prev) => [...prev, prev[prev.length - 1] + 1]);
              }}
              variant="secondary"
              className="px-3 h-[40px] mt-4 text-xs w-fit mx-auto"
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="w-[calc(50%-10px)]">
          <Input
            error={
              errors.description?.type === "required"
                ? "This field is required"
                : ""
            }
            label="Description"
            register={register}
            name="description"
            className="mt-6"
          />
        </div>

        <div className="flex items-center gap-4 mt-8">
          <Button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              event.preventDefault();
              reset();
              onClose();
            }}
            className="w-[36%]"
            variant="secondary"
          >
            Cancel
          </Button>
          <Button className="w-[64%]" type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
}
