import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MetaMaskContextProvider } from "./hooks/useMetamask";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRaCE Protocol",
  description: "Transparent Records and Commodity Exchange Protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <MetaMaskContextProvider>
        {children}
      </MetaMaskContextProvider>
        </body>
    </html>
  );
}
