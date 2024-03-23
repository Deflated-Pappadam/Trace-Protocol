"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { inter, mohave, pecita, poppins } from "../lib/fonts";
import NavBar from "../components/NavBar";
import { useMetaMask } from "../hooks/useMetamask";
import { createQr, formatAddress } from "../utils";
import Image from "next/image";
import Paripp from "../../abi/Paripp.json";
import { ethers } from "ethers";
import Spinner from "../lib/icons";
import Modal from "../components/Modal";
import { title } from "process";
// import {db , storage} from "../utils/"

if (typeof window === "undefined") {
  /* we're on the server */
}

export default function Page() {
  const [_window, setWindowObject] = useState<any>(null);

  useEffect(() => {
    // you can access window, document here.
    setWindowObject(window);
  }, []);
  //States for form details
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState(0);
  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<
    Blob | MediaSource | undefined
  >(undefined);
  const [preview, setPreview] = useState("");
  const [imgCid, setImgCid] = useState("");
  const [jsonCid, setJsonCid] = useState("");
  const [uploading, setUploading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalButtonText, setModalButtonText] = useState("");
  const [modalButtonLink, setModalButtonLink] = useState("");
  const [modalType, setModalType] = useState<"error" | "success">("success");

  useEffect(() => {
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

  const uploadFile = async (fileToUpload: any) => {
    try {
      setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      setImgCid(resData.IpfsHash);
      await uploadJson(resData.IpfsHash);
    } catch (e) {
      console.log(e);
      setUploading(false);
      showModal(
        "error",
        "Upload Failed",
        "There was some trouble while uploading",
        "/",
        "Go Back Home",
      );
    }
  };

  const uploadJson = async (imgCid: string) => {
    try {
      setUploading(true);
      if (imgCid == "") return;
      const data = JSON.stringify({
        pinataContent: {
          name: name.replace(/\s+/gi, "-").replace(/[^a-zA-Z0-9\-]/gi, ""),
          description: desc,
          external_url: process.env.NEXT_PUBLIC_GATEWAY_URL,
          image: imgCid,
          url: process.env.NEXT_PUBLIC_GATEWAY_URL + "ipfs/" + imgCid,
        },
        pinataMetadata: {
          name: `metadata-${name.replace(/\s+/gi, "-").replace(/[^a-zA-Z0-9\-]/gi, "")}.json`,
        },
      });
      const res = await fetch("/api/json", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      setJsonCid(resData.IpfsHash);
      setUploading(false);
      listNFT(resData.IpfsHash);
    } catch (e) {
      console.log(e);
      setUploading(false);
      showModal(
        "error",
        "Upload Failed",
        "There was some trouble while uploading",
        "/",
        "Go Back Home",
      );
    }
  };

  async function listNFT(metadataURL: string) {
    try {
      console.log("LISTING NFT");

      setUploading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
      // updateMessage("Uploading NFT(takes 5 mins).. please dont click anything!")

      let contract = new ethers.Contract(contractAddress, Paripp.abi, signer);

      const price = ethers.parseUnits(cost.toString(), "gwei");

      let transaction = await contract.createToken(metadataURL, price);
      await transaction.wait();
      let currentId = await contract.getCurrentToken();

      let qrCode = await createQr(
        process.env.NODE_ENV == "development"
          ? `http://localhost/item/${currentId}`
          : `http://trace-protocol.vercel.app/item/${currentId}`,
        100,
      );
      setUploading(false);
      showModal(
        "success",
        "Listing Successfull",
        "Product Is Listed Successfully",
        "/",
        "Go Back Home",
        qrCode,
      );
    } catch (e) {
      setUploading(false);

      showModal(
        "error",
        "Upload Failed",
        "There was some trouble while uploading",
        "/",
        "Go Back Home",
      );
    }
  }

  const handleSubmit = async () => {
    if (selectedFile && name != "" && desc != "" && cost != 0) {
      await uploadFile(selectedFile as Blob);
    }
  };

  const showModal = async (
    type: "success" | "error",
    title: string,
    message: string,
    href: string,
    buttonText: string,
    imgSrc?: string,
  ) => {
    setModalType(type);
    setModalTitle(title);
    setModalMessage(message);
    setModalOpen(true);
    setModalButtonText(buttonText);
    setModalButtonLink(href);
    if (imgSrc) setModalImage(imgSrc);
  };

  return (
    <main
      className={`relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#eeecf9] ${poppins.className} text-black `}
    >
      <Modal
        setOpen={setModalOpen}
        open={modalOpen}
        title={modalTitle}
        message={modalMessage}
        href={modalButtonLink}
        image={modalImage}
        buttonText={modalButtonText}
        type={modalType}
      />
      <NavBar color="#000000" />

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
          <textarea
            name=""
            id="item_desc"
            placeholder="Enter the description"
            onChange={(e) => setDesc(e.target.value)}
            className="rounded-md border-2 border-slate-200 p-3"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="item_cost">Price</label>
          <input
            type="number"
            name=""
            id="item_cost"
            placeholder="Enter the cost"
            onChange={(e) => setCost(Number.parseInt(e.target.value))}
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
            {selectedFile && preview && (
              <Image src={preview} width={100} height={100} alt={""} />
            )}
          </div>
        </div>
        <button
          className="rounded-md bg-[#aa99ec] px-4 py-2 transition-all hover:scale-[105%] hover:bg-[#a390ec]"
          disabled={uploading}
          onClick={handleSubmit}
        >
          {uploading ? (
            <span className="flex justify-center gap-2">
              Uploading <Spinner />
            </span>
          ) : (
            "Upload"
          )}
        </button>
      </div>
    </main>
  );
}
