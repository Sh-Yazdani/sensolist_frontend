import { ISelectOption } from "@/types/general";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";
import SecondaryModal from "../UI/SecondaryModal";
import Select from "../UI/Select";
import SimpleInput from "../UI/SimpleInput";

interface ConditionSelectModalProps {
  open: number | null;
  onClose: () => void;
  setCondition: (condition: string) => void;
}

interface IConditionSelect {
  firstVariable: string;
  secondVariable: string;
}

export default function ConditionSelectModal({
  open,
  onClose,
  setCondition,
}: ConditionSelectModalProps) {
  const conditions: ISelectOption[] = [
    {
      value: "equal",
      title: "=",
    },
    {
      value: "less than",
      title: "<",
    },
    {
      value: "more than",
      title: ">",
    },
    {
      value: "equal of less than",
      title: "=<",
    },
    {
      value: "equal of more than",
      title: "=>",
    },
    {
      value: "contains",
      title: "contains",
    },
  ];
  const [firstVariable, setFirstVariable] = useState("");
  const [secondVariable, setSecondVariable] = useState("");
  const [selectedCondition, setSelectedCondition] = useState<ISelectOption>(
    conditions[0]
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IConditionSelect>();

  const onSubmit: SubmitHandler<IConditionSelect> = (data) => {
    console.log("submit", data);
    setCondition(
      `${firstVariable} ${selectedCondition.title} ${secondVariable}`
    );
    reset();
    onClose();
  };
  return (
    <SecondaryModal onClose={onClose} open={!!open}>
      <div className="mt-20 text-sm w-fit mx-auto">
        You can configure filter using below fields
      </div>
      <form
        className="mt-20 flex flex-col h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" flex justify-between items-center">
          <SimpleInput
            register={register}
            required
            name={`firstVariable`}
            value={firstVariable}
            onChange={(val) => {
              setFirstVariable(val);
            }}
            error={
              errors.firstVariable?.type === "required"
                ? "This field is required"
                : ""
            }
            className="w-[36%] h-[45px]"
            placeholder="first variable"
          />
          <Select
            options={conditions}
            value={selectedCondition}
            onChange={(val: ISelectOption) => {
              setSelectedCondition(val);
            }}
            className=" w-[25%] h-[45px]"
          />
          <SimpleInput
            register={register}
            required
            name={`secondVariable`}
            value={secondVariable}
            onChange={(val) => {
              setSecondVariable(val);
            }}
            error={
              errors.secondVariable?.type === "required"
                ? "This field is required"
                : ""
            }
            className="w-[36%] h-[45px]"
            placeholder="second variable"
          />
        </div>
        <Button
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            setCondition(
              `${firstVariable} ${selectedCondition.title} ${secondVariable}`
            );
            reset();
            onClose();
          }}
          className="mt-auto px-4"
        >
          Add
        </Button>
      </form>
    </SecondaryModal>
  );
}
