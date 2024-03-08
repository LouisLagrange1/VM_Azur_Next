import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className=" px-6 py-4 bg-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <span className="text-white font-semibold">VM Azure</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
