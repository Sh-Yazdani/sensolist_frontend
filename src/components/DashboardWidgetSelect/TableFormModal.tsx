"use client";

import { ISelectOption } from "@/types/general";
import { Add, Trash } from "iconsax-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import SelectInput from "../UI/SelectInput";

interface TableFormModalProps {
  open: boolean;
  onClose: () => void;
  chart: { name: string; image: string } | null;
  onAddWidget: () => void;
}

interface ICreateWidgetInputs {
  [key: string]: string;
}

export default function TableFormModal({
  open,
  onClose,
  chart,
  onAddWidget,
}: TableFormModalProps) {
  const thingsList: ISelectOption[] = [
    {
      title: "thing 1",
      value: "thing1",
    },
    {
      title: "thing 2",
      value: "thing2",
    },
    {
      title: "thing 3",
      value: "thing3",
    },
  ];

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

  const [selectedThing, setSelectedThing] = useState<ISelectOption>(
    thingsList[0]
  );

  const [selectedCharactristic, setSelectedCharactristic] =
    useState<ISelectOption>(charactristicList[0]);

  const [columnCount, setColumnCount] = useState<number[]>([1]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateWidgetInputs>();

  const onSubmit: SubmitHandler<ICreateWidgetInputs> = (data) => {
    console.log("submit", data);
    reset();
    onAddWidget();
    onClose();
  };

  return (
    <Modal onClose={onClose} open={open}>
      <div className=" border-b border-neutral-4 pb-3 text-neutral-7 dark:text-neutral-2">
        <span className=" capitalize font-semibold">{chart?.name}</span>
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
          options={thingsList}
          selectedValue={selectedThing}
          setSelectedValue={(option) => {
            setSelectedThing(option);
          }}
          register={register}
          name="thing"
          label="Thing"
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
        <div className="mt-6">Columns:</div>

        {columnCount.map((col, i) => (
          <div
            key={i}
            className="px-4 pt-4 py-6 rounded-lg bg-black-opacity-50 dark:bg-white-opacity-100 mt-4 flex gap-4 flex-wrap items-end"
          >
            <div className="w-[calc(45%-12px)]">
              <Input
                required
                error={errors[`key${i}`]?.type === "required" ? "required" : ""}
                label="Key"
                register={register}
                name={`key${i}`}
              />
            </div>
            <div className="w-[calc(45%-12px)]">
              <Input
                required
                error={
                  errors[`name${i}`]?.type === "required" ? "required" : ""
                }
                label="Name"
                register={register}
                name={`name${i}`}
              />
            </div>
            <button
              className="w-[calc(5%-12px)] mb-4"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                setColumnCount((prev) => prev.filter((item) => item !== col));
              }}
            >
              <Trash />
            </button>
          </div>
        ))}
        <Button
          variant="secondary"
          className="px-3 h-[40px] mt-4 text-xs"
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            setColumnCount((prev) => [...prev, prev[prev.length - 1] + 1]);
          }}
        >
          <Add className="size-5" />
          Add Column
        </Button>
        <div className="flex items-center gap-4 mt-8">
          <Button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              event.preventDefault();
              reset({
                title: "",
              });
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
