import NavBar from "@/app/components/NavBar";
import { poppins } from "@/app/lib/fonts";
import Image from "next/image";
import React from "react";

function Page() {
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

  const shuffledArray = shuffleArray(tagArray.slice());

  const tag1 = shuffledArray[0];
  const tag2 = shuffledArray[1];
  const tag3 = shuffledArray[2];
  let itemName = "Item to be sold";
  let owner = "0xufuieiwefjehd";
  let currentOwner = "0xufuieiwefjehd";

  let imgUrl = "/test.svg";
  let desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est magni veniam tempore hic obcaecati! Beatae, laboriosam maxime, quae nemo eum necessitatibus iste voluptatum enim quasi eos corporis autem officia.
Obcaecati eligendi consequatur ipsum, labore placeat similique ipsam, quam cum natus nulla culpa sint aperiam nemo molestiae alias. Autem quaerat quasi atque facilis fugit incidunt repellendus dolores nihil, laudantium exercitationem!
Aspernatur unde nisi voluptatibus ullam accusamus atque provident odit. Nihil numquam a minus qui est repellendus assumenda magni, odit iure ea libero. Quos modi, ad quis aliquid laudantium dolor magni?`;
  let price = "10";

  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden bg-[#f4f4fd] ${poppins.className}`}
    >
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
              <h2 className="text-lg text-[#7e7d86]">
                Current Owner : {currentOwner}
              </h2>
              <h2 className="text-md text-[#7e7d86]">
                Original Owner : {owner}
              </h2>
              <div className="flex gap-2 py-2">
                <div className="rounded-md bg-[#eeecf9] px-2 py-1 text-sm text-black">
                  {tag1}
                </div>
                <div className="rounded-md bg-[#eeecf9] px-2 py-1 text-sm text-black">
                  {tag2}
                </div>
                <div className="rounded-md bg-[#eeecf9] px-2 py-1 text-sm text-black">
                  {tag3}
                </div>
              </div>
              <button className="rounded-md bg-[#aa99ec] px-4 py-2 transition-all hover:scale-[105%] hover:bg-[#a390ec]">
                Buy Now
              </button>
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-start">
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
