"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import Mac from "../../../public/mbp16-gray.png";

const Product = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-full flex md:flex-row flex-col gap-7 mt-7 p-3">
      <div className=" flex md:flex-row flex-col-reverse items-center justify-center gap-7">
        <div className="flex md:flex-col flex-row items-center gap-3 md:overflow-hidden overflow-x-auto">
          {Array.from({ length: 7 }, (_, i) => (
            <Image
              key={i}
              src={Mac}
              alt="MACBook 2003"
              className="md:w-full w-1/5 h-auto border-black border-2 p-[1px] cursor-pointer"
            />
          ))}
        </div>
        <Carousel
          additionalTransfrom={0}
          className="flex items-center"
          arrows
          centerMode={false}
          containerClass="w-full h-auto"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
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
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Image
            src={Mac}
            alt="MACBook 2003"
            className="w-full h-auto flex bg-green-600"
          />
        </Carousel>
      </div>

      <div className="md:w-10/12 w-full flex flex-col gap-[12px]">
        <div className="flex items-start justify-between">
          <h2 className="text-black w-10/12 text-xl md:text-2xl font-semibold text-start">
            MacBook Pro 14” and 16” 256 GB PCIe-based S 3.2 GHz 8-core Apple
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-auto cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>

        <div className="flex flex-col">
          {" "}
          <div className="flex justify-between items-center p-1">
            <div className="flex flex-col items-start gap-[2px]">
              <h3 className="text-black md:text-3xl font-semibold text-2xl text-start -mb-3">
                44.44 $
              </h3>
              <span className="text-gray-400 md:text-[20px] font-medium text-[15px] text-start line-through">
                60.33 $
              </span>
            </div>

            <div className="flex gap-[1px] w-[100px] md:w-[130px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
          </div>
          <span className="md:text-[14px] font-normal text-[10px]">
            <span className="font-semibold">$268.71</span> Shipping & Import
            Fees Deposit to Morocco
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-black w-7 h-7 rounded-full cursor-pointer"></div>
          <div className="bg-red-600 w-7 h-7 rounded-full cursor-pointer"></div>
          <div className="bg-yellow-500 w-7 h-7 rounded-full cursor-pointer border-black border-2"></div>
          <div className="bg-blue-500 w-7 h-7 rounded-full cursor-pointer"></div>
          <div className="w-10 h-7 rounded-md cursor-pointer border-black border-2 text-center font-medium">
            Xl
          </div>
          <div className="w-10 h-7 rounded-md cursor-pointer border-black border-2 text-center font-medium">
            Lg
          </div>
          <div className="w-10 h-7 rounded-md cursor-pointer border-black border-2 text-center font-medium">
            Md
          </div>
          <div className="w-10 h-7 rounded-md cursor-pointer border-black border-2 text-center font-medium">
            Sm
          </div>
          <div className="w-10 h-7 rounded-md cursor-pointer border-black border-2 text-center font-medium">
            Xs
          </div>
        </div>
        <h4 className="relative px-1 text-black md:text-sm text-xs font-medium text-centre w-auto whitespace-nowrap overflow-hidden text-ellipsis">
          Apple bundles each MacBook with the OS X operating system. On each
          computer there s a dual-core processor from Intel s Intel Core brand,
          with Turbo Boost technology for increased performance. Each MacBook
          Air gets a mid-range Intel Core i5, with a processing speed of 1.7 or
          1.8 GHz. The 13-inch MacBook Pro has a 2.5- or 2.9-GHz chip, while the
          one on the 15-inch MacBook Pro is a more powerful but slower 2.3 GHz
          quad-core Intel Core i7. Peak installed memory on the MacBook Air is
          8GB, with 1600MHz DDR3 architecture.
        </h4>
        <a
          href="/Product/BestSellers"
          className="text-white text-center flex items-center justify-center gap-3 h-12 bg-black p-2 w-full rounded-full md:text-xl text-sm font-semibold text-centre hover:bg-[#29292a]"
          style={{ transition: "0.3s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>{" "}
          Shop Now
        </a>
        <a
          href="/Product/BestSellers"
          className="text-white text-center flex items-center justify-center h-12 gap-3 bg-gray-400 p-2 w-full rounded-full md:text-xl text-sm font-semibold text-centre hover:bg-[#777a81]"
          style={{ transition: "0.3s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Product;
