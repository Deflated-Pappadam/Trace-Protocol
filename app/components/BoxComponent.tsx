"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function BoxComponent(props: {
  bgcolor: string;
  text: string;
  textColor: string;
  imgUrl:string;
}) {
  return (
    <motion.div
      initial={{ translateY: 40, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 10, damping: 10 }}
      className="flex h-[500px] w-[400px] flex-col items-center justify-between rounded-[20px] p-5 drop-shadow-2xl transition-all hover:scale-110 "
      style={{ backgroundColor: props.bgcolor, color: props.textColor }}
    >
      <h1 className="text-4xl font-medium">{props.text}</h1>
      <Image src={props.imgUrl} alt="" width={200} height={200}/>
    </motion.div>
  );
}

export default BoxComponent;
