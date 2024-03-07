import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have 8 characters"),
  address: z.string().min(1, "Address is required").max(200),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, address } = userSchema.parse(body);

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }
    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, address: address },
    });

    return NextResponse.json({
      user: newUser,
      message: "user created successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
