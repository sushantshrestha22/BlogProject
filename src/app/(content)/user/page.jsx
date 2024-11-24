// "use client"
import React from "react";
import Table from "@/components/table/table";
import { columns } from "./column";
import { fetchData } from "@/utils/query/query";

const User = async () => {
  const data = await fetchData("/auth/users");

  return (
    <div className="md:px-5 py-10">
      <Table columns={columns} data={data} link="user/create" title="Users"/>
    </div>
  );
};

export default User;
