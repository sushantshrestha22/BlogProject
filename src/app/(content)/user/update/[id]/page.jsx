import React from "react";
import UpdateForm from "@/components/user/updateForm";
import Header from "@/components/navbar/navbar";

const Update = async ({ params }) => {
  const { id } = params;

  return (
    <div className="md:px-5 md:py-10 max-sm:px-2 max-sm:py-1">
      <Header />
      {/* <h1 className="md:text-xl font-bold">User Details</h1> */}
      <UpdateForm id={id} />
    </div>
  );
};

export default Update;
