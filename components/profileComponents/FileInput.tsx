import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FileInput = ({handler}:{handler:(data:any)=>void}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" accept="image/*" onChange={handler}/>
    </div>
  );
};

export default FileInput;
