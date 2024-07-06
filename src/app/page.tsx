import Board from "@/components/template/index/board/Board";
import { authUser } from "@/utils/authuser";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await authUser();
  if (!user) {
    redirect("/singup")
  
  }

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="p-4 bg-slate-300">text test</nav>
      <div className=" flex-grow mt-3">
        <Board/>
      </div>
    </div>
  );
}
