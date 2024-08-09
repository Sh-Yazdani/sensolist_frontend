import {
  addTestNode,
  editNode as editNodeReducer,
} from "@/lib/features/applet/appletSlice";
import { RootState } from "@/lib/store";
import {
  IEditNode,
  ISelectOption,
  IThing,
  NodeDataType,
} from "@/types/general";
import { Node } from "@xyflow/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import Select from "../UI/Select";
import SelectInput from "../UI/SelectInput";

interface TestFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
  edit?: IEditNode | null;
}

interface ICreateNodeInputs {
  email?: string;
  thing?: string;
  value?: number;
  condition?: string;
  charactristic?: string;
}

export default function TestFormModal({
  open,
  onClose,
  node,
  onAddNode,
  edit,
}: TestFormModalProps) {
  const conditions: ISelectOption[] = [
    {
      value: "greater_than",
      title: ">",
    },
    {
      value: "less_than",
      title: "<",
    },
    // {
    //   value: "more than",
    //   title: ">",
    // },
    // {
    //   value: "equal of less than",
    //   title: "=<",
    // },
    // {
    //   value: "equal of more than",
    //   title: "=>",
    // },
    // {
    //   value: "contains",
    //   title: "contains",
    // },
  ];
  const [value, setvalue] = useState(0);
  const [secondVariable, setSecondVariable] = useState("");
  const [selectedCondition, setSelectedCondition] = useState<ISelectOption>(
    conditions[0]
  );

  const { things, loading, error } = useSelector(
    (state: RootState) => state.thingsSlice
  );
  const thingsList: ISelectOption[] = things.length
    ? things.map((thing) => {
        return {
          title: thing.name.charAt(0).toUpperCase() + thing.name.slice(1),
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

  const [selectedCharactristics, setSelectedCharactristics] =
    useState<ISelectOption>(charactristicList[0]);

  const [charactristicsError, setCharactristicsError] = useState<string | null>(
    null
  );

  //   useEffect(() => {
  //     setSelectedCharactristics([]);
  //     setCharactristicsError(null);
  //   }, [open]);

  //   useEffect(() => {
  //     setSelectedCharactristics([]);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [selectedThingOption, things]);

  console.log("selectedThingOption", selectedThingOption);

  const [values, setValues] = useState(
    edit
      ? {
          email: edit.name,
          thing: edit.thing,
          value: edit.value,
          condition: edit.condition,
        }
      : undefined
  );
  useEffect(() => {
    reset();
    setValues(
      edit
        ? {
            email: edit.name,
            thing: edit.thing,
            value: edit.value,
            condition: edit.condition,
          }
        : undefined
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, edit]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateNodeInputs>({
    values: values
      ? values
      : {
          email: "",
          thing: thingsList[0].value,
          value: 0,
          condition: conditions[0].value,
          charactristic: charactristicList[0].value,
        },
  });

  const dispatch = useDispatch();
  console.log("errors", errors);
  const onSubmit: SubmitHandler<ICreateNodeInputs> = (data) => {
    console.log("on submit", data, edit);
    if (edit) {
      reset();
      dispatch(
        editNodeReducer({
          nodeName: "test",
          newNode: { ...data, nodeId: edit.nodeId || "" },
        })
      );
    } else {
      dispatch(
        addTestNode({
          nodeId: node?.id || "",
          email: data.email || "",
          thing: [...things.filter((item) => item.id === data.thing)][0],
          charactristic: data.charactristic || "",
          value: data.value || 0,
          condition: data.condition || "",
        })
      );
    }
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
            errors.email?.type === "required" ? "This field is required" : ""
          }
          label="Email"
          register={register}
          name="email"
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
        {selectedThingOption && (
          <SelectInput
            options={charactristicList}
            selectedValue={selectedCharactristics}
            setSelectedValue={(option) => {
              setSelectedThingOption(option);
            }}
            register={register}
            name="charactristic"
            label="Charactristic"
            className="mt-6"
          />
        )}
        {/* {charactristicList && (
          <MultiSelect
            options={charactristicList}
            selectedValues={selectedCharactristics}
            setSelectedValues={setSelectedCharactristics}
            label="Charactristics"
            className="mt-6"
            error={charactristicsError || undefined}
          />
        )} */}
        <div className=" flex justify-between items-end mt-6">
          {/* <SimpleInput
            register={register}
            required
            name={"variable"}
            value={value}
            onChange={(val) => {
              setvalue(val);
            }}
            error={
              errors.value?.type === "required" ? "This field is required" : ""
            }
            className="w-50%] h-[45px]"
            placeholder="first variable"
          /> */}
          <Input
            required
            error={
              errors.value?.type === "required" ? "This field is required" : ""
            }
            className="w-50%] h-fit"
            label="value"
            register={register}
            name="value"
            type="number"
          />
          <Select
            options={conditions}
            value={selectedCondition}
            onChange={(val: ISelectOption) => {
              setSelectedCondition(val);
            }}
            className=" w-[40%] h-[45px]"
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
            {edit ? "edit" : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
