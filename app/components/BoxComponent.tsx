import React from "react";

function BoxComponent(props: { bgcolor: string; text: string ,textColor:string}) {
  return (
    <div
      className="flex flex-col h-[500px] w-[400px] items-center justify-between rounded-[20px] p-5"
      style={{ backgroundColor: props.bgcolor ,color:props.textColor}}
    >
      <h1 className="text-4xl font-medium">{props.text}</h1>
      <div>.</div>
    </div>
  );
}

export default BoxComponent;
