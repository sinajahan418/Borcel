import Board from "@/components/template/index/board/Board";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="p-4 bg-slate-300">text test</nav>
      <div className=" flex-grow mt-3">

       <Board/>
      </div>
      
    </div>
  );
}
