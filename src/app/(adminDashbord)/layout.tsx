import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftBar from "@/components/layout/leftBar/LeftBar";
import TopBar from "@/components/layout/topBar/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex  min-h-screen bg-slate-100">
          <LeftBar/>
          <main className=" bg-gray-200 rounded-xl shadow-xl m-6 flex-grow">
          {children}

          </main>
          </div>
      </body>
    </html>
  );
}
