import Image from "next/image";
const Bulb = () => {
  return (
    // <div className="absolute -left-40 -bottom-16 rotate-12 mix-blend-color-dodge animate-pulse duration-75 lg:z-10 w-[200px] xl:w-[260px] ">

    <div className="w-[200px] xl:w-[300px] absolute -left-32 lg:z-10 -bottom-36 mix-blend-color-dodge  animate-pulse duration-75   ">
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
