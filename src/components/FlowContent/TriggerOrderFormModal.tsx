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

interface TriggerOrderFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
  edit?: IEditNode | null;
}

interface ICreateNodeInputs {
  title: string;
  dashboard: string;
  description?: string;
}
export default function TriggerOrderFormModal({
  open,
  onClose,
  node,
  onAddNode,
  edit,
}: TriggerOrderFormModalProps) {
  const { dashboards } = useSelector(
    (state: RootState) => state.dashboardSlice
  );

  const dashboardList: ISelectOption[] = dashboards.map((dash) => {
    return { title: dash.name, value: dash.name };
  });

  const [selectedDashboard, setSelectedDashboard] = useState<ISelectOption>(
    dashboardList[0]
  );

  const [values, setValues] = useState(
    edit
      ? {
          title: edit.title,
          description: edit.description,
          dashboard: edit.dashboard || "",
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
            dashboard: edit.dashboard || "",
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
          dashboard: selectedDashboard?.value || "",
        },
  });

  console.log("erroes", errors);

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ICreateNodeInputs> = (data) => {
    console.log("submit", data);
    if (edit) {
      reset();
      dispatch(
        editNodeReducer({
          nodeName: "Trigger Orders",
          newNode: { ...data, nodeId: edit.nodeId || "" },
        })
      );
    } else {
      dispatch(
        addTriggerNode({
          nodeId: node?.id || "",
          title: data.title,
          description: data.description,
          dashboard: data.dashboard,
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
      {dashboardList.length ? (
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
            options={dashboardList}
            selectedValue={selectedDashboard}
            setSelectedValue={(option) => {
              setSelectedDashboard(option);
            }}
            register={register}
            name="dashboard"
            label="Dashboard"
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
          <div>You haven&apos;t created any dashboard yet!</div>
          <Button className="mt-auto" href="/dashboard">
            Go to dashboards
          </Button>
        </div>
      )}
    </Modal>
  );
}
