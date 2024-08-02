import {
  addTriggerNode,
  editNode as editNodeReducer,
} from "@/lib/features/applet/appletSlice";
import { RootState } from "@/lib/store";
import { IEditNode, ISelectOption, NodeDataType } from "@/types/general";
import { Node } from "@xyflow/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import SelectInput from "../UI/SelectInput";

interface GetVariableFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
  edit?: IEditNode | null;
}

interface ICreateNodeInputs {
  title: string;
  variable: string;
}

export default function GetVariableFormModal({
  open,
  onClose,
  node,
  onAddNode,
  edit,
}: GetVariableFormModalProps) {
  const { variableNodes } = useSelector(
    (state: RootState) => state.appletSlice
  );

  const variablesList: ISelectOption[] = variableNodes
    ? variableNodes.map((variable) => {
        return { title: variable.name, value: variable.name };
      })
    : [];

  const [selectedVariable, setSelectedVariable] = useState<ISelectOption>(
    variablesList[0]
  );

  useEffect(() => {
    setSelectedVariable(variablesList[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableNodes]);

  const [values, setValues] = useState(
    edit
      ? {
          title: edit.title || "",
          variable: edit.variable || "",
        }
      : undefined
  );

  useEffect(() => {
    reset();
    setValues(
      edit
        ? {
            title: edit.title || "",
            variable: edit.variable || "",
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
          variable: "",
        },
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ICreateNodeInputs> = (data) => {
    if (edit) {
      reset();
      dispatch(
        editNodeReducer({
          nodeName: "getVariables",
          newNode: { ...data, nodeId: edit.nodeId || "" },
        })
      );
    } else {
      dispatch(
        addTriggerNode({
          nodeId: node?.id || "",
          title: data.title,
          variable: data.variable || "",
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
      {variablesList.length ? (
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
          {selectedVariable && (
            <SelectInput
              options={variablesList}
              selectedValue={selectedVariable}
              setSelectedValue={(option) => {
                setSelectedVariable(option);
              }}
              register={register}
              name="variableValue"
              label="Variable"
              className="mt-6"
            />
          )}
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
            <Button
              // disabled={dashboards.length ? false : true}
              className="w-[64%]"
              type="submit"
            >
              {edit ? "edit" : "Create"}
            </Button>
          </div>
        </form>
      ) : (
        <div className="mt-6 flex flex-col flex-1">
          <div>You haven&apos;t created any variable yet!</div>
          <Button
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              event.preventDefault();
              reset();
              onClose();
            }}
            className="w-[36%] mt-auto"
            variant="secondary"
          >
            Close
          </Button>
        </div>
      )}
    </Modal>
  );
}
