"use client";

import { Separator } from "@/components/ui/separator";

export const Category = () => {
  return (
    <div className="my-5">
      <div className="flex flex-col gap-5 w-full h-full px-4 py-4  bg-violet-100">
        <h1 className="text-xl font-semibold">Kategori</h1>
        <Separator className="bg-neutral-400 -mt-2" />
        <div className="grid grid-cols-10 gap-3">
          <div className="col-span-2">
            <div className="flex flex-col gap-5 w-full h-[200px] items-center justify-center p-4 bg-violet-200 rounded-sm hover:scale-[101%] transition-all ease-in">
              <img
                className="w-[90px] h-[90px] rounded-lg mb-2"
                src="https://images.unsplash.com/photo-1486611367184-17759508999c?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="elektronik"
              />
              <p className="text-center  overflow-ellipsis "> Elektronik</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-5 w-full h-[200px] items-center justify-center p-4 bg-violet-200 rounded-sm hover:scale-[101%] transition-all ease-in">
              <img
                className="w-[90px] h-[90px] rounded-lg mb-2"
                src="https://images.unsplash.com/photo-1486611367184-17759508999c?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="komputer dan aksesoris"
              />
              <p className="text-center  overflow-ellipsis "> Komputer & Aksesoris</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-5 w-full h-[200px] items-center justify-center p-4 bg-violet-200 rounded-sm hover:scale-[101%] transition-all ease-in">
              <img
                className="w-[90px] h-[90px] rounded-lg mb-2"
                src="https://images.unsplash.com/photo-1486611367184-17759508999c?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="komputer dan aksesoris"
              />
              <p className="text-center  overflow-ellipsis "> Komputer & Aksesoris</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-5 w-full h-[200px] items-center justify-center p-4 bg-violet-200 rounded-sm hover:scale-[101%] transition-all ease-in">
              <img
                className="w-[90px] h-[90px] rounded-lg mb-2"
                src="https://images.unsplash.com/photo-1486611367184-17759508999c?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="komputer dan aksesoris"
              />
              <p className="text-center  overflow-ellipsis "> Komputer & Aksesoris</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-5 w-full h-[200px] items-center justify-center p-4 bg-violet-200 rounded-sm hover:scale-[101%] transition-all ease-in">
              <img
                className="w-[90px] h-[90px] rounded-lg mb-2"
                src="https://images.unsplash.com/photo-1486611367184-17759508999c?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="komputer dan aksesoris"
              />
              <p className="text-center  overflow-ellipsis "> Komputer & Aksesoris</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
