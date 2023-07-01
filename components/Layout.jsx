import React from "react";
import { SideBar } from "./SideBar";

export const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <SideBar />
      <div className="bg-primary flex-1 p-4 text-white border-1 border-dashed"></div>
    </div>
  );
};
