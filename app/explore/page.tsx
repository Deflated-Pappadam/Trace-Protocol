"use client";

import React, { useState } from "react";
import { inter, poppins } from "../lib/fonts";
import NavBar from "../components/NavBar";
import SaleBox from "../components/SaleBox";
import Paripp from "../../abi/Paripp.json";
import { ethers } from "ethers";
import { shuffleArray } from "../utils";

function Page() {
  const [dataFetched, updateFetched] = useState(false);
  const [updateData, setUpdateData] = useState<
    {
      isListed: boolean;
      price: string;
      tokenId: string;
      seller: string;
      owner: string;
      image: string;
      name: string;
      description: string;
    }[]
  >([]);

  if (typeof window === "undefined") {
    /* we're on the server */
  }

  async function getAllNFTs() {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
    let contract = new ethers.Contract(contractAddress, Paripp.abi, signer);

    let transaction = await contract.getAllNFTs();
    console.log(transaction);

    const items = await Promise.all(
      transaction.map(async (i: any) => {
        var tokenURI = await contract.tokenURI(i.tokenId);
        tokenURI = process.env.NEXT_PUBLIC_GATEWAY_URL + "ipfs/" + tokenURI;

        console.log(tokenURI);
        const response = await fetch(tokenURI);
        const meta = await response.json();
        let price = ethers.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: Number.parseInt(i.tokenId),
          seller: i.seller,
          owner: i.owner,
          image: meta.url,
          name: meta.name,
          description: meta.description,
          isListed: i.currentlyListed,
        };
        console.log(item);

        return item;
      }),
    );

    updateFetched(true);
    setUpdateData(items);
  }

  if (!dataFetched) getAllNFTs();
  return (
    <main
      className={`flex min-h-screen w-full flex-col overflow-x-hidden bg-[#1c1c1c] ${poppins.className}`}
    >
      {!dataFetched && (
        <div className="absolute inset-0 flex flex-col justify-center bg-[#e2dffe]  text-center text-7xl">
          <h1 className="text-black">Fetching Data</h1>
        </div>
      )}
      <NavBar color="#ffffff" />
      <section className="flex min-h-[400px] w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center ">
          <h3 className="mb-6 rounded-full bg-white px-4 py-1 text-black">
            Explore
          </h3>
          <h1
            className={` w-[100%] text-center text-6xl font-semibold text-[#ab9ff2] ${inter.className}`}
          >
            The TRaCE Market
          </h1>
          <h2 className="p-2 text-xl">
            something about exploring the contents
          </h2>
        </div>
      </section>
      <section className="mx-auto w-[90%]">
        <a href="" className="rounded-full bg-white px-4 py-2 text-black">
          Featured Sells
        </a>
        <div className="flex flex-wrap  items-center gap-8 p-8  ">
          {updateData
            
            .filter((val, i) => val.isListed && i < 3)
            .reverse()
            .map((val) => (
              <SaleBox
                key={val.tokenId}
                id={val.tokenId}
                imgUrl={val.image}
                itemName={val.name}
                desc={val.description}
              />
            ))}
        </div>
      </section>
      <section className="mx-auto w-[90%]">
        <a href="" className="rounded-full bg-white px-4 py-2 text-black">
          Explore
        </a>
        <div className="flex flex-wrap items-center gap-8 p-8">
          {shuffleArray(updateData) .map((val) => (
            <SaleBox
              key={val.tokenId}
              id={val.tokenId}
              imgUrl={val.image}
              itemName={val.name}
              desc={val.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;
