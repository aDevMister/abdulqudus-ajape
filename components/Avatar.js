import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none ">
    <Image
      src={"/avatar.png"}
      width={737}
      height={678}
      alt="Profile picture"
      className="translate-z-0 w-full h-full "
    />
    {/* <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-primary/100 rounded-full z-10"></div> */}
  </div>;
};

export default Avatar;
