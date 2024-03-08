import Navbar from "./Layout/NavBar";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4 text-center">Connexion</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="login"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nom dutilisateur
              </label>
              <input
                type="text"
                id="login"
                name="login"
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Nom d'utilisateur"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Mot de passe"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full  focus:outline-none focus:ring focus:border-blue-500"
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
