import React from "react";
import UpdateForm from "@/components/user/updateForm";
import { fetchData } from "@/utils/query/query";

const Update = async ({ params }) => {
  const { id } = params;

  const data = await fetchData(`/auth/user/${id}`);

  return (
    <div className="md:px-5 md:py-10 max-sm:px-2 max-sm:py-1">
      <h1 className="md:text-xl font-bold  md:mb-4">Update User</h1>
      <UpdateForm id={id} defaultValue={data} />
    </div>
  );
};

export default Update;
