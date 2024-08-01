import {
  addTriggerNode,
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

interface RefrencesFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
  edit?: IEditNode | null;
}

interface ICreateNodeInputs {
  title: string;
  description?: string;
}

export default function RefrencesFormModal({
  open,
  onClose,
  node,
  onAddNode,
  edit,
}: RefrencesFormModalProps) {
  const [values, setValues] = useState(
    edit
      ? {
          title: edit.title,
          description: edit.description,
        }
      : undefined
  );

  useEffect(() => {
    reset();
    setValues(
      edit
        ? {
            title: edit.title,
            description: edit.description,
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
          title: "",
          description: "",
        },
  });

  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<ICreateNodeInputs> = (data) => {
    console.log("on submit", data, edit);
    if (edit) {
      console.log("id=f edit", edit);
      reset();
      dispatch(
        editNodeReducer({
          nodeName: "Refrences",
          newNode: { ...data, nodeId: edit.nodeId || "" },
        })
      );
    } else {
      dispatch(
        addTriggerNode({
          nodeId: node?.id || "",
          title: data.title,
          description: data.description,
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
            errors.title?.type === "required" ? "This field is required" : ""
          }
          label="Title"
          register={register}
          name="title"
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
