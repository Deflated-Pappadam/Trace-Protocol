import React from "react";
import { poppins } from "../lib/fonts";

function NavBar() {
  return (
    <nav
      className={`mx-auto flex w-[85%] items-center justify-between p-4 text-black ${poppins.className}`}
    >
      <div className={`flex gap-12`}>
        <div className={`text-xl font-bold text-[#2f2079]`}>Cet Hack</div>
        <div className={`flex items-center gap-6 text-sm `}>
          <div>Security</div>
          <div>Learn</div>
          <div>Explore</div>
          <div>Support</div>
        </div>
      </div>
      <button className="rounded-full bg-[#ab9ff2] px-4 py-2 text-sm">
        Download
      </button>
    </nav>
  );
}

export default NavBar;
