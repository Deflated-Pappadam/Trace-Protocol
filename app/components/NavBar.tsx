"use client";
import React from "react";
import { poppins } from "../lib/fonts";
import Image from "next/image";
import { useMetaMask } from "../hooks/useMetamask";
import { formatAddress } from "../utils";

function NavBar(props: { color: "#000000" | "#ffffff" }) {
  let logoColor = "#2f2079";
  let connected = false;
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();
  const [_window, setWindowObject] = React.useState<any>(null);
  if (props.color === "#ffffff") {
    logoColor = "#ffffff";
  }

  return (
    <nav
      className={`mx-auto flex w-[85%] items-center justify-between p-4 text-black ${poppins.className}`}
    >
      <div className={`flex gap-12`}>
        <div className={`py-4 text-xl  font-bold`} style={{ color: logoColor }}>
          TRaCE
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
            href="/#about"
            className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black"
          >
            About
          </a>
          <a
            href="/explore"
            className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black"
          >
            Explore
          </a>
          <a
            href="/#contact"
            className="group rounded-full px-4 py-2 transition-all duration-150 hover:bg-[#e2dffe] hover:text-black"
          >
            Contact
          </a>
        </div>
      </div>

      {!hasProvider && (
        <a
          href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?pli=1"
          className="my-4  flex items-center justify-center rounded-full bg-[#ab9ff2] px-4 py-2 text-sm"
        >
          <Image
            src="/metamask.png"
            alt=""
            width={20}
            height={20}
            className="m-1 mr-2"
          />
          Install Metamask
        </a>
      )}
      {hasProvider && wallet.accounts.length == 0 && (
        <div className="flex gap-2">
          {" "}
          {/* <button
            disabled={isConnecting}
            onClick={connectMetaMask}
            className="my-4  flex items-center justify-center rounded-full bg-[#ab9ff2] px-4 py-2 text-sm"
          >
            <Image
              src="/metamask.png"
              alt=""
              width={20}
              height={20}
              className="m-1 mr-2"
            />
            Connect Metamask
          </button> */}
          <a
            href="/profile/org"
            className="my-4  flex items-center justify-center rounded-full bg-[#ba75e8] px-4 py-2 text-sm"
          >
            Login As Manufacturer
          </a>
        </div>
      )}
      {hasProvider && wallet.accounts.length > 0 && (
        <a
          href={`/profile`}
          // https://etherscan.io/address/${wallet.accounts[0]}
          className="my-4  flex items-center justify-center rounded-full bg-[#ab9ff2] px-4 py-2 text-sm"
        >
          <Image
            src="/metamask.png"
            alt=""
            width={20}
            height={20}
            className="m-1 mr-2"
          />

          {formatAddress(wallet.accounts[0], 8)}
        </a>
      )}
    </nav>
  );
}

export default NavBar;
