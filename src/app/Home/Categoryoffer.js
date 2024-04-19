"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Carousel from "react-multi-carousel";
import Function from "@/app/Function";
const Categoryoffer = ({ data }) => {
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
  const [Success, setSuccess] = useState(false);
  const AddSuccess = () => {
    setSuccess("Product added successfully in Cart");
    setTimeout(() => {
      setSuccess(null);
    }, 2000);
  };
  const url = "https://baraa-ecom.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/Product/Get`);
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
  }, []);
  return (
    <div className="container mx-auto">
      {Success ? (
        <div
          id="alert-border-3"
          className={`flex items-center fixed top-20 left-8 z-50 p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800`}
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ms-3 text-sm font-medium">{Success}</div>
          <button
            type="button"
            className={`ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700`}
            data-dismiss-target="#alert-border-3"
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              color={`green`}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : null}
      <div className="bg-white w-full h-auto shadow-lg md:rounded-md">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-black w-full h-auto flex items-center justify-between md:rounded-md p-2">
            <h3 className="text-white block w-full text-base md:text-xl font-semibold">
              {data.title}
            </h3>
            <a
              href="/Link"
              className="text-white block w-full text-end text-lg md:text-xl font-medium underline cursor-pointer"
            >
              See More
            </a>
          </div>
          {Loading ? (
            <Carousel
              responsive={responsive}
              containerClass="flex gap-5 w-full"
            >
              {Product.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-1 hover:shadow-2xl md:w-full w-[94%] md:md:rounded-md cursor-pointer"
                >
                  <Image
                    src={`${url}/Product/Images${item.imageCover}`}
                    alt="{product.title}"
                    width="200"
                    height="140"
                    className="w-auto h-auto  bg-center bg-cover duration-500"
                  />

                  <div className="container mx-auto flex flex-1 flex-col gap-1 p-0 md:p-2">
                    <h4 className="relative px-1 text-black md:text-sm text-xs font-medium text-centre w-auto whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.title}
                    </h4>
                    <div className="flex justify-between items-center p-1">
                      <div>
                        <h3 className="text-black md:text-lg font-semibold text-sm text-start -mb-3">
                          {item.price} $
                        </h3>
                        <span className="text-gray-400 md:text-[13px] font-medium text-[9px] text-start line-through">
                          {item.priceAfterDiscount} $
                        </span>
                      </div>
                      <div className=" absolute top-3 right-3 flex justify-end items-center bg-black rounded-md w-auto">
                        <span className="text-white text-xs font-normal p-1">
                          40%
                        </span>
                      </div>
                      <div className="flex gap-[1px] w-[40px] md:w-[100px]">
                        {" "}
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-7 h-7"
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
                                  item.ratingsAverage === 5
                                    ? "0"
                                    : item.ratingsAverage > i
                                    ? "0"
                                    : "100%"
                                } 0 0)`,
                              }}
                            />
                          </svg>
                        ))}{" "}
                      </div>
                    </div>
                    <button
                      className="flex justify-center items-center gap-2 text-white text-center bg-black p-1 md:w-full w-auto rounded-md md:text-xl text-sm font-semibold text-centre hover:border-black hover:border-2 hover:bg-transparent hover:text-black"
                      onClick={async () => {
                        await Function.AddItemCart({
                          product: item._id,
                          color: item.colors[0],
                          quantity: 1,
                        });
                        AddSuccess();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>{" "}
                      Shop
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
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
      </div>
    </div>
  );
};

export default Categoryoffer;
