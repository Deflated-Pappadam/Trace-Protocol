import React, { Dispatch, SetStateAction } from "react";
import { Check, Cross } from "../lib/icons";
import Image from "next/image";

export default function Modal(props: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  title: string;
  message: string;
  href: string;
  image?: string;
  buttonText: string;
  type: "error" | "success";
  showClose?: boolean;
}) {
  return (
    <>
      {props.open && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="z-10 flex w-[500px] flex-col items-center gap-6 rounded-xl border-2 bg-white p-5 text-center text-black ">
            <div
              style={
                props.type == "success"
                  ? { backgroundColor: "#DBF9E7" }
                  : { backgroundColor: "#FBE1E2" }
              }
              className="rounded-full p-2"
            >
              {props.type == "success" ? <Check /> : <Cross />}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{props.title}</h1>
              <p>{props.message}</p>
            </div>
            <div>
              {props.image && (
                <Image
                  src={props.image}
                  width={100}
                  height={100}
                  alt={"Modal Image"}
                />
              )}
            </div>
            <a
              href={props.href}
              className="w-full rounded-lg bg-purple-300 p-3 px-4"
            >
              {props.buttonText}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
