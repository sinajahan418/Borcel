import { conectmongo } from "@/config/db";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";

export async function POST(req: Request) {
  conectmongo();
  const body = await req.json();
  console.log("pppppppppppppppppppppphhhhhhhhhhhhhhhhhhh");
  const { name, phone, email, password } = body;

  // Validation (You)

  const isUserExist = await UserModel.findOne({
    $or: [{ name }, { email }, { phone }],
  });

  if (isUserExist) {
    return Response.json(
      {
        message: "The username or email or phone exist already !!",
      },
      {
        status: 422,
      }
    );
  }

  const hashedPassword = await hashPassword(password);
  const accessToken = generateAccessToken({ name });

  const users = await UserModel.find({});

  await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: users.length > 0 ? "USER" : "ADMIN",
  });

  return Response.json(
    { message: "User signed up successfully :))" },
    {
      status: 201,
      headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
    }
  );
}
