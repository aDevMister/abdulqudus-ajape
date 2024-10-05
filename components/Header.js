import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <>
      <header className="fixed z-10 w-full flex items-center  ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-5">
            <Link href={"/"} className="flex items-center gap-3 ">
              <h1 className="text-white text-2xl font-bold">AbdulQudus </h1>
              <h1 className="text-accent text-2xl ">Ajape </h1>
            </Link>
            <Socials />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
