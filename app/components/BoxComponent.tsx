"use client"
import { easeInOut, motion } from "framer-motion";
import React from "react";

function BoxComponent(props: {
  bgcolor: string;
  text: string;
  textColor: string;
}) {
  const easeInOut = [0.42, 0, 0.58, 1];
  return (
    <motion.div
      initial={{ translateY: 100, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, ease: easeInOut }}
      onMouseMove={(ele) => {
        ele.currentTarget.style.transform = `translateX(-${(window.innerWidth - ele.pageX) / 40}px) translateY(${(window.innerWidth - ele.pageY) / 40}px)`;
      }}
      className="flex h-[500px] w-[400px] flex-col items-center justify-between rounded-[20px] p-5 drop-shadow-2xl "
      style={{ backgroundColor: props.bgcolor, color: props.textColor }}
    >
      <h1 className="text-4xl font-medium">{props.text}</h1>
      <div>.</div>
    </motion.div>
  );
}

export default BoxComponent;
