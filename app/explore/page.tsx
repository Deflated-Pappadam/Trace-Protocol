import React from "react";
import { inter, poppins } from "../lib/fonts";
import NavBar from "../components/NavBar";
import SaleBox from "../components/SaleBox";

function Page() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col overflow-x-hidden bg-[#1c1c1c] ${poppins.className}`}
    >
      <NavBar color="#ffffff" />
      <section className="flex min-h-[400px] w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center ">
          <h3 className="mb-6 rounded-full bg-white px-4 py-1 text-black">
            Explore
          </h3>
          <h1
            className={` w-[100%] text-center text-6xl font-semibold text-[#ab9ff2] ${inter.className}`}
          >
            Pappadam Marketplace
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
          <SaleBox
            imgUrl="test.svg"
            itemName="Something to sell"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est magni veniam tempore hic obcaecati!"
          />
        </div>
      </section>
      <section className="mx-auto w-[90%]">
        <a href="" className="rounded-full bg-white px-4 py-2 text-black">
          Explore
        </a>
        <div className="flex flex-wrap items-center gap-8 p-8">
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
