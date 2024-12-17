import Image from "next/image";
const Bulb = () => {
  return (
    // <div className="w-[200px] xl:w-[300px] absolute -right-16 z-10 -bottom-2 mix-blend-color-dodge  animate-pulse duration-75   ">

    <div className="absolute -left-40 -bottom-16 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-5 w-[200px] xl:w-[260px] ">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
