"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { LoginSchema } from "@/schema/LoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:8081/api/v1/auth/login", data);
    toast.success("Login Successfully: " + data.email);
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid row-span-4 gap-5 border rounded w-[100%] p-5">
          <div className="font-semibold text-2xl col-span-2">LogIn</div>

          <div className="flex flex-col col-span-2">
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
          <div className="flex flex-col col-span-2">
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
          <div>
            <Link href="/signup" className="text-blue-500">
              Don&apos;t have an account? SignUp
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
