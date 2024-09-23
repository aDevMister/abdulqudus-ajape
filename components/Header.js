import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
        <div className="container mx-auto">
          <div>
            <Link href={"/"} className="flex items-center gap-5 ">
              <h1 className="text-white text-4xl font-bold">AbdulQudus </h1>
              <h1 className="text-accent text-4xl ">Ajape </h1>
            </Link>
            <Socials />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
