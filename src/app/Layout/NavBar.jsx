import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className=" px-6 py-4 bg-green-500">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <span className="text-white font-bold">VM Azure</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
