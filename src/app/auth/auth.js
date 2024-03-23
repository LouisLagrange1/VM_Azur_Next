import { users } from "../Users/users"; // Importez le tableau users
import { redirect } from "next/navigation";
import { createToken } from "./token";

export async function connexion(username, password) {
  const user = users.find(
    (u) => u.name === username && u.password === password
  );
  console.log(username, password);

  if (user) {
    console.log(user);
    const token = await createToken(user);
    console.log(token);
    cookie.set("tokenAuth", token);
    redirect("/dashboard");
  } else {
    throw new Error("Nom d'utilisateur ou mot de passe incorrect");
  }
}
