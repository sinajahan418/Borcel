import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import NavBar from "@/components/modules/navBar/NavBar";
import Footer from "@/components/modules/footer/Footer";
import { authUser } from "@/utils/authuser";
import AosInit from "@/utils/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await authUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex flex-col min-h-screen">
          <AosInit />
          <NavBar isUser={user ? "LOGOUT" : "LOGIN"} />
          <main className=" flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
