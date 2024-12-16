import React from "react";
import BoxJopiot from "../BoxJopiot";
import Upload from "../BoxJopiot/Upload";
import Find from "../BoxJopiot/Find"
import Apply from "../BoxJopiot/Apply";

export default function Jobpilot() {
  return (
    <div className="px-[300px]  bg-blur py-20">
      <div className="px-30  py-20 bg-blur">
        <h1 className="font-bold text-3xl  text-center my-6">How jobpilot work</h1>
        <div className="flex gap-5 justify-center">
            <BoxJopiot />
            <Upload />
            <Find />
            <Apply />
        </div>
      </div>
    </div>
  );
}
