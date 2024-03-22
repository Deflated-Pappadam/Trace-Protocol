import Image from "next/image";
import { inter, mohave, pecita, poppins } from "./lib/fonts";
import NavBar from "./components/NavBar";
import BoxComponent from "./components/BoxComponent";

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
          <h1
            className={`w-[80%] text-center text-8xl font-semibold text-[#2c2250] ${inter.className}`}
          >
            Your trusted Digisal Marketplace
          </h1>
          <button className="m-4 rounded-full bg-white px-6 py-3 text-[#34343a]">
            Explore the Marketplace
          </button>
        </div>
        <div>.</div>
      </section>
      <section className="flex items-center justify-center gap-6">
        <BoxComponent
          bgcolor="#ab9ff2"
          textColor="#161618"
          text="Multiple ggsf sfh uahsd uoahfs iuahfajn auf asdiha."
        />
        <BoxComponent
          bgcolor="#3c315b"
          textColor="#ffffff"
          text="Multiple ggsf sfh uahsd uoahfs iuahfajn auf asdiha."
        />
        <BoxComponent
          bgcolor="#ffdadc"
          textColor="#161618"
          text="Multiple ggsf sfh uahsd uoahfs iuahfajn auf asdiha."
        />
      </section>
      <section className="flex h-full min-h-[500px] w-full items-center justify-center">
        <h1 className="text-6xl font-medium text-[#2c2250]">
          Something something for something.
        </h1>
      </section>
      <section className="flex items-center justify-center gap-6">
        <BoxComponent
          bgcolor="#ffd13f"
          textColor="#161618"
          text="Multiple ggsf sfh uahsd uoahfs iuahfajn auf asdiha."
        />
        <BoxComponent
          bgcolor="#4a87f2"
          textColor="#ffffff"
          text="Multiple ggsf sfh uahsd uoahfs iuahfajn auf asdiha."
        />
        <BoxComponent
          bgcolor="#2ebb86"
          textColor="#161618"
          text="Multiple ggsf sfh uahsd uoahfs iuahfajn auf asdiha."
        />
      </section>

      <section className="flex min-h-screen w-full flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center ">
          <h3 className={`p-2 text-[#7e7d86] `}>
            The crypto wallet that’ll take you places
          </h3>
          <h1
            className={`w-[80%] text-center text-8xl font-semibold text-[#2c2250] ${inter.className}`}
          >
            something something something 
            Q```
          </h1>
          <button className="m-4 rounded-full bg-white px-6 py-3 text-[#34343a]">
            Explore the Marketplace
          </button>
        </div>
      </section>
    </main>
  );
}
