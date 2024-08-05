"use client";

import { editWidget } from "@/lib/features/dashboard/dashboardSlice";
import { IAlarmData, ISelectOption, ISubWidget } from "@/types/general";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import MultiSelect from "../UI/MultiSelect";
import SelectInput from "../UI/SelectInput";

interface AlarmCountFormModalProps {
  open: boolean;
  onClose: () => void;
  chart: { name: string; image: string } | null;
  onAddWidget: (widget: ISubWidget) => void;
  onWidgetsClose: () => void;
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
  onAddWidget,
  onWidgetsClose,
  edit,
}: AlarmCountFormModalProps) {
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

  const usersList: ISelectOption[] = [
    {
      title: "User 1",
      value: "user1",
    },
    {
      title: "User 2",
      value: "user2",
    },
    {
      title: "User 3",
      value: "user3",
    },
    {
      title: "User 4",
      value: "user4",
    },
  ];

  const dispatch = useDispatch();

  const [values, setValues] = useState(edit?.widget.alarmData);
  useEffect(() => {
    reset();
    setValues(edit?.widget.alarmData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, edit]);

  const [selectedThing, setSelectedThing] = useState<ISelectOption>(
    thingsList[0]
  );

  const [selectedCharactristic, setSelectedCharactristic] =
    useState<ISelectOption>(charactristicList[0]);

  const [selectedUsers, setSelectedUsers] = useState<ISelectOption[]>([]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IAlarmData>({
    values: values
      ? values
      : {
          title: "",
          thing: thingsList[0].value,
          charactristic: charactristicList[0].value,
        },
  });

  const onSubmit: SubmitHandler<IAlarmData> = (data) => {
    if (edit) {
      dispatch(
        editWidget({
          dashboardId: edit.dashboardId,
          widget: { ...edit.widget, alarmData: data },
          draft: edit.draft,
          index: edit.index,
        })
      );
    } else {
      if (chart) onAddWidget({ ...chart, alarmData: data });
    }
    reset();
    onClose();
    onWidgetsClose();
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
        <MultiSelect
          options={usersList}
          selectedValues={selectedUsers}
          setSelectedValues={setSelectedUsers}
          label="Assign User"
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
