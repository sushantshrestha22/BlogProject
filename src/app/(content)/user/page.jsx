// "use client"
import React from "react";
import Table from "@/components/table/table";
import { columns } from "./column";
import { fetchData } from "@/utils/query/query";
import Header from "@/components/navbar/navbar";

const User = async () => {
  const data = await fetchData("/auth/users");

  return (
    <div className="md:px-5 py-10">
      <Header />
      <Table columns={columns} data={data} />
    </div>
  );
};

export default User;
