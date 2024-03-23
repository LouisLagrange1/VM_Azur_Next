"use server";
import { sign, verify } from "jsonwebtoken";

export const createToken = async (value) => {
  return sign(value, "secret");
};

export const verifyToken = async (value) => {
  return verify(value, "secret");
};

export const getToken = async () => {
  return "test";
};
