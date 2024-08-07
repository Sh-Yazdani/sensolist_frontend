"use client";

import { editWidget } from "@/lib/features/dashboard/dashboardSlice";
import { RootState } from "@/lib/store";
import { IChartData, ISelectOption, ISubWidget, IThing } from "@/types/general";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import SelectInput from "../UI/SelectInput";

interface ChartFormModalProps {
  open: boolean;
  onClose: () => void;
  chart: { name: string; image: string } | null;
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

export default function ChartFormModal({
  open,
  onClose,
  chart,
  onWidgetsClose,
  dashboardId,
  onAddWidget,
  edit,
}: ChartFormModalProps) {
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

  const dispatch = useDispatch();

  const [values, setValues] = useState(edit?.widget.chartData);
  useEffect(() => {
    reset();
    setValues(edit?.widget.chartData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, edit]);

  const { things, loading, error } = useSelector(
    (state: RootState) => state.thingsSlice
  );
  const thingsList: ISelectOption[] = things.length
    ? things.map((thing) => {
        return {
          title: thing.name,
          value: thing.id,
        };
      })
    : [];

  const [selectedThingOption, setSelectedThingOption] =
    useState<ISelectOption | null>(thingsList.length ? thingsList[0] : null);

  useEffect(() => {
    setSelectedThingOption(thingsList.length ? thingsList[0] : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [things]);

  const [selectedThing, setSelectedThing] = useState<IThing>(
    [...things.filter((thing) => thing.id === selectedThingOption?.value)][0]
  );
  useEffect(() => {
    setSelectedThing(
      [...things.filter((thing) => thing.id === selectedThingOption?.value)][0]
    );
  }, [selectedThingOption, things]);

  const charactristicList: ISelectOption[] = selectedThing?.characteristics
    .length
    ? selectedThing.characteristics.map((char) => {
        return {
          title: char,
          value: char,
        };
      })
    : [];

  const [selectedCharactristic, setSelectedCharactristic] =
    useState<ISelectOption>(charactristicList[0]);

  useEffect(() => {
    setSelectedCharactristic(charactristicList[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedThingOption, things]);

  const [selectedYUnit, setSelectedYUnit] = useState<ISelectOption>(
    yAxeUnitList[0]
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IChartData>({
    values: values
      ? values
      : {
          title: "",
          thing: thingsList[0] ? thingsList[0].value : "",
          charactristic: charactristicList[0] ? charactristicList[0].value : "",
          xAxesLabel: "",
          yAxesLabel: "",
          yAxesMin: 0,
          yAxesMax: 0,
          yAxesUnit: yAxeUnitList[0].value,
        },
  });
  console.log("chart form", errors);

  const onSubmit: SubmitHandler<IChartData> = (data) => {
    // if (chart) {
    if (edit) {
      dispatch(
        editWidget({
          dashboardId: edit.dashboardId,
          widget: { ...edit.widget, chartData: data },
          draft: edit.draft,
          index: edit.index,
        })
      );
    } else {
      if (chart) onAddWidget({ ...chart, chartData: data });
    }
    // }

    reset();
    onClose();
    onWidgetsClose();
  };

  if (loading) {
    return <div>loading...</div>;
  }
  if (!things.length) {
    return <div>things nadarim</div>;
  }
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
        {selectedThingOption && (
          <SelectInput
            options={thingsList}
            selectedValue={selectedThingOption}
            setSelectedValue={(option) => {
              setSelectedThingOption(option);
            }}
            register={register}
            name="thing"
            label="Thing"
            className="mt-6"
          />
        )}
        {selectedCharactristic && (
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
        )}

        <div className="mt-6">X Axes</div>
        <div className="px-4 pt-4 py-6 rounded-lg bg-black-opacity-50 dark:bg-white-opacity-100 mt-4">
          <div className="w-full md:w-1/2">
            <Input
              required
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
        <div className="px-4 pt-4 py-6 rounded-lg bg-black-opacity-50 dark:bg-white-opacity-100 mt-4 flex gap-4 flex-wrap items-center">
          <div className="w-full md:w-[calc(50%-12px)]">
            <Input
              required
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
              required
              error={errors.yAxesMin?.type === "required" ? "required" : ""}
              label="min"
              register={register}
              name="yAxesMin"
              type="number"
            />
          </div>
          <div className="w-[calc(50%-12px)] md:w-[calc(25%-12px)] mt-4 md:mt-0">
            <Input
              required
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
            {edit ? "edit" : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
