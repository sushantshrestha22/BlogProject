"use client";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import {UpdateUserSchema} from "@/schema/UpdateUserSchema";
import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
import { fetchData, editData } from "@/utils/query/query";
import { redirect } from "next/navigation";

const UpdateUser = ({ id, defaultValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateUserSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    editData(`/auth/user/${id}`, data);
    redirect("/user");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 md:gap-4 max-sm:grid-cols-1 max-sm:gap-2">
          <div className="">
            <Label htmlFor="firstName">FirstName:</Label>
            <Input
              type="text"
              placeholder="firstName"
              id="firstName"
              {...register("firstName")}
              defaultValue={defaultValue.firstName}
            />

            {errors.firstName && (
              <span className="text-red-600 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="">
            <Label htmlFor="lastName">LastName:</Label>
            <Input
              type="text"
              placeholder="lastName"
              id="lastName"
              {...register("lastName")}
              defaultValue={defaultValue.lastName}
            />
            {errors.lastName && (
              <span className="text-red-600 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className="">
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              placeholder="email"
              id="email"
              {...register("email")}
              defaultValue={defaultValue.email}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* <div className="">
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              placeholder="password"
              id="password"
              {...register("password")}


            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.message}
              </span>
            )}
          </div> */}
          {/* <div className="">
            <Label htmlFor="confirmPassword">ConfirmPassword:</Label>
            <Input
              type="password"
              placeholder="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-red-600 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div> */}
          <div className="">
            <Label htmlFor="address">Address:</Label>
            <Input
              type="text"
              placeholder="address"
              id="address"
              {...register("address")}
              defaultValue={defaultValue.address}
            />
            {errors.address && (
              <span className="text-red-600 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="">
            <Label htmlFor="mobileNumber">MobileNumber:</Label>
            <Input
              type="text"
              placeholder="mobileNumber"
              id="mobileNumber"
              {...register("mobileNumber")}
              defaultValue={defaultValue.mobileNumber}
            />
            {errors.mobileNumber && (
              <span className="text-red-600 text-sm">
                {errors.mobileNumber.message}
              </span>
            )}
          </div>

          <div className="">
            <Label htmlFor="role">Role:</Label>
            <Input
              type="text"
              placeholder="role"
              id="role"
              {...register("role")}
              defaultValue={defaultValue.role}
            />
            {errors.role && (
              <span className="text-red-600 text-sm">
                {errors.role.message}
              </span>
            )}
          </div>


          <Button type="submit" className="md:col-span-2">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default UpdateUser;
