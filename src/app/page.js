"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast(data.username +" "+ data.email, { icon: "👏" });
    // toast(data.email, { icon: "👏" });
    // toast(data.password, { icon: "👏" });
  };

  // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className=" h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 border rounded w-[400px] p-5">
          <div className="flex flex-col ">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              {...register("username", { required: true })}
              placeholder="username"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.username && (
              <span className="text-red-600 text-sm">username is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">email is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="border bg-transparent rounded px-4 py-2"
            />
            {errors.password && (
              <span className="text-red-600 text-sm">password is required</span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
