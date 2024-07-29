"use client";

import { ICondition, ISelectOption, NodeDataType } from "@/types/general";
import { Node } from "@xyflow/react";
import { CloseCircle } from "iconsax-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";
import FormError from "../UI/FormError";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import Select from "../UI/Select";
import SimpleInput from "../UI/SimpleInput";
import ConditionSelectModal from "./ConditionSelectModal";

interface ConditionFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
}

interface ICreateNodeInputs {
  title: string;
  description: string;
  inputs: { label: string }[];
  outputs: { label: string }[];
  conditions: { value: string; condition: string }[];
}

export default function ConditionFormModal({
  open,
  onClose,
  node,
  onAddNode,
}: ConditionFormModalProps) {
  const [inputs, setInputs] = useState<string[]>([""]);
  const [outputs, setOutputs] = useState<string[]>(["else", ""]);
  const [conditions, setConditions] = useState<ICondition[]>([
    {
      condition: "",
      value: "",
      output: "",
    },
  ]);
  const [openConditionIndex, setOpenConditionIndex] = useState<number | null>(
    null
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ICreateNodeInputs>();

  const onSubmit: SubmitHandler<ICreateNodeInputs> = (data) => {
    console.log("submit", data);
    onAddNode();
    reset();
    onClose();
  };

  console.log("erorsss", errors);

  return (
    <>
      <Modal onClose={onClose} open={open} large>
        <div className=" border-b border-neutral-4 pb-3 text-neutral-7 dark:text-neutral-2">
          <span className=" capitalize font-semibold">{node?.data.name}</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[calc(50%-10px)]">
            <Input
              required
              error={
                errors.title?.type === "required"
                  ? "This field is required"
                  : ""
              }
              label="Title"
              register={register}
              name="title"
              className="mt-6"
            />
          </div>
          <div className="w-full flex items-start mt-6 gap-4">
            <div className="w-[calc(50%-10px)] bg-black-opacity-50 dark:bg-white-opacity-100 rounded-lg p-4 flex flex-col">
              <div className=" text-sm w-fit mx-auto">Input Labels</div>
              {inputs.map((val, i) => (
                <SimpleInput
                  register={register}
                  required
                  name={`inputs.${i}`}
                  key={i}
                  value={val}
                  onChange={(val: string) => {
                    setInputs((prev) =>
                      prev.map((item, index) => (index === i ? val : item))
                    );
                  }}
                  className="mt-6"
                  error={
                    errors.inputs?.length &&
                    errors.inputs[i]?.type === "required"
                      ? "This field is required"
                      : ""
                  }
                />
              ))}
              <Button
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  setInputs((prev) => [...prev, ""]);
                }}
                variant="secondary"
                className="px-3 h-[40px] mt-4 text-xs w-fit mx-auto"
              >
                Add New
              </Button>
            </div>
            <div className="w-[calc(50%-10px)] bg-black-opacity-50 dark:bg-white-opacity-100 rounded-lg p-4 flex flex-col">
              <div className=" text-sm w-fit mx-auto">Output Labels</div>
              {outputs.map((val, i) => (
                <SimpleInput
                  register={register}
                  required
                  name={`outputs.${i}`}
                  key={i}
                  value={val}
                  onChange={(val: string) => {
                    setOutputs((prev) =>
                      prev.map((item, index) => (index === i ? val : item))
                    );
                  }}
                  className="mt-6"
                  error={
                    errors.outputs?.length &&
                    errors.outputs[i]?.type === "required"
                      ? "This field is required"
                      : ""
                  }
                />
              ))}
              <Button
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  setOutputs((prev) => [...prev, ""]);
                }}
                variant="secondary"
                className="px-3 h-[40px] mt-4 text-xs w-fit mx-auto"
              >
                Add New
              </Button>
            </div>
          </div>
          <div className="bg-black-opacity-50 dark:bg-white-opacity-100 rounded-lg p-4 flex flex-col mt-6">
            <div className=" text-sm w-fit m-auto">Diagram Conditions</div>
            {conditions.map((cdt, i) => (
              <div key={i} className="flex items-center justify-between mt-6">
                <div className="flex flex-col w-[35%] relative">
                  <div className=" text-xs">Diagram Condition</div>

                  <button
                    className={` border border-neutral-6 rounded-lg py-3 px-4 mt-2 text-sm backdrop-blur-[30px] bg-transparent
                      placeholder:text-neutral-6 placeholder:text-sm focus-visible:outline-none dark:text-neutral-2 h-[45px]`}
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                      event.preventDefault();
                      setOpenConditionIndex(i + 1);
                    }}
                  >
                    {/* <input
                      className="hidden"
                      {...register(`conditions.${i}.condition`, {
                        required: true,
                        value: cdt.condition,
                      })}
                    /> */}
                    {cdt.condition}
                  </button>
                  {errors.conditions?.length &&
                  errors.conditions[i]?.condition?.type === "required" ? (
                    <FormError error={"This field is required"} />
                  ) : null}
                </div>
                <div className="flex flex-col w-[35%]">
                  <div className=" text-xs mb-2">Diagram output value</div>
                  <SimpleInput
                    error={
                      errors.conditions?.length &&
                      errors.conditions[i]?.value?.type === "required"
                        ? "This field is required"
                        : ""
                    }
                    register={register}
                    required
                    name={`conditions.${i}.value`}
                    value={conditions[i].value}
                    onChange={(val: string) => {
                      setConditions((prev) =>
                        prev.map((item, index) =>
                          index === i
                            ? {
                                condition: item.condition,
                                value: val,
                                output: item.value,
                              }
                            : item
                        )
                      );
                    }}
                  />
                </div>
                <div className="flex flex-col w-[17%]">
                  <div className=" text-xs mb-2">Diagram output</div>
                  <Select
                    options={outputs.map((output) => {
                      return {
                        title: output,
                        value: output,
                      };
                    })}
                    value={{ title: outputs[0], value: outputs[0] }}
                    onChange={(val: ISelectOption) => {
                      setConditions((prev) =>
                        prev.map((item, index) =>
                          index === i
                            ? {
                                condition: item.condition,
                                value: item.value,
                                output: val.value,
                              }
                            : item
                        )
                      );
                    }}
                  />
                </div>
                <button
                  className="mt-4"
                  onClick={(event: React.MouseEvent<HTMLElement>) => {
                    event.preventDefault();
                    setConditions((prev) =>
                      prev.filter((_item, index) => index !== i)
                    );
                  }}
                >
                  <CloseCircle />
                </button>
              </div>
            ))}
            <Button
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                setConditions((prev) => [
                  ...prev,
                  {
                    condition: "",
                    value: "",
                    output: outputs[0],
                  },
                ]);
              }}
              variant="secondary"
              className="px-4 mt-6 w-fit mx-auto"
            >
              Add Condition
            </Button>
          </div>
          <div className="w-[calc(50%-10px)]">
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
              Create
            </Button>
          </div>
        </form>
      </Modal>
      <ConditionSelectModal
        open={openConditionIndex}
        onClose={() => {
          setOpenConditionIndex(null);
        }}
        setCondition={(condition: string) => {
          setConditions((prev) =>
            prev.map((item, index) =>
              index === Number(openConditionIndex) - 1
                ? {
                    condition: condition,
                    value: item.value,
                    output: item.output,
                  }
                : item
            )
          );
        }}
      />
    </>
  );
}
