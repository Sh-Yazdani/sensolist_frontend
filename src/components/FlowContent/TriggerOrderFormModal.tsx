import { RootState } from "@/lib/store";
import { ISelectOption, NodeDataType } from "@/types/general";
import { Node } from "@xyflow/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import SelectInput from "../UI/SelectInput";

interface TriggerOrderFormModalProps {
  open: boolean;
  onClose: () => void;
  node: Node<NodeDataType> | null;
  onAddNode: () => void;
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
              disabled={dashboards.length ? false : true}
              className="w-[64%]"
              type="submit"
            >
              Create
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
