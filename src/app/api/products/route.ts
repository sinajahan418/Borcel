import { NextRequest, NextResponse } from "next/server";

import  { conectmongo }  from "@/config/db"
import ProductModel from "@/models/Product";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req: any) {
  try {
    conectmongo();
    const formData = await req.formData();

    const name = formData.get("name");
    const price = formData.get("price");
    const shortDescription = formData.get("shortDescription");
    const longDescription = formData.get("longDescription");
    const weight = formData.get("weight");
    const suitableFor = formData.get("suitableFor");
    const smell = formData.get("smell");
    const tags = (formData.get("tags"))
    const img = formData.get("img");

    const buffer = Buffer.from(await img.arrayBuffer());
    const fillName = Date.now() + img.name;

    await writeFile(
      path.join(process.cwd(), "public/uplode/" + fillName),
      buffer
    );

    const product = await ProductModel.create({
      name,
      price,
      shortDescription,
      longDescription,
      weight,
      suitableFor,
      smell,
      tags,
      img: `http://localhost:3000/uplode/${fillName}`
    });

    return Response.json(
      { message: "Product created successfully :))", data: product },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export const GET = async (req: NextRequest) => {
  try {
    await conectmongo();

    const products = await ProductModel.find()
      .sort({ createdAt: "desc" })

    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.log("[products_GET]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const dynamic = "force-dynamic";

