import React from "react";
import { fetchData } from "@/utils/query/query";
import { Label } from "@/components/ui/label";

const Read = async ({ params }) => {
  const { id } = params;

  const data = await fetchData(`/auth/user/${id}`);

  return (
    <div className="md:px-5 md:py-10 max-sm:px-2 max-sm:py-1">
      <div className="font-semibold md:text-xl">User Details</div>

      {data && (
        <div className="grid lg:grid-cols-2 lg:gap-6 lg:px-6 lg:py-4 max-sm:grid-cols-1 max-sm:gap-3 ">
          <div>
            <Label htmlFor="firstName">First Name:</Label>
            <div
              id="firstName"
              className="border p-2 rounded-md text-sm shadow"
            >
              {data.firstName}
            </div>
          </div>
          <div>
            <Label htmlFor="lastName">Last Name:</Label>
            <div id="lastName" className="border p-2 rounded-md text-sm shadow">
              {data.lastName}
            </div>
          </div>
          <div>
            <Label htmlFor="mobileNumber">Mobile Number:</Label>
            <div
              id="mobileNumber"
              className="border p-2 rounded-md text-sm shadow"
            >
              {data.mobileNumber}
            </div>
          </div>
          <div>
            <Label htmlFor="address">Address:</Label>
            <div id="address" className="border p-2 rounded-md text-sm shadow">
              {data.address}
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email:</Label>
            <div id="email" className="border p-2 rounded-md text-sm shadow">
              {data.email}
            </div>
          </div>
          <div>
            <Label htmlFor="role">Role:</Label>
            <div id="role" className="border p-2 rounded-md text-sm shadow">
              {data.role}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Read;
