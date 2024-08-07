"use client";

import { editWidget } from "@/lib/features/dashboard/dashboardSlice";
import { RootState } from "@/lib/store";
import {
  IIndoorEnvironmentFormData,
  ISelectOption,
  ISubWidget,
  IThing,
} from "@/types/general";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import MultiSelect from "../UI/MultiSelect";
import SelectInput from "../UI/SelectInput";

interface IndoorEnvironmentFormModalProps {
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

export default function IndoorEnvironmentFormModal({
  open,
  onClose,
  card,
  onWidgetsClose,
  dashboardId,
  onAddWidget,
  edit,
}: IndoorEnvironmentFormModalProps) {
  const dispatch = useDispatch();

  const [values, setValues] = useState(edit?.widget.indoorEnvironmentData);
  useEffect(() => {
    reset();
    setValues(edit?.widget.indoorEnvironmentData);
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

  const [selectedCharactristics, setSelectedCharactristics] = useState<
    ISelectOption[]
  >([]);

  const [charactristicsError, setCharactristicsError] = useState<string | null>(
    null
  );

  useEffect(() => {
    setSelectedCharactristics([]);
    setCharactristicsError(null);
  }, [open]);

  useEffect(() => {
    setSelectedCharactristics([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedThingOption, things]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IIndoorEnvironmentFormData>({
    values: values
      ? values
      : {
          title: "",
          thing: thingsList[0] ? thingsList[0].value : "",
        },
  });

  const onSubmit: SubmitHandler<IIndoorEnvironmentFormData> = (data) => {
    if (!selectedCharactristics.length) {
      setCharactristicsError("Select at least one charactristic");
    } else {
      if (edit) {
        dispatch(
          editWidget({
            dashboardId: edit.dashboardId,
            widget: {
              ...edit.widget,
              indoorEnvironmentData: {
                ...data,
                charactristic: selectedCharactristics.map((char) => char.value),
                senderId: selectedThing.senderId,
              },
            },
            draft: edit.draft,
            index: edit.index,
          })
        );
      } else {
        if (card)
          onAddWidget({
            ...card,
            indoorEnvironmentData: {
              ...data,
              charactristic: selectedCharactristics.map((char) => char.value),
              senderId: selectedThing.senderId,
            },
          });
      }

      reset();
      onClose();
      onWidgetsClose();
    }
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
        {charactristicList && (
          <MultiSelect
            options={charactristicList}
            selectedValues={selectedCharactristics}
            setSelectedValues={setSelectedCharactristics}
            label="Charactristics"
            className="mt-6"
            error={charactristicsError || undefined}
          />
        )}
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
