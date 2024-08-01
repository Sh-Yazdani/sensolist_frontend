"use client";

import { addThingNode } from "@/lib/features/applet/appletSlice";
import { ISelectOption, NodeDataType } from "@/types/general";
import { Node } from "@xyflow/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import SelectInput from "../UI/SelectInput";

interface ThingFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
}

interface ICreateNodeInputs {
  title: string;
  charactristic: string;
  description?: string;
}

export default function ThingFormModal({
  open,
  onClose,
  node,
  onAddNode,
}: ThingFormModalProps) {
  const dispatch = useDispatch();
  const charactristicList: ISelectOption[] = [
    {
      title: "charactristic 1",
      value: "charactristic1",
    },
    {
      title: "charactristic 2",
      value: "charactristic2",
    },
    {
      title: "charactristic 3",
      value: "charactristic3",
    },
  ];

  const [selectedCharactristic, setSelectedCharactristic] =
    useState<ISelectOption>(charactristicList[0]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateNodeInputs>();

  const onSubmit: SubmitHandler<ICreateNodeInputs> = (data) => {
    console.log("submit", data);
    dispatch(
      addThingNode({
        nodeId: node?.id || "",
        title: data.title,
        description: data.description,
        charactristic: data.charactristic,
      })
    );
    onAddNode();
    reset();
    onClose();
  };

  return (
    <Modal onClose={onClose} open={open}>
      <div className=" border-b border-neutral-4 pb-3 text-neutral-7 dark:text-neutral-2">
        <span className=" capitalize font-semibold">{node?.data.name}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <SelectInput
          options={charactristicList}
          selectedValue={selectedCharactristic}
          setSelectedValue={(option) => {
            setSelectedCharactristic(option);
          }}
          register={register}
          name="charactristic"
          label="Charactristic"
          className="mt-6"
        />
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
