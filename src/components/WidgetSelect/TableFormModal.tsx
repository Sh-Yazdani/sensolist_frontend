"use client";

import { ISelectOption, ISubWidget } from "@/types/general";
import { Add, Trash } from "iconsax-react";
import { useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import SelectInput from "../UI/SelectInput";

interface TableFormModalProps {
  open: boolean;
  onClose: () => void;
  table: { name: string; image: string } | null;
  dashboardId: number;
  onWidgetsClose: () => void;
  onAddWidget: (widget: ISubWidget) => void;
}

interface ICreateWidgetInputs {
  title: string;
  thing: string;
  charactristic: string;
  description?: string;
  columns: { key: string; name: string }[];
}

export default function TableFormModal({
  open,
  onClose,
  table,
  dashboardId,
  onWidgetsClose,
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

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateWidgetInputs>();

  const onSubmit: SubmitHandler<ICreateWidgetInputs> = (data) => {
    console.log("submit", data);
    if (table) {
      onAddWidget({
        ...table,
        tableData: {
          title: data.title,
          thing: data.thing,
          charactristic: data.charactristic,
          description: data.description,
          columns: data.columns,
        },
      });
    }
    reset();
    onClose();
    onWidgetsClose();
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  return (
    <Modal onClose={onClose} open={open}>
      <div className=" border-b border-neutral-4 pb-3 text-neutral-7 dark:text-neutral-2">
        <span className=" capitalize font-semibold">{table?.name}</span>
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

        {fields.map((item, i) => (
          <div
            key={i}
            className="px-4 pt-4 py-6 rounded-lg bg-black-opacity-50 dark:bg-white-opacity-100 mt-4 flex gap-4 flex-wrap items-end"
          >
            <div className="w-[calc(45%-12px)]">
              <Input
                required
                error={
                  errors.columns?.length &&
                  errors.columns[i]?.key?.type === "required"
                    ? "required"
                    : ""
                }
                label="Key"
                register={register}
                name={`columns.${i}.key`}
              />
            </div>
            <div className="w-[calc(45%-12px)]">
              <Input
                required
                error={
                  errors.columns?.length &&
                  errors.columns[i]?.name?.type === "required"
                    ? "required"
                    : ""
                }
                label="Name"
                register={register}
                name={`columns.${i}.name`}
              />
            </div>
            <button
              className="w-[calc(5%-12px)] mb-4"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                remove(i);
                // setColumnCount((prev) => prev.filter((item) => item !== col));
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
            append({ name: "", key: "" });
            // setColumnCount((prev) => [...prev, prev[prev.length - 1] + 1]);
          }}
        >
          <Add className="size-5" />
          Add Column
        </Button>
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
