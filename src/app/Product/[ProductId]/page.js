"use client";
import Image from "next/image";
import Mac from "../../../../public/mbp16-gray.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AboutProduct from "./AboutProduct";
import Review from "./Review";
import ReletedProduct from "./ReletedProduct";
import { useEffect, useState } from "react";
import Function from "@/app/Function";
import { TailSpin } from "react-loader-spinner";

const Page = ({ params }) => {
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
  const [Product, setProducts] = useState([]);
  const [Loading, setLoadings] = useState(false);
  const url = "https://baraa-ecom.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/Product/${params.ProductId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setProducts(data.FindProduct);
        setLoadings(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full flex flex-col gap-10">
      <div
        className={`w-full flex lg:flex-row flex-col ${
          Loading ? "" : "justify-center"
        } gap-7 mt-7 p-3`}
      >
        {Loading ? (
          <>
            <div className="w-full lg:max-w-[65%] flex lg:flex-row flex-col-reverse items-start justify-start gap-7">
              <div className="lg:w-1/12 w-full flex lg:flex-col flex-row items-center gap-3 lg:overflow-hidden overflow-x-auto">
                {Product.images.map((image, i) => (
                  <Image
                    key={i}
                    src={`${url}/Product/Images${image}`}
                    alt={Product.title}
                    width="100"
                    height="70"
                    className="lg:w-full w-1/5 h-auto  border-black border-2 p-[1px] cursor-pointer"
                  />
                ))}
              </div>
              <Carousel
                additionalTransfrom={0}
                className="w-full h-auto flex items-center"
                arrows
                centerMode={false}
                containerClass="container"
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
                  src={`${url}/Product/Images${Product.imageCover}`}
                  alt="MACBook 2003"
                  width="500"
                  height="400"
                  className="w-full h-auto flex bg-black"
                />
              </Carousel>
            </div>
            <div className="lg:w-10/12 w-full flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <h2 className="text-black w-10/12 text-xl md:text-2xl font-semibold text-start">
                  {Product.title}
                </h2>
                <svg
                  onClick={() => {
                    if (document.cookie?.token) {
                      Function.AddWishlit(Product._id);
                    }
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-auto cursor-pointer text-[#c7c7cd]"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </div>

              <div className="flex flex-col">
                {" "}
                <div className="flex justify-between items-center p-1">
                  <div className="flex flex-col items-start gap-[2px]">
                    <h3 className="text-black md:text-3xl font-semibold text-2xl text-start -mb-3">
                      {Product.price} $
                    </h3>
                    <span className="text-gray-400 md:text-[20px] font-medium text-[15px] text-start line-through">
                      {Product.priceAfterDiscount} $
                    </span>
                  </div>
                  <div className="flex gap-[1px] w-[100px] md:w-[130px]">
                    {" "}
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-20 h-20"
                        color="gold"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                          className="text-[#c7c7cd]"
                        />
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                          style={{
                            clipPath: `inset(0 ${
                              Product.ratingsAverage === 5
                                ? "0"
                                : Product.ratingsAverage > i
                                ? "0"
                                : "100%"
                            } 0 0)`,
                          }}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="md:text-[14px] font-normal text-[10px]">
                  <span className="font-semibold">$268.71</span> Shipping &
                  Import Fees Deposit to Morocco
                </span>
              </div>
              <div className="flex items-center gap-2">
                {Product.colors.map((color, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: color }}
                    className="w-7 h-7 rounded-full cursor-pointer border-black border-2"
                  ></div>
                ))}
                {/* <div className="w-10 h-7 rounded-md cursor-pointer bg-black text-white text-center font-medium">
                  Xl
                </div> */}
              </div>
              <h4 className="text-black w-full md:text-sm text-xs font-medium text-start">
                {Product.description}
              </h4>
              <a
                className="text-white text-center cursor-pointer flex items-center justify-center gap-3 h-12 bg-black p-2 w-full rounded-full md:text-xl text-sm font-semibold text-centre hover:bg-[#29292a]"
                style={{ transition: "0.3s" }}
                onClick={() => {
                  Function.AddItemCart({
                    product: Product._id,
                    color: Product.colors[0],
                    quantity: 1,
                  });
                }}
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
          </>
        ) : (
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="black"
            ariaLabel="tail-spin-loading"
            radius="5"
            wrapperStyle={{}}
            wrapperClass="flex justify-center items-center"
          />
        )}
      </div>
      {Loading ? (
        <>
          <AboutProduct />
          <Review data={Product} />
          <ReletedProduct Productid={Product.category} />
        </>
      ) : null}
    </div>
  );
};

export default Page;
