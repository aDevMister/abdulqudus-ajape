// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex xl:flex-col items-center xl:justify-center fixed bottom-0 w-full  xl:right-[2%] xl:top-0 xl:h-screen  gap-y-4   h-max  mt-auto  z-10 top-0 xl:w-16 xl:max-w-md">
      <div className=" flex w-full px-4 xl:flex-col items-center justify-between xl:justify-cente lg:gap-x-10 gap-y-10  md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300 `}
              href={link.path}
              key={index}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[8px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize ">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-8 absolute -right-2 " />
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          )
        })}
      </div>
    </nav>
  );
};

export default Nav;
