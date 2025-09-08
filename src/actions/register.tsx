
"use server";

import prisma from "@/utils/prisma";
import { IFormData } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";

export async function registerUser(formData: IFormData) {
  const { email, password, confirmPassword } = formData;

  try {
    const pwHash = await saltAndHashPassword (password)
    const user = await prisma.user.create({
      data: {
        email: email,
        password: pwHash,
      },
    });

    return user;
  } catch (error) {
    console.error("Ошибка регистрации", error);
    return { error: "Ошибка при регистрации" };
  }
}
