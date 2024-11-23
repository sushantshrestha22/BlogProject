import React from "react";
import { fetchData } from "@/utils/query/query";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Read = async ({ params }) => {
  const { id } = params;
  const data = await fetchData(`/auth/user/${id}`);

  return (
    <div >
      <h1 className="text-2xl font-bold">User Details</h1>

      {data && (
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:px-6 lg:py-4">
          <div>
            <Label for="firstName">First Name:</Label>
            <Input value={data.firstName} id="firstName" />
          </div>
          <div>
            <Label for="lastName">Last Name:</Label>
            <Input value={data.lastName} id="lastName" />
          </div>
          <div>
            <Label for="mobileNumber">Mobile Number:</Label>
            <Input value={data.mobileNumber} id="mobileNumber" />
          </div>
          <div>
            <Label for="address">Address:</Label>
            <Input
              value={data.address}
              id="
            address"
            />
          </div>
          <div>
            <Label for="email">Email:</Label>
            <Input value={data.email} id="email" />
          </div>
          <div>
            <Label for="role">Role:</Label>
            <Input value={data.role} id="role" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Read;
