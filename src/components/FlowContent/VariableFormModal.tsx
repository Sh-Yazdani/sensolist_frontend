import {
  addVariableNode,
  editNode as editNodeReducer,
} from "@/lib/features/applet/appletSlice";
import { IEditNode, NodeDataType } from "@/types/general";
import { Node } from "@xyflow/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

interface VariableFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
  edit?: IEditNode | null;
}

interface ICreateNodeInputs {
  name?: string;
  value?: number;
}

export default function VariableFormModal({
  open,
  onClose,
  node,
  onAddNode,
  edit,
}: VariableFormModalProps) {
  const [values, setValues] = useState(
    edit
      ? {
          name: edit.name,
          value: edit.value,
        }
      : undefined
  );
  useEffect(() => {
    reset();
    setValues(
      edit
        ? {
            name: edit.name,
            value: edit.value,
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
          name: "",
          value: 0,
        },
  });

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<ICreateNodeInputs> = (data) => {
    console.log("on submit", data, edit);
    if (edit) {
      reset();
      dispatch(
        editNodeReducer({
          nodeName: "variable",
          newNode: { ...data, nodeId: edit.nodeId || "" },
        })
      );
    } else {
      dispatch(
        addVariableNode({
          nodeId: node?.id || "",
          name: data.name || "",
          value: data.value || 0,
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
            errors.name?.type === "required" ? "This field is required" : ""
          }
          label="Name"
          register={register}
          name="name"
          className="mt-6"
        />
        <Input
          error={
            errors.value?.type === "required" ? "This field is required" : ""
          }
          type="number"
          label="Value"
          register={register}
          name="value"
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
