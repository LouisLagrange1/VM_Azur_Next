"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminTable from "../AdminTable";
import { verifyToken } from "../auth/token";

export default async function Dashboard() {
  const token = cookies().get("tokenAuth");
  if (!token) redirect("/");

  const user = await verifyToken(token?.value);

  return <AdminTable user={user} />;
}
