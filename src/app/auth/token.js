"use server";

import { sign, verify } from "jsonwebtoken";

export const createToken = async (value) => {
  console.log(value);
  return sign(value, process.env.SECRET_JWT, { expiresIn: "3h" });
};

export const verifyToken = async (value) => {
  return verify(value, process.env.SECRET_JWT);
};
