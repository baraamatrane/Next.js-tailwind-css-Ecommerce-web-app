"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bg from "../../../public/43834601.jpg";
import Bg1 from "../../../public/DB_CAN.jpg";
import Bg2 from "../../../public/bg.jpg";
import Carousel from "react-multi-carousel";

export default function Page() {
  const slides = [Bg, Bg1, Bg2, Bg1];
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <>
      {Loading ? (
        <div className="w-full h-[550px] animate-pulse bg-slate-500"></div>
      ) : (
        <Carousel
          additionalTransfrom={0}
          className="w-full h-auto group"
          arrows
          autoPlay
          autoPlaySpeed={4000} // Adjust the speed as needed
          centerMode={false}
          containerClass="w-full h-auto max-h-[550px]"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide}
              alt={index}
              loading="lazy"
              className="w-full h-full bg-center bg-cover duration-500"
            />
          ))}
        </Carousel>
      )}
    </>
  );
}
