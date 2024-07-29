import { ISelectOption } from "@/types/general";
import { useState } from "react";
import Button from "../UI/Button";
import SecondaryModal from "../UI/SecondaryModal";
import Select from "../UI/Select";
import SimpleInput from "../UI/SimpleInput";

interface ConditionSelectModalProps {
  open: number | null;
  onClose: () => void;
  setCondition: (condition: string) => void;
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
  return (
    <SecondaryModal onClose={onClose} open={!!open}>
      <div className="mt-20 text-sm w-fit mx-auto">
        You can configure filter using below fields
      </div>
      <div className="mt-20 flex justify-between items-end">
        <SimpleInput
          value={firstVariable}
          onChange={(val) => {
            setFirstVariable(val);
          }}
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
          value={secondVariable}
          onChange={(val) => {
            setSecondVariable(val);
          }}
          className="w-[36%] h-[45px]"
          placeholder="second variable"
        />
      </div>
      <Button
        onClick={() => {
          setCondition(
            `${firstVariable} ${selectedCondition.title} ${secondVariable}`
          );
          onClose();
        }}
        className="mt-auto px-4"
      >
        Add
      </Button>
    </SecondaryModal>
  );
}
