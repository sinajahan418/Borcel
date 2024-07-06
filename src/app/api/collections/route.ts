import Collection from "@/models/Collection";
// import path from "path";
// import { writeFile } from "fs/promises";
import { conectmongo } from "@/config/db";

export async function POST(req: any) {
  try {
    conectmongo();
    const body = await req.json();
    const {name , shortDescription} = body
    // const name = formData.get("name");
    // const price = formData.get("price");
    // const shortDescription = formData.get("shortDescription");
    // const longDescription = formData.get("longDescription");
    // const weight = formData.get("weight");
    // const suitableFor = formData.get("suitableFor");
    // const smell = formData.get("smell");
    // const tags = (formData.get("tags"))
    // const img = formData.get("img");

    // const buffer = Buffer.from(await img.arrayBuffer());
    // const fillName = Date.now() + img.name;

    // await writeFile(
    //   path.join(process.cwd(), "public/uplode/" + fillName),
    //   buffer
    // );
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,ppppppppppppppppppppppppp");

    const product = await Collection.create({
      name,
      shortDescription,
    });

    return Response.json(
      { message: "Product created successfully :))"},
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function PUT(req: any) {
  try {
    // if (!img) {
    //   return Response.json({ massage: "product has not img" }, { status: 400 });
    // }

    return Response.json({ massage: "product have img " }, { status: 200 });
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  const products = await Collection.find({}, "-__v")
  return Response.json(products);
}
