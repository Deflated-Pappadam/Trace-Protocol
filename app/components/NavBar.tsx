import React from "react";
import { poppins } from "../lib/fonts";
import Image from "next/image";

function NavBar(props: { color: string }) {
  let logoColor = "#2f2079";
  let connected = false;

  if (props.color === "#ffffff") {
    logoColor = "#ffffff";
  }
  return (
    <nav
      className={`mx-auto flex w-[85%] items-center justify-between p-4 text-black ${poppins.className}`}
    >
      <div className={`flex gap-12`}>
        <div className={`py-4 text-xl  font-bold`} style={{ color: logoColor }}>
          Cet Hack
        </div>
        <div
          className={`flex items-center gap-6 text-sm `}
          style={{ color: props.color }}
        >
          <a
            href="/"
            className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black"
          >
            Home
          </a>
          <a
            href="/#about" className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black">
            About
          </a>
          <a
            href="/explore"
            className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black"
          >
            Explore
          </a>
          <a
            href="/#contact" className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black">
            Contact
          </a>
        </div>
      </div>
      {connected ? (
        <button className="my-4  flex items-center justify-center rounded-full bg-[#ab9ff2] px-4 py-2 text-sm">
          <Image
            src="/metamask.png"
            alt=""
            width={20}
            height={20}
            className="m-1 mr-2"
          />
           Profile
        </button>
      ) : (
        <button className="my-4  flex items-center justify-center rounded-full bg-[#ab9ff2] px-4 py-2 text-sm">
          <Image
            src="/metamask.png"
            alt=""
            width={20}
            height={20}
            className="m-1 mr-2"
          />
         Connect Metamask
        </button>
      )}
    </nav>
  );
}

export default NavBar;
