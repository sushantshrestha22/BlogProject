import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const TableHeader = (props) => {
  const { value, onChange, link ,title} = props;
  return (
    <div className="md:flex md:justify-between">
      <div className="text-2xl font-bold">{title}</div>
      <div className="md:w-[50%] md:flex md:gap-2">
        <Input
          type="search"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
        <Button>
          <Link href={link}>Create</Link>
        </Button>
      </div>
    </div>
  );
};

export default TableHeader;
