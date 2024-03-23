import Image from "next/image";
import React from "react";

function SaleBox(props:{imgUrl:string,itemName:string,tag1:string,tag2:string,tag3:string}) {
  return (
    <div
      className={`flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl bg-[#f4f2f4] drop-shadow-2xl justify-between mb-5`}
    >
      <div className="flex flex-col">
        <Image
          src={props.imgUrl}
          alt=""
          width={1080}
          height={1080}
          className="h-[250px] object-cover"
        />
        <h1 className="p-4 text-xl text-black">{props.itemName}</h1>
      </div>
      <div className="flex p-5 gap-4">
        <div className="bg-white px-2 py-1 rounded-md text-black text-sm">{props.tag1}</div>
        <div className="bg-white px-2 py-1 rounded-md text-black text-sm">{props.tag2}</div>
        <div className="bg-white px-2 py-1 rounded-md text-black text-sm">{props.tag3}</div>
      </div>
    </div>
  );
}

export default SaleBox;
