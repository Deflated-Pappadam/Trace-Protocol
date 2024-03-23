"use client";
import Image from "next/image";
import { inter, mohave, pecita, poppins } from "./lib/fonts";
import NavBar from "./components/NavBar";
import BoxComponent from "./components/BoxComponent";
import { easeInOut, motion } from "framer-motion";
export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col overflow-x-hidden bg-[#eeecf9] ${poppins.className}`}
    >
      <section className="flex min-h-screen w-full flex-col items-center justify-between">
        <NavBar color="#000000" />

        <motion.div
          className="flex flex-col items-center justify-center "
          initial={{ translateY: 40, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 10, damping: 10 }}
        >
          <h3 className={`p-2 text-[#7e7d86] `}>
            Redefining the way of consumerism
          </h3>
          <h1
            className={` w-[80%] text-center text-8xl font-semibold text-[#2c2250] ${inter.className}`}
          >
            Welcome to TRaCE protocol
          </h1>
          <a href="/explore" className="m-4 rounded-full bg-white px-6 py-3 text-[#34343a]">
            Explore the network
          </a>
        </motion.div>
        <div>.</div>
      </section>
      <section id="about" className="flex items-center justify-center gap-6">
        <BoxComponent
          bgcolor="#ab9ff2"
          textColor="#161618"
          text="Infinite products, unified under one banner & one protocol."
        />
        <BoxComponent
          bgcolor="#3c315b"
          textColor="#ffffff"
          text="Integrating physical & digital assets into a unified ecosystem."
        />
        <BoxComponent
          bgcolor="#ffdadc"
          textColor="#161618"
          text="Multi-ended model benefiting both businesses and consumers."
        />
      </section>
      <section className="flex h-full min-h-[500px] w-full items-center justify-center">
        <h1 className="text-6xl font-medium text-[#2c2250]">
          Controlled by transactions, 
          Secured by TraCE
        </h1>
      </section>
      <section className="flex items-center justify-center gap-6">
        <BoxComponent
          bgcolor="#ffd13f"
          textColor="#161618"
          text="Identify every step taken during the lifecycle of a product."
        />
        <BoxComponent
          bgcolor="#4a87f2"
          textColor="#ffffff"
          text="Explore a wider range of consumers and mediums."
        />
        <BoxComponent
          bgcolor="#2ebb86"
          textColor="#161618"
          text="Ensure transparent, traceable, and sustained transactions."
        />
      </section>

      <section className="mt-10 flex min-h-screen w-full flex-col items-center justify-between rounded-t-xl bg-[#ab9ff2]">
        <div>.</div>
        <div className="flex flex-col items-center justify-center ">
          <h3 className={`p-2 text-[#7e7d86] `}>
            Welcome to the new norm 
          </h3>
          <h1
            className={`w-[80%] text-center text-8xl font-semibold text-[#2c2250] ${inter.className}`}
          >
            Deep dive into the realm of TRaCE
          </h1>
          <button className="m-4 rounded-full bg-white px-6 py-3 text-[#34343a]">
            Explore the Marketplace
          </button>
        </div>
        <footer
          id="contact"
          className="m-5 mx-auto flex min-h-[300px] w-[90%] flex-col items-center justify-center rounded-xl bg-white"
        >
          <h1 className="text-center text-6xl font-semibold text-black">
            hello@pappadam.com
          </h1>
          <h2 className="p-2 pt-4 text-xl text-[#7e7d7e]">
            Something something something
          </h2>
          <h3 className="text-md p-2 text-[#7e7d7e]">
            ©️deflated pappadam 2024
          </h3>
        </footer>
      </section>
    </main>
  );
}
