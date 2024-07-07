
import { authUser } from "@/utils/authuser";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await authUser();
  if (!user) {
    redirect("/singup");
  }

  return (
    <div className="">
     
      <div className="  mt-3 text-4xl"></div>
     
    </div>
  );
}
