"use server";

import prisma from "@/utils/prisma";
import { IFormData } from "@/types/form-data";

export async function registerUser(formData: IFormData) {
  const { email, password, confirmPassword } = formData;

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return user;
  } catch (error) {
    console.error("Ошибка регистрации", error);
    return { error: "Ошибка при регистрации" };
  }
}
