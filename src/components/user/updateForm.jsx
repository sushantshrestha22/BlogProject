import React from "react";
import { fetchData } from "@/utils/query/query";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const UpdateForm = async ({ id }) => {
  const data = await fetchData(`/auth/user/${id}`);
  return (
    <div>
      {data && (
        <div className="grid lg:grid-cols-2 lg:gap-6 lg:px-6 lg:py-4 max-sm:grid-cols-1 max-sm:gap-3 ">
          <div>
            <Label htmlFor="firstName">First Name:</Label>
            <Input id="firstName" defaultValue={data.firstName} />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name:</Label>
            <Input id="lastName" defaultValue={data.lastName} />
          </div>
          <div>
            <Label htmlFor="mobileNumber">Mobile Number:</Label>
            <Input id="mobileNumber" defaultValue={data.mobileNumber} />
          </div>
          <div>
            <Label htmlFor="address">Address:</Label>
            <Input id="address" defaultValue={data.address} />
          </div>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" defaultValue={data.email} />
          </div>
          <div>
            <Label htmlFor="role">Role:</Label>
            <Input id="role" defaultValue={data.role} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateForm;
