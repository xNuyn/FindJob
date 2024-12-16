import React from "react";
import BoxFindJob from "../BoxFindJob/BoxFindJob";

export default function FindAJob() {
  return (
    <div className="w-[1280px] mx-auto bg-blur py-20">
      <div className="flex gap-12  justify-between items-center">
        <div>
          <div className="text-3xl font-medium tracking-wider w-80">
            Find a job that suits your interest & skills.
          </div>
          <div className="tracking-tighter mt-10 text-sm w-96">
            Aliquam vitae turpis in diam convallis finibus in at risus. <br />
            Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
          </div>
          <div className="flex gap-4 mt-10 items-center ">
            <input
              className="p-2 border border-sky-100"
              placeholder="Job tittle, Keyword..."
            />
            <div>
              <input
                className="p-2 border border-sky-100"
                placeholder="Your Location"
              />
            </div>
            <div className="p-4 text-white bg-blue-600">Find Job</div>
          </div>
          <div>
            <span>
              Suggestion: Designer,{" "}
              <span className="text-blue-400">Digital Marketing</span>, Video,
              Animation.
            </span>
          </div>

        </div>
        <div>
          <img
            className="w-492 object-cover"
            src="https://ngs-sur.com/wp-content/uploads/2023/11/CTA-foto.png"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-start ">
        <BoxFindJob so={"1,75,324"} chu={"Live Job"} imgSrc="https://th.bing.com/th/id/OIP.aoh-dxspLpdeqTIk2OLbEAAAAA?pid=ImgDet&w=150&h=150&c=7&dpr=1.3" />
        <BoxFindJob so={"97,354"} chu={"Companies"} imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5U5GnqlufyNzHWuMnisFa9u9wYTvJKPnEDIM43CBE-IP_kN3-" />
        <BoxFindJob so={"38,47,154"} chu={"Candidates"} imgSrc="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPTNDg4NCl5Q0mdL5lLbTkeU1ameoQNvCNM82RPaz3FDukgECz" />
        <BoxFindJob so={"7,532"} chu={"New Jobs"} imgSrc="https://th.bing.com/th/id/OIP.aoh-dxspLpdeqTIk2OLbEAAAAA?pid=ImgDet&w=150&h=150&c=7&dpr=1.3" />
      </div>
    </div>
  );
}
