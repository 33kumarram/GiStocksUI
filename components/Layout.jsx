import React from "react";
import { SideBar } from "./SideBar";

export const Layout = () => {
  return (
    <div>
      <div>Nav1</div>
      <div>Nav2</div>
      <div className="h-screen flex flex-row justify-start">
        <SideBar />
        <div className="flex-1 p-4 border-1 border-dashed grid grid-cols-2 w-100">
          <div>col 1</div>
          <div className="grid grid-cols-2">
            <div>col2.1</div>
            <div>col2.2</div>
          </div>
        </div>
      </div>
    </div>
  );
};
