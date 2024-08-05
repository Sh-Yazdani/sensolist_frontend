"use client";

import { editWidget } from "@/lib/features/dashboard/dashboardSlice";
import { IAirQualityData, ISelectOption, ISubWidget } from "@/types/general";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import SelectInput from "../UI/SelectInput";

interface AirQualityFormModalProps {
  open: boolean;
  onClose: () => void;
  card: { name: string; image: string } | null;
  onWidgetsClose: () => void;
  dashboardId: number;
  onAddWidget: (widget: ISubWidget) => void;
  edit?: {
    dashboardId: number;
    widget: ISubWidget;
    draft: boolean;
    index: number;
  };
}

export default function AirQualityFormModal({
  open,
  onClose,
  card,
  onWidgetsClose,
  dashboardId,
  onAddWidget,
  edit,
}: AirQualityFormModalProps) {
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

  const units: ISelectOption[] = [
    {
      title: "aqi",
      value: "aqi",
    },
    {
      title: "ppb",
      value: "ppb",
    },
    {
      title: "ppm",
      value: "ppm",
    },
    {
      title: "µg/m³",
      value: "µg/m³",
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

  const dispatch = useDispatch();

  const [values, setValues] = useState(edit?.widget.airQualityData);
  useEffect(() => {
    reset();
    setValues(edit?.widget.airQualityData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, edit]);

  const [selectedThing, setSelectedThing] = useState<ISelectOption>(
    thingsList[0]
  );

  const [selectedCharactristic, setSelectedCharactristic] =
    useState<ISelectOption>(charactristicList[0]);

  const [selectedUnit, setSelectedUnit] = useState<ISelectOption>(units[0]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IAirQualityData>({
    values: values
      ? values
      : {
          title: "",
          thing: thingsList[0].value,
          charactristic: charactristicList[0].value,
          unit: units[0].value,
        },
  });

  const onSubmit: SubmitHandler<IAirQualityData> = (data) => {
    if (edit) {
      dispatch(
        editWidget({
          dashboardId: edit.dashboardId,
          widget: { ...edit.widget, airQualityData: data },
          draft: edit.draft,
          index: edit.index,
        })
      );
    } else {
      if (card) onAddWidget({ ...card, airQualityData: data });
    }

    reset();
    onClose();
    onWidgetsClose();
  };
  return (
    <Modal onClose={onClose} open={open}>
      <div className=" border-b border-neutral-4 pb-3 text-neutral-7 dark:text-neutral-2">
        <span className=" capitalize font-semibold">{card?.name}</span>
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
        <SelectInput
          options={units}
          selectedValue={selectedUnit}
          setSelectedValue={(option) => {
            setSelectedUnit(option);
          }}
          register={register}
          name="unit"
          label="unit"
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
            {edit ? "edit" : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
