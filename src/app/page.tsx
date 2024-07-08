import HomeProduct from "@/components/template/index/homeProduct/HomeProduct";
import { authUser } from "@/utils/authuser";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await authUser();
  if (!user) {
    redirect("/singup");
  }

  return (
    <div className="">
      <HomeProduct />
    </div>
  );
}
