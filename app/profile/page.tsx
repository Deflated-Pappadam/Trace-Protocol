"use client";
import React from "react";
import { inter, poppins } from "../lib/fonts";
import NavBar from "../components/NavBar";
import SaleBox from "../components/SaleBox";
import Image from "next/image";
import Avatars from "../components/avatar";
import { useMetaMask } from "../hooks/useMetamask";
import { formatAddress } from "../utils";

function Page() {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();
  const [_window, setWindowObject] = React.useState<any>(null);
  return (
    <main
      className={`flex min-h-screen w-full flex-col overflow-x-hidden bg-[#1c1c1c] ${poppins.className}`}
    >
      <NavBar color="#ffffff" />

      <section className="flex min-h-[200px] w-full flex-col items-start justify-center">
        <div className="flex flex-col w-[85%] mx-auto items-start  py-10">
          <div className="py-5">
          <Avatars />
          </div>

          {!hasProvider && (
            <button className="my-4  flex items-center justify-center rounded-full bg-[#ab9ff2] px-4 py-2 text-sm">
              <Image
                src="/metamask.png"
                alt=""
                width={20}
                height={20}
                className="m-1 mr-2"
              />
              <a href="https://metamask.io" target="_blank">
                Install MetaMask
              </a>
            </button>
          )}
          {hasProvider && wallet.accounts.length == 0 && (
            <button
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
            </button>
          )}
          {hasProvider && wallet.accounts.length > 0 && (
            <a
              href={`/profile`}
              // https://etherscan.io/address/${wallet.accounts[0]}
              className="text-2xl"
            >
              {formatAddress(wallet.accounts[0], 16)}
            </a>
          )}
        </div>
      </section>
      <section className="mx-auto w-[90%]">
        <a href="" className="rounded-full bg-white px-4 py-2 text-black">
          My Listings
        </a>
        <div className="flex flex-wrap items-center gap-8 p-8  ">
          <SaleBox
            imgUrl="test.svg"
            itemName="Something to sell"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est magni veniam tempore hic obcaecati!"
          />
          <SaleBox
            imgUrl="test.svg"
            itemName="Something to sell"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est magni veniam tempore hic obcaecati!"
          />
        </div>
      </section>
      <section className="mx-auto w-[90%]">
        <a href="" className="rounded-full bg-white px-4 py-2 text-black">
          My Purchases
        </a>
        <div className="flex flex-wrap items-center gap-8 p-8  ">
          <SaleBox
            imgUrl="test.svg"
            itemName="Something to sell"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est magni veniam tempore hic obcaecati!"
          />
          <SaleBox
            imgUrl="test.svg"
            itemName="Something to sell"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est magni veniam tempore hic obcaecati!"
          />
        </div>
      </section>
    </main>
  );
}

export default Page;
