"use client"
import { summitAction } from "../../action/form";
import { useRef } from "react";

export default function Home() {
 const ref = useRef()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form ref={ref} action={(e)=>{summitAction(e);ref.current.reset()}}>
        <div className="bg-amber-400 m-12">

          <div>
            <label className="mx-3">Name</label>
            <input className="text-black" type="text"
              name="name"
              placeholder="Enter" />
          </div>

          <div>
            <label className="mx-3">Address</label>
            <input
              className="my-12 text-black"
              type="text"
              name="add"
              placeholder="Enter Address"
            />
          </div>


          <button className="border-white border-2 px-3 text-white bg-blue-500">Summit</button>
        </div>
      </form>
    </div>
  );
}
