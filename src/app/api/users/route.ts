import { conectmongo } from "@/config/db";
import userModel from "@/models/User";

export const GET = async () => {
  try {
    await conectmongo();
    const user = await userModel.find();

    return Response.json(user, { status: 200 });
  } catch (err) {
    console.log("[customerId_GET", err);
    return Response.json({ massege: err }, { status: 510 });
  }
};
