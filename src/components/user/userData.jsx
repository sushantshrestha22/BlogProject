"use client";
import React from "react";
import { useParams } from "next/navigation";
import { fetchData } from "@/utils/query/query";


const UserData = async() => {
  const { id } = useParams();
  const data = await fetchData(`/auth/user/${id}`);

  return (
    <>
      {data && (
        <div>
          <p>{data.firstName}</p>
          <p>{data.email}</p>
          <p>{data.role}</p>
        </div>
      )}
    </>
  );
};

export default UserData;
