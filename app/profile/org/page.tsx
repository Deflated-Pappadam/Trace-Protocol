"use client";
import React, { useEffect, useState } from "react";
import { inter, poppins } from "../../lib/fonts";
import NavBar from "../../components/NavBar";
import SaleBox from "../../components/SaleBox";
import Image from "next/image";
import Avatars from "../../components/avatar";
import { useMetaMask } from "../../hooks/useMetamask";
import { formatAddress } from "../../utils";
import ListedBox from "../../components/ListedBox";
import { ethers } from "ethers";
import Paripp from "../../../abi/Paripp.json";
import { useParams } from "next/navigation";
import Spinner from "@/app/lib/icons";

function Page() {
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();
  const [_window, setWindowObject] = React.useState<any>(null);
  const [MName, setMname] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [Aadhaar, setAadhaar] = useState("");

  const [verified, setVerified] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verifyingStatus, setVerifyingStatus] = useState("GSTIN");
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

  const { id } = useParams();

  useEffect(() => {
    if (!fetched) getNFTData(id as string);
  }, []);

  async function handleSubmit() {
    setVerifying(true);
    setTimeout(() => {
       setVerifyingStatus("Aadhaar")
       setTimeout(() => {
        setVerifying(false);
        setVerified(true);
      }, 2000);
    }, 3000);

  }

  async function getNFTData(tokenId: string) {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
    let contract = new ethers.Contract(contractAddress, Paripp.abi, signer);

    let transaction = await contract.getMyNFTs();
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
    setFetched(true);
    setUpdateData(items);
  }
  return (
    <main
      className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#1c1c1c] text-white ${poppins.className}`}
    >
      {!fetched && (
        <div className="absolute inset-0 flex flex-col justify-center bg-[#e2dffe]  text-center text-7xl">
          <h1 className="text-black">Loading </h1>
        </div>
      )}

      <div className="m-auto text-black">
        {!verified && (
          <div className="m-auto flex flex-col gap-4 rounded-xl bg-white w-[500px] p-10">
            <h1 className="text-3xl text-black">Sign In</h1>
            <div className="flex flex-col gap-3">
              <label className="text-black" htmlFor="item_name">Manufacturer Name</label>
              <input
                type="text"
                placeholder="Enter the name"
                id="item_name"
                onChange={(e) => setMname(e.target.value)}
                className="rounded-md border-2 border-slate-200 p-3"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-black" htmlFor="gstin">GSTIN</label>
              <input
                type="text"
                placeholder="Enter the GSTIN"
                id="gstin"
                onChange={(e) => setGSTIN(e.target.value)}
                className="rounded-md border-2 border-slate-200 p-3"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-black" htmlFor="aadhaar_no">Proprietor Aadhaar No</label>
              <input
                type="text"
                name=""
                id="aadhaar_no"
                placeholder="Enter the Aadhaar Number"
                onChange={(e) => setAadhaar(e.target.value)}
                className="rounded-md border-2 border-slate-200 p-3"
              />
            </div>
            <button
              className="rounded-md bg-[#aa99ec] px-4 py-2 transition-all hover:scale-[105%] hover:bg-[#a390ec] text-white"
              disabled={verifying}
              onClick={handleSubmit}
            >
              {verifying ? (
                <span className="flex justify-center gap-2">
                  Verifying {verifyingStatus} <Spinner />
                </span>
              ) : (
                "Verify"
              )}
            </button>
          </div>
        )}
      </div>
      {verified && (
        <div>
          <NavBar color="#ffffff" />

          <section className="flex min-h-[200px] w-full flex-col items-start justify-center">
            <div className="mx-auto flex w-[85%] flex-col items-start  py-10">
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
                  href={`/profile/org`}
                  // https://etherscan.io/address/${wallet.accounts[0]}
                  className="text-2xl"
                >
                  {formatAddress(wallet.accounts[0], 16)}
                </a>
              )}
              <p className="text-2xl">Manufacturer: {MName}</p>
              <p className="text-2xl">GSTIN: {GSTIN}</p>
              <p className="text-2xl">Aadhaar No: {Aadhaar}</p>
            </div>
          </section>
          <section className="mx-auto w-[90%]">
            <div className="flex w-[80%] justify-between">
              <a href="" className="rounded-full bg-white px-4 py-2 text-black">
                My Products
              </a>
              <a
                href="/create"
                className="rounded-full bg-white px-4 py-2 text-black"
              >
                create +
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-8 p-8  ">
              {updateData.length == 0 && <p>List your first product</p>}
              {updateData
                .filter((v) => v.isListed)
                .map((data, i) => (
                  <SaleBox
                    key={i}
                    price={data.price}
                    imgUrl={data.image}
                    itemName={data.name}
                    desc={data.description}
                    id={data.tokenId}
                  />
                ))}
            </div>
          </section>
          {/* <section className="mx-auto w-[90%]">
            <a href="" className="rounded-full bg-white px-4 py-2 text-black">
              My Purchases
            </a>
            <div className="flex flex-wrap items-center gap-8 p-8  ">
              {updateData
                .filter((v) => !v.isListed)
                .map((data, i) => (
                  <SaleBox
                    key={i}
                    price={data.price}
                    imgUrl={data.image}
                    itemName={data.name}
                    desc={data.description}
                    id={data.tokenId}
                  />
                ))}
            </div>
          </section> */}
        </div>
      )}
    </main>
  );
}

export default Page;
