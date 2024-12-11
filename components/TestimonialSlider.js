import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// Icons
import { FaQuoteLeft } from "react-icons/fa";

// Swiper modules
import { Navigation, Pagination } from "swiper";

const TestimonialSlider = () => {
  const testimonialSlider = [
    {
      image: "/taofeeq.jpg",
      name: "Taofeeq Kolapo",
      position: "Software Developer",
      message:
        "I am writing to wholeheartedly recommend Abdulqudus Ajape, a talented and exceptional frontend developer with whom I have had the pleasure of working on several projects. Abdulqudus's technical expertise, work ethic and dedication to delivering high-quality results make him an invaluable asset to any team...",
    },
    {
      image: "/honor.jpg",
      name: "Faruq Olaniyi Gbadegesin",
      position: "Software Engineer | CEO Dakieo Farm",
      message:
        "I am writing to enthusiastically recommend AbdulQudus Ajape for any frontend development opportunities that may come his way. I had the pleasure of working closely with AbdulQudus Ajape on a recent project and I can confidently say that his skills, dedication and professionalism greatly contributed to our team's success...",
    },

  ];

  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px] "
    >
      {testimonialSlider.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-[70vh] px-12">
            <div className="w-full max-w-[300px] flex flex-col items-center relative mx-auto md:mx-0">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className="rounded-full"
                  />
                </div>
                <div className="text-lg font-medium">{person.name}</div>
                <div className="text-sm uppercase font-light tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center relative md:pl-10">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl text-white/20 mx-auto md:mx-0" />
              </div>
              <div className="text-base xl:text-lg text-center md:text-left leading-relaxed">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
