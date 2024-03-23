import React from "react";
import { poppins } from "../lib/fonts";

function NavBar(props: { color: string }) {
  let logoColor = "#2f2079";

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
          <div className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black">
            About
          </div>
          <a
            href="/explore"
            className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black"
          >
            Explore
          </a>
          <div className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black">
            Contact
          </div>
        </div>
      </div>
      <button className="my-4 rounded-full bg-[#ab9ff2] px-4 py-2 text-sm">
        Download
      </button>
    </nav>
  );
}

export default NavBar;
