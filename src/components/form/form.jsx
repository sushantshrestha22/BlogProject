"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { SignUpSchema } from "@/schema/SignupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Link from "next/link";

export default function SignUpForm({ title }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:8081/api/v1/auth/user/createUser", data);
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5 border rounded w-[100%] p-5">
          <div className="font-semibold text-2xl col-span-2">{title}</div>
          <div className="flex flex-col">
            <label htmlFor="firstName">FirstName:</label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              placeholder="firstName"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.firstName && (
              <span className="text-red-600 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">LastName:</label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              placeholder="lastName"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.lastName && (
              <span className="text-red-600 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="email"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="password"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              id="confirmPassword"
              type="Password"
              {...register("confirmPassword")}
              placeholder="confirmPassword"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.confirmPassword && (
              <span className="text-red-600 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              type="address"
              {...register("address")}
              placeholder="address"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.address && (
              <span className="text-red-600 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              id="mobileNumber"
              type="mobileNumber"
              {...register("mobileNumber")}
              placeholder="mobileNumber"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.mobileNumber && (
              <span className="text-red-600 text-sm">
                {errors.mobileNumber.message}
              </span>
            )}
          </div>
          <div className="col-span-2">
            <Link href="/login" className="text-blue-500">
              Already have an account? Login
            </Link>
          </div>
          <Button type="submit" className="col-span-2">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
