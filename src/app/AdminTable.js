"use client";

import { deleteToken } from "./auth/auth";

export default function AdminTable({ user }) {
  const handleDeconnexion = async () => {
    await deleteToken();
  };

  return (
    <div className="bg-gray-100 mt-72 flex flex-row gap-4 justify-center items-center">
      {user?.role === "Admin" ? (
        <div className="bg-white p-10 rounded shadow-md w-max h-max border border-black">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">
            Tableau {user?.name} : {user?.role}
          </h2>
          <div className="flex gap-8 justify-center flex-col items-center">
            <div className="flex gap-2">
              <button className="bg-blue-500 p-4 rounded-lg border border-black hover:bg-blue-700 hover:text-white">
                Démarrer VM 1
              </button>
              <button className="bg-blue-500 p-4 rounded-lg border border-black hover:bg-blue-700 hover:text-white">
                Démarrer VM 2
              </button>
              <button className="bg-blue-500 p-4 rounded-lg border border-black hover:bg-blue-700 hover:text-white">
                Démarrer VM 3
              </button>
            </div>
            <button
              className="bg-red-500 p-4 rounded-lg border border-black  hover:bg-red-700 hover:text-white"
              onClick={handleDeconnexion}
            >
              Se deconnecter
            </button>
          </div>
        </div>
      ) : user.role === "Apprenti" ? (
        <div className="bg-white p-10 rounded shadow-md w-max h-max border border-black">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">
            Tableau {user?.name} : {user?.role}
          </h2>
          <div className="flex gap-8 justify-center">
            <button className="bg-blue-500 p-4 rounded-lg border border-black hover:bg-blue-700 hover:text-white">
              Démarrer une VM
            </button>
            <button
              className="bg-red-500 p-4 rounded-lg border border-black  hover:bg-red-700 hover:text-white"
              onClick={handleDeconnexion}
            >
              Se deconnecter
            </button>
          </div>
        </div>
      ) : user.role === "Observateur" ? (
        <div className="bg-white p-10 rounded shadow-md w-max h-48 border border-black">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">
            Tableau {user?.name} : {user?.role}
          </h2>
          <div className="flex gap-2 justify-center flex-col items-center">
            <p className="font-semibold underline">
              Vous n&apos;avez pas de crédit pour démarrer une VM
            </p>
            <button
              className="bg-red-500 p-4 rounded-lg border border-black  hover:bg-red-700 hover:text-white"
              onClick={handleDeconnexion}
            >
              Se deconnecter
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
