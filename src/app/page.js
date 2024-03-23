"use client";
import React, { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { connexion } from "./auth/auth";

export default function Home() {
  const [username, setUsername] = useState("User1");
  const [password, setPassword] = useState("Password1");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    try {
      await connexion(username, password);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96 border border-black">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">
            Connexion
          </h2>
          <form action={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="login"
                className="block text-black text-sm font-bold mb-2"
              >
                Nom d&rsquo;utilisateur
              </label>
              <input
                type="text"
                id="login"
                name="login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-black rounded-md p-2 w-full  focus:outline-none"
                placeholder="Nom d'utilisateur"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-black text-sm font-bold mb-2"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-black rounded-md p-2 w-full focus:outline-none pr-10"
                  placeholder="Mot de passe"
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute top-3 right-4 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FaEye
                    className="absolute top-3 right-4 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full border border-black  "
              >
                Connexion
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
