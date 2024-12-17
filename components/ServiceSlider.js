import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
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
      className="h-[220px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            <div className="bg-[rgba(64,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] rounded-md lg:h-[40vh] md:h-[30vh] lg:mb-[50rem] p-6 transition-all duration-300">
              <div className="text-2xl  text-accent mb-2">{item.icon}</div>
              <div>
                <div className="mb-2">{item.title}</div>
                <p className="text-[12px] leading-normal ">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
