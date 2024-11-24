"use client";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form>
        <div className="grid md:grid-cols-2 md:gap-4 max-sm:grid-cols-1 max-sm:gap-2">
          <div className="">
            <Label htmlFor="firstName">FirstName:</Label>
            <Input
              type="text"
              placeholder="firstName"
              id="firstName"
              {...register("firstName")}
            />
          </div>
          <div className="">
            <Label htmlFor="lastName">LastName:</Label>
            <Input
              type="text"
              placeholder="lastName"
              id="lastName"
              {...register("lastName")}
            />
          </div>
          <div className="">
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              placeholder="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="">
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              placeholder="password"
              id="password"
              {...register("password")}
            />
          </div>
          <div className="">
            <Label htmlFor="confirmPassword">ConfirmPassword:</Label>
            <Input
              type="confirmPassword"
              placeholder="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
          </div>
          <div className="">
            <Label htmlFor="address">Address:</Label>
            <Input
              type="address"
              placeholder="address"
              id="address"
              {...register("address")}
            />
          </div>
          <div className="">
            <Label htmlFor="mobileNumber">MobileNumber:</Label>
            <Input
              type="mobileNumber"
              placeholder="mobileNumber"
              id="mobileNumber"
              {...register("mobileNumber")}
            />
          </div>
          <Button type="submit" className="md:col-span-2">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateUser;
