"use client";

import React, { ChangeEvent } from "react";
import { inter, mohave, pecita, poppins } from "../lib/fonts";
import NavBar from "../components/NavBar";
import { useMetaMask } from "../hooks/useMetamask";
import { formatAddress } from "../utils";
import Image from "next/image";
// import {db , storage} from "../utils/"

if (typeof window === "undefined") {
  /* we're on the server */
}

export default function Page() {
  const [_window, setWindowObject] = React.useState<any>(null);

  React.useEffect(() => {
    // you can access window, document here.
    setWindowObject(window);
  }, []);
  //States for form details
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [cost, setCost] = React.useState("");
  const [image, setImage] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState<Blob | MediaSource | undefined>(undefined);
  const [preview, setPreview] = React.useState("");

  React.useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const { wallet, hasProvider, isConnecting, connectMetaMask } = useMetaMask();

  const handleSubmit = () => {};

  return (
    <main
      className={`flex min-h-screen w-full flex-col overflow-x-hidden bg-[#eeecf9] ${poppins.className} text-black `}
    >
      <NavBar />
      {!hasProvider && (
        <a href="https://metamask.io" target="_blank">
          Install MetaMask
        </a>
      )}
      {_window &&
        _window.ethereum?.isMetaMask &&
        wallet.accounts.length < 1 && (
          <button disabled={isConnecting} onClick={connectMetaMask}>
            Connect MetaMask
          </button>
        )}
      {hasProvider && wallet.accounts.length > 0 && (
        <a
          className="text_link tooltip-bottom"
          href={`https://etherscan.io/address/${wallet.accounts[0]}`}
          target="_blank"
          data-tooltip="Open in Block Explorer"
        >
          {formatAddress(wallet.accounts[0])}
        </a>
      )}
      <div className="m-auto flex w-[40%] flex-col  gap-10 rounded-xl bg-white p-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="item_name">Name</label>
          <input
            type="text"
            placeholder="Enter the name"
            id="item_name"
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border-2 border-slate-200 p-3"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="item_desc">Description</label>
          <input
            type="text"
            name=""
            id="item_desc"
            placeholder="Enter the description"
            onChange={(e) => setDesc(e.target.value)}
            className="rounded-md border-2 border-slate-200 p-3"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="item_cost">price</label>
          <input
            type="text"
            name=""
            id="item_cost"
            placeholder="Enter the cost"
            onChange={(e) => setCost(e.target.value)}
            className="rounded-md border-2 border-slate-200 p-3"
          />
        </div>
        <div className="flex h-full w-full flex-col gap-2">
          <p>Upload Image</p>
          <div className="relative m-2 flex h-full w-full flex-col items-center justify-center rounded-md border-2 border-slate-200 py-5">
            <label
              className="flex h-full w-full flex-col items-center justify-center"
              htmlFor="Image_upload"
            >
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
              </svg>
              Choose Image to upload
            </label>
            <input
              type="file"
              name=""
              id="Image_upload"
              placeholder="Enter the cost"
              onChange={onSelectFile}
              className="invisible absolute h-full w-full rounded-md border-2 border-slate-200 p-3"
            />
             {selectedFile &&  <Image src={preview} width={100} height={100} alt={""} /> }
          </div>
        </div>
        <button
          className="rounded-sm bg-[#a44cd4] p-3 text-white"
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </main>
  );
}
