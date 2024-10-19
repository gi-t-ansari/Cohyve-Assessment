import { Button } from "@material-tailwind/react";
import React from "react";

const Manifesto = () => {
  return (
    <div className="text-center text-[#fff5d9] mt-[33%]">
      <h1 className="text-7xl font-serif">Made for Creatives</h1>
      <p className="my-4">A discovery engine for creatives</p>
      <Button className="rounded-xl normal-case p-3 bg-[#fff5d9] text-black font-serif mt-5">
        Get Inspired
      </Button>
    </div>
  );
};

export default Manifesto;
