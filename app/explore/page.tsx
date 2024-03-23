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
            <h3 className="bg-white text-black px-4 py-1 rounded-full mb-6">Explore</h3>
          <h1
            className={` w-[100%] text-center text-6xl font-semibold text-[#ab9ff2] ${inter.className}`}
          >
            Pappadam Marketplace
          </h1>
          <h2 className="text-xl p-2">something about exploring the contents</h2>
        </div>
        
      </section>
      <section className="w-[90%] mx-auto">
        <a href="" className="bg-white text-black px-4 py-2 rounded-full">Featured Sells</a>
        <div className="flex flex-wrap justify-between items-center p-8  ">
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            
        </div>
        
      </section>
      <section className="w-[90%] mx-auto">
      <a href="" className="bg-white text-black px-4 py-2 rounded-full">Explore</a>
        <div className="flex flex-wrap justify-between items-center p-8">
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            <SaleBox imgUrl="test.svg" itemName="Something to sell" tag1="tag1" tag2="tag2" tag3="tag3"/>
            
        </div>
      </section>
    </main>
  );
}

export default Page;
