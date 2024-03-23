import Image from "next/image";
import React from "react";

function ListedBox(props: { imgUrl: string; itemName: string; desc: string }) {
  return (
    <div
      className={`mb-5 flex h-[500px] w-[350px] flex-col justify-between overflow-hidden rounded-2xl bg-[#f4f2f4] drop-shadow-2xl transition-all hover:scale-[102%]`}
    >
      <div className="flex flex-col">
        <Image
          src={props.imgUrl}
          alt=""
          width={1080}
          height={1080}
          className="h-[250px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-5">
        <h1 className=" text-xl text-black">{props.itemName}</h1>
        <h2 className=" text-md text-black">Price : 10 Matic</h2>
      </div>
      <h2 className="p-4 text-sm text-black">{props.desc}</h2>
      <button className="mx-5 rounded-md bg-[#aa99ec] px-4 py-2 transition-all hover:scale-[105%] hover:bg-[#a390ec]">
        List Now
      </button>
      <div>.</div>
    </div>
  );
}

export default ListedBox;
