import CreateUser from "@/components/user/createForm";
import React from "react";

const Create = () => {
  return (
    <div className="max-sm:px-2 md:px-5 py-10">
      <div className="font-semibold md:text-xl md:mb-4">Create User</div>
      <CreateUser />
    </div>
  );
};

export default Create;
