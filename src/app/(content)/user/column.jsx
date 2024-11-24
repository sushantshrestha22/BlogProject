"use client"
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEditAlt } from "react-icons/bi";
import { TiEye } from "react-icons/ti";

const columnHelper = createColumnHelper();

export const columns = [
    columnHelper.display({
      id: "index",
      cell: (info) => (
        <span className="flex justify-center items-center">
          {info.row.index + 1}
        </span>
      ),
      header: () => (
        <span className="flex items-center justify-center">S.N</span>
      ),
    }),
    // columnHelper.accessor("image", {
    //   cell: (info) => (
    //     <span className="flex items-center justify-center">
    //       <img
    //         src={info.getValue()}
    //         alt="Profile"
    //         className="w-10 h-10 rounded-full"
    //       />
    //     </span>
    //   ),
    //   header: () => (
    //     <span className="flex items-center justify-center">Image</span>
    //   ),
    // }),
    columnHelper.accessor("firstName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => (
        <span className="flex items-center justify-center">Name</span>
      ),
    }),
    columnHelper.accessor("email", {
      id: "email",
      cell: (info) => (
        <span className="italic">{info.getValue()}</span>
      ),
      header: () => (
        <span className="flex items-center justify-center">Email</span>
      ),
    }),
    columnHelper.accessor("role", {
      cell: (info) => info.getValue(),
      header: () => (
        <span className="flex items-center justify-center">Role</span>
      ),
    }),
    columnHelper.display({
      id: "actions",
      cell: ({ row }) => (
        <div className="flex justify-center space-x-2">
          <Link
            href={`user/read/${row.original.id}`}
            className="flex items-center justify-center"
          >
            <button className="text-gray-500 hover:text-black transition duration-200">
              <TiEye className="h-6 w-6" />
            </button>
          </Link>
          <Link
            href={`user/update/${row.original.id}`}
            className="flex items-center justify-center"
          >
            <button className="text-green-500 hover:text-green-700 transition duration-200">
              <BiSolidEditAlt className="h-6 w-6" />
            </button>
          </Link>
          <button
            // onClick={() => openModal(row.original.id)}
            className="text-red-500 hover:text-red-700 transition duration-200"
          >
            <AiFillDelete className="h-6 w-6" />
          </button>
        </div>
      ),
      header: () => <span className="">Actions</span>,
    }),
  ];

