"use client";

import NavBar from "@/app/components/NavBar";
import { poppins } from "@/app/lib/fonts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Paripp from "../../../abi/Paripp.json";
import { ethers } from "ethers";
import { useParams } from "next/navigation";
import { formatAddress } from "@/app/utils";
import { useMetaMask } from "@/app/hooks/useMetamask";

function Page() {
  const [data, setData] = useState<{
    price: string;
    tokenId: string;
    seller: string;
    owner: string;
    image: string;
    name: string;
    description: string;
  }>({
    price: "",
    tokenId: "",
    seller: "",
    owner: "",
    image: "",
    name: "",
    description: "",
  });
  const [tags, setTags] = useState<string[]>([]);
  const [fetched, setDataFetched] = useState(false);
  const tagArray = [
    "cool",
    "awesome",
    "bestseller",
    "fantastic",
    "amazing",
    "great",
    "excellent",
    "wonderful",
    "superb",
    "terrific",
    "fabulous",
    "spectacular",
    "phenomenal",
    "outstanding",
    "splendid",
    "remarkable",
    "marvelous",
    "incredible",
    "stellar",
    "exceptional",
  ];
  function shuffleArray(array: string[] | any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();
  useEffect(() => {
    const shuffledArray = shuffleArray(tagArray.slice());
    setTags([shuffledArray[0], shuffledArray[1], shuffledArray[2]]);
  }, []);

  const { id } = useParams();

  useEffect(() => {
    if (!fetched) {
      getNFTData(id as string);
    }
  }, [fetched]);

  async function getNFTData(tokenId: string) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

    let contract = new ethers.Contract(contractAddress, Paripp.abi, signer);
    var tokenURI = await contract.tokenURI(tokenId);
    const listedToken = await contract.getListedTokenForId(tokenId);
    var tokenURI = await contract.tokenURI(tokenId);
    tokenURI = process.env.NEXT_PUBLIC_GATEWAY_URL + "ipfs/" + tokenURI;
    const response = await fetch(tokenURI);
    const meta = await response.json();
    let price = ethers.formatUnits(listedToken.price.toString(), "ether");

    let item = {
      price: price,
      tokenId: tokenId,
      seller: listedToken.seller,
      owner: listedToken.owner,
      image: meta.url,
      name: meta.name,
      description: meta.description,
    };
    console.log(item);
    setData(item);
    setDataFetched(true);
  }

  async function buyNFT(tokenId: string) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;

      let contract = new ethers.Contract(contractAddress, Paripp.abi, signer);
      const salePrice = ethers.parseUnits(data.price.toString(), "ether");
      let transaction = await contract.executeSale(tokenId, {
        value: salePrice,
      });
      await transaction.wait();
      alert("You successfully bought the NFT!");
    } catch (e) {
      alert("Upload Error" + e);
    }
  }

  let itemName = data.name;
  let owner = data.owner;
  let currentOwner = data.seller;

  let imgUrl = data.image;
  let desc = data.description;
  let price = data.price;

  return (
    <main
      className={`relative flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden bg-[#f4f4fd] ${poppins.className}`}
    >
      {!fetched && (
        <div className="absolute inset-0 flex flex-col justify-center bg-red-400 text-center text-7xl">
          <h1>Fetching Data</h1>
        </div>
      )}
      <NavBar color="#000000" />

      <div className="mx-auto  flex w-[80%] flex-col">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="text-md flex w-fit items-start justify-between rounded-3xl bg-[#ffffff] px-2 py-1 text-black ">
              explore &gt; {itemName}
            </div>

            <div className="my-2 flex w-fit flex-col rounded-2xl bg-white p-4">
              <Image
                src={imgUrl}
                alt=""
                width={1080}
                height={920}
                className=" flex h-[300px] w-[300px] items-center justify-center rounded-2xl object-cover"
              />
              <h1 className="pt-2 text-4xl text-black">{itemName}</h1>
              <h1 className="pt-1 text-2xl text-black">
                Price : {price} MATIC
              </h1>
              <h2 aria-label={currentOwner} className="text-lg text-[#7e7d86]">
                Current Owner : {formatAddress(currentOwner, 8)}
              </h2>
              <h2 aria-label={owner} className="text-md text-[#7e7d86]">
                Original Owner : {formatAddress(owner, 8)}
              </h2>
              <div className="flex gap-2 py-2">
                <div className="rounded-md bg-[#eeecf9] px-2 py-1 text-sm text-black">
                  {tags[0]}
                </div>
                <div className="rounded-md bg-[#eeecf9] px-2 py-1 text-sm text-black">
                  {tags[1]}
                </div>
                <div className="rounded-md bg-[#eeecf9] px-2 py-1 text-sm text-black">
                  {tags[2]}
                </div>
              </div>
              {currentOwner.toLowerCase() != wallet.accounts[0] ? (
                <button className="rounded-md bg-[#aa99ec] px-4 py-2 transition-all hover:scale-[105%] hover:bg-[#a390ec]">
                  Buy Now
                </button>
              ) : (
                <button className="rounded-md bg-[#aa99ec] px-4 py-2 transition-all hover:scale-[105%] hover:bg-[#a390ec]">
                  Owned
                </button>
              )}
            </div>
          </div>
          <div className="flex w-[50%] flex-col items-start justify-center">
            <h1 className="pt-2 text-4xl text-black">Description</h1>
            <h2 className="pt-4 text-xl text-[#7e7d86] ">{desc}</h2>
          </div>
        </div>
      </div>
      <div>.</div>
    </main>
  );
}

export default Page;
