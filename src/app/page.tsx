import HomeProduct from "@/components/template/index/homeProduct/HomeProduct";
import SliceProducts from "@/components/template/index/sliceProducts/SliceProducts";

export default async function Home() {

  return (
    <div className="">
      <HomeProduct />
      <SliceProducts />
    </div>
  );
}
