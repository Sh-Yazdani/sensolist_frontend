"use client";

import { ISelectOption } from "@/types/general";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import SelectInput from "../UI/SelectInput";

interface ChartFormModalProps {
  open: boolean;
  onClose: () => void;
  chart: { name: string; image: string } | null;
  onAddWidget: () => void;
}

interface ICreateWidgetInputs {
  title: string;
  thing: string;
  charactristic: string;
  xAxesLabel: string;
  yAxesLabel: string;
  yAxesMin: number;
  yAxesMax: number;
  yAxesUnit: string;
  description: string;
}

export default function ChartFormModal({
  open,
  onClose,
  chart,
  onAddWidget,
}: ChartFormModalProps) {
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

  const yAxeUnitList: ISelectOption[] = [
    {
      title: "unit 1",
      value: "unit1",
    },
    {
      title: "unit 2",
      value: "unit2",
    },
    {
      title: "unit 3",
      value: "unit3",
    },
  ];

  const [selectedThing, setSelectedThing] = useState<ISelectOption>(
    thingsList[0]
  );

  const [selectedYUnit, setSelectedYUnit] = useState<ISelectOption>(
    yAxeUnitList[0]
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateWidgetInputs>();

  const onSubmit: SubmitHandler<ICreateWidgetInputs> = (data) => {
    console.log("submit", data);
    onAddWidget();
    reset();
    onClose();
  };

  return (
    <Modal onClose={onClose} open={open}>
      <div className=" border-b border-neutral-4 pb-3 text-neutral-7 dark:text-neutral-2">
        Add Widget :{" "}
        <span className=" capitalize font-semibold">{chart?.name}</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
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
        <Input
          error={
            errors.charactristic?.type === "required"
              ? "This field is required"
              : ""
          }
          label="Charactristic"
          register={register}
          name="charactristic"
          className="mt-6"
        />
        <div className="mt-6">X Axes</div>
        <div className="p-4 rounded-lg bg-black-opacity-50 dark:bg-white-opacity-100 mt-4">
          <div className="w-full md:w-1/2">
            <Input
              error={
                errors.xAxesLabel?.type === "required"
                  ? "This field is required"
                  : ""
              }
              label="label"
              register={register}
              name="xAxesLabel"
            />
          </div>
        </div>
        <div className="mt-6">Y Axes</div>
        <div className="p-4 rounded-lg bg-black-opacity-50 dark:bg-white-opacity-100 mt-4 flex gap-4 flex-wrap items-center">
          <div className="w-full md:w-[calc(50%-12px)]">
            <Input
              error={
                errors.yAxesLabel?.type === "required"
                  ? "This field is required"
                  : ""
              }
              label="label"
              register={register}
              name="yAxesLabel"
            />
          </div>
          <div className="w-[calc(50%-12px)] md:w-[calc(25%-12px)] mt-4 md:mt-0">
            <Input
              error={errors.yAxesMin?.type === "required" ? "required" : ""}
              label="min"
              register={register}
              name="yAxesMin"
              type="number"
            />
          </div>
          <div className="w-[calc(50%-12px)] md:w-[calc(25%-12px)] mt-4 md:mt-0">
            <Input
              error={errors.yAxesMax?.type === "required" ? "required" : ""}
              label="max"
              register={register}
              name="yAxesMax"
              type="number"
            />
          </div>
          <div className="w-[calc(50%-12px)] md:w-[calc(25%-12px)]">
            <SelectInput
              options={yAxeUnitList}
              selectedValue={selectedYUnit}
              setSelectedValue={(option) => {
                setSelectedYUnit(option);
              }}
              register={register}
              name="yAxesUnit"
              label="unit"
              className="mt-4"
            />
          </div>
        </div>
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
