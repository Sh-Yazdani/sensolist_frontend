"use client";

import { ISelectOption } from "@/types/general";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../UI/Button";
import Input from "../UI/Input";
import SelectInput from "../UI/SelectInput";

interface UserManagerAddUserFormProps {
  addUser: (firstName: string, lastName: string, role: string) => void;
  closeModal: () => void;
}

interface IAddUserInputs {
  firstName: string;
  lastName: string;
  role: string;
}

export default function UserManagerAddUserForm({
  addUser,
  closeModal,
}: UserManagerAddUserFormProps) {
  const rolesList: ISelectOption[] = [
    {
      title: "role 1",
      value: "1",
    },
    {
      title: "role 2",
      value: "2",
    },
    {
      title: "role 3",
      value: "3",
    },
  ];
  const [selectedRole, setSelectedRole] = useState<ISelectOption>(rolesList[0]);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IAddUserInputs>();

  const onSubmit: SubmitHandler<IAddUserInputs> = (data) => {
    addUser(data.firstName, data.lastName, data.role);
    reset();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Add New User</div>
      <Input
        error={
          errors.firstName?.type === "required" ? "This field is required" : ""
        }
        label="First Name"
        register={register}
        name="firstName"
        className="mt-6"
      />
      <Input
        error={
          errors.lastName?.type === "required" ? "This field is required" : ""
        }
        label="Last Name"
        register={register}
        name="lastName"
        className="mt-6"
      />
      <SelectInput
        options={rolesList}
        register={register}
        name="role"
        selectedValue={selectedRole}
        setSelectedValue={setSelectedRole}
        label="Role"
        className="mt-6"
      />

      <div className="w-full flex items-center mt-6 gap-4">
        <Button
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault();
            reset();
            closeModal();
          }}
          className="w-[36%]"
          variant="secondary"
        >
          Cancel
        </Button>
        <Button className="w-[64%] mx-auto" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
}
