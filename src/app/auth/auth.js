"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { users } from "../Users/users";
import { createToken } from "../auth/token";

export async function connexion(username, password) {
  const user = users.find(
    (u) => u.name === username && u.password === password
  );

  if (user) {
    const token = await createToken(user);
    cookies().set("tokenAuth", token);
    redirect("/dashboard");
  } else {
    throw new Error("Nom d'utilisateur ou mot de passe incorrect");
  }
}

export const deleteToken = async () => {
  cookies().delete("tokenAuth");
  redirect("/");
};
