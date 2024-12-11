import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxRotateCounterClockwise,
} from "react-icons/rx";

import { FreeMode, Navigation, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Frontend Development",
    description:
      "I build dynamic, user-friendly websites and apps that offer seamless experiences across all devices, ensuring a visually appealing and interactive digital presence.",
  },
  {
    icon: <RxCrop />,
    title: "Campaign Strategy & Management",
    description:
      "I design and lead marketing campaigns that drive results, enhancing brand visibility and customer engagement through tailored strategies and data-driven insights.",
  },
  {
    icon: <RxPencil2 />,
    title: "Social Media Marketing & Growth",
    description:
      "I craft social media strategies that boost brand presence and community interaction, maximizing reach and fostering meaningful customer relationships.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]} // Fix: modules should be an array
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="h-[400px] "
          >
            <div className="bg-[rgba(64,47,123,0.15)] rounded-lg lg:px-6 lg:py-8 py-2 px-2 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-2xl text-accent mb-2">{item.icon}</div>
              <div className="">
                <div className="mb-2">{item.title}</div>
                <p className="max-w-[100%] text-left text-[12px] leading-normal ">
                  {item.description}
                </p>
              </div>
              <div className="text-[14px] lg:pt-5 mt-4 sm:mt-0 relative">
                <RxRotateCounterClockwise className="group-hover:animate-spin group-hover:text-accent  transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
