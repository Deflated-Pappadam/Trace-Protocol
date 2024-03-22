import Image from "next/image";
import { mohave, pecita, poppins } from "./lib/fonts";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col overflow-x-hidden bg-[#eeecf9] ${poppins.className}`}
    >
      <section className="flex min-h-screen w-full flex-col items-center justify-between">
        <NavBar />

        <div className="flex flex-col items-center justify-center ">
          <h3 className={`p-2 text-[#7e7d86] `}>
            The crypto wallet that’ll take you places
          </h3>
          <h1 className="w-[80%] text-center text-7xl font-bold text-[#2c2250]">
            Your trusted Digisal Marketplace
          </h1>
          <button className="m-2 rounded-full bg-white px-4 py-3 text-[#34343a]">
            Explore
          </button>
        </div>
      </section>
    </main>
  );
}
