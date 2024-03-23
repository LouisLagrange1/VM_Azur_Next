import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <>
      {/* <div className="bg-gray-100 h-screen flex flex-row gap-4 justify-center items-center">
        <div className="bg-white p-10 rounded shadow-md w-max h-48 border border-black">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">
            Tableau de bord de UTILISATEUR 1
          </h2>
          <div className="flex gap-2 justify-center flex-col items-center">
            <p className="font-semibold underline">
              Vous n'avez pas de crédit pour démarrer une VM
            </p>
            <Link href="/">
              <button className="bg-red-500 p-4 rounded-lg border border-black  hover:bg-red-700 hover:text-white">
                Se deconnecter
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white p-10 rounded shadow-md w-max h-max border border-black">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">
            Tableau de bord de UTILISATEUR 2
          </h2>
          <div className="flex gap-8 justify-center">
            <button className="bg-blue-500 p-4 rounded-lg border border-black hover:bg-blue-700 hover:text-white">
              Démarrer une VM
            </button>
            <Link href="/">
              <button className="bg-red-500 p-4 rounded-lg border border-black  hover:bg-red-700 hover:text-white">
                Se deconnecter
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white p-10 rounded shadow-md w-max h-max border border-black">
          <h2 className="text-2xl font-semibold mb-4 text-center text-black">
            Tableau de bord de UTILISATEUR 3
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
            <Link href="/">
              <button className="bg-red-500 p-4 rounded-lg border border-black  hover:bg-red-700 hover:text-white">
                Se deconnecter
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
}
