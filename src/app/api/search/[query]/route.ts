import Product from "@/models/Product";
import { conectmongo } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { query: string }}) => {
  try {
    await conectmongo()

    const searchedProducts = await Product.find({
      $or: [
        { name: { $regex: params.query, $options: "i" } },
        { shortDescription: { $regex: params.query, $options: "i" } },
        { tags: { $in: [new RegExp(params.query, "i")] } } // $in is used to match an array of values
      ]
    })

    return NextResponse.json(searchedProducts, { status: 200 })
  } catch (err) {
    console.log("[search_GET]", err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export const dynamic = "force-dynamic";
