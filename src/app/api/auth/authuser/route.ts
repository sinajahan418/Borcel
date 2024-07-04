import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { conectmongo } from "@/config/db";
import { verifyAccessToken } from "@/utils/auth";

export async function GET (){
    conectmongo()
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ name: tokenPayload.name });
    }
  }

  return Response.json({
    data: user,
  },
  
);
};
const authAdmin = async () => {
  conectmongo();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ name: tokenPayload.name });
      if (user.role == "ADMIN") {
        return user
      
      }else{
        return null
      }
    } else {
      return null;
    }
  } else {
    return null;
  }

  return user;
};

export {  authAdmin };