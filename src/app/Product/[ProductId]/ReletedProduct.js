"use client";
import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import Mac from "../../../../public/mbp16-gray.png";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { TailSpin } from "react-loader-spinner";
import Function from "@/app/Function";

const ReletedProduct = ({ Productid, SetData, SetSuccess }) => {
  const products = [
    {
      title: "Iphone 14 pro max 256Gb New version",
      price: 104.22,
      PriceDiscoust: 84.33,
      discout: 20,
      image: Mac,
    },
  ];
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
  const CreateCart = async (Getdata) => {
    const data = await Function.AddItemCart(Getdata);
    SetSuccess();
    SetData(data.CreateCartItem);
  };
  useEffect(() => {
    const fetchData = async () => {
      const Geturl = Productid
        ? `${url}/Product/Category/${Productid}`
        : `${url}/Product/Get`;
      try {
        const res = await fetch(`${Geturl}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setProducts(data.FindProduct);
        setLoadings(true);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-col items-start justify-start gap-10 p-8">
      <h2 className="text-black text-2xl md:text-4xl font-semibold text-center">
        Products related to this item :
      </h2>
      {Loading ? (
        <Carousel responsive={responsive} containerClass="flex gap-5 w-full">
          {Product.map((product, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-1 hover:shadow-2xl md:w-full w-[94%] md:md:rounded-md cursor-pointer"
            >
              <Image
                src={`${url}/Product/Images${product.imageCover}`}
                alt={product.title}
                width="150"
                height="140"
                className="w-[200px] h-auto bg-center bg-cover duration-500"
              />
              <div className="container mx-auto flex flex-1 flex-col gap-1 p-0 md:p-2">
                <h4 className="relative px-1 text-black md:text-sm text-xs font-medium text-centre w-auto whitespace-nowrap overflow-hidden text-ellipsis">
                  {product.title}
                </h4>
                <div className="flex justify-between items-center p-1">
                  <div>
                    <h3 className="text-black md:text-lg font-semibold text-sm text-start -mb-3">
                      {product.price.toFixed(2)} $
                    </h3>
                    <span className="text-gray-400 md:text-[13px] font-medium text-[9px] text-start line-through">
                      {product.priceAfterDiscount.toFixed(2)} $
                    </span>
                  </div>
                  <div className=" absolute top-3 right-3 flex justify-end items-center bg-black rounded-md w-auto">
                    <span className="text-white text-xs font-normal p-1">
                      {Math.trunc(
                        (product.price.toFixed(2) /
                          product.priceAfterDiscount.toFixed(2)) *
                          100
                      )}
                      %
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
                              product.ratingsAverage === 5
                                ? "0"
                                : product.ratingsAverage > i
                                ? "0"
                                : "100%"
                            } 0 0)`,
                          }}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() =>
                    CreateCart({
                      product: product._id,
                      color: product.colors[0],
                      quantity: 1,
                    })
                  }
                  className="flex justify-center items-center gap-2 text-white text-center bg-black p-1 md:w-full w-auto rounded-md md:text-xl text-sm font-semibold text-centre hover:border-black hover:border-2 hover:bg-transparent hover:text-black"
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

      <h2 className="text-black text-2xl md:text-4xl font-semibold text-center">
        You might also like :
      </h2>
      {Loading ? (
        <Carousel responsive={responsive} containerClass="flex gap-5 w-full">
          {Product.map((product, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-1 hover:shadow-2xl md:w-full w-[94%] md:md:rounded-md cursor-pointer"
            >
              <Image
                src={`${url}/Product/Images${product.imageCover}`}
                alt={product.title}
                width="150"
                height="140"
                className="w-[200px] h-auto bg-center bg-cover duration-500"
              />
              <div className="container mx-auto flex flex-1 flex-col gap-1 p-0 md:p-2">
                <h4 className="relative px-1 text-black md:text-sm text-xs font-medium text-centre w-auto whitespace-nowrap overflow-hidden text-ellipsis">
                  {product.title}
                </h4>
                <div className="flex justify-between items-center p-1">
                  <div>
                    <h3 className="text-black md:text-lg font-semibold text-sm text-start -mb-3">
                      {product.price.toFixed(2)} $
                    </h3>
                    <span className="text-gray-400 md:text-[13px] font-medium text-[9px] text-start line-through">
                      {product.priceAfterDiscount.toFixed(2)} $
                    </span>
                  </div>
                  <div className=" absolute top-3 right-3 flex justify-end items-center bg-black rounded-md w-auto">
                    <span className="text-white text-xs font-normal p-1">
                      {Math.trunc(
                        (product.price.toFixed(2) /
                          product.priceAfterDiscount.toFixed(2)) *
                          100
                      )}
                      %
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
                              product.ratingsAverage === 5
                                ? "0"
                                : product.ratingsAverage > i
                                ? "0"
                                : "100%"
                            } 0 0)`,
                          }}
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() =>
                    Function.AddItemCart({
                      product: product._id,
                      color: product.colors[0],
                      quantity: 1,
                    })
                  }
                  className="flex justify-center items-center gap-2 text-white text-center bg-black p-1 md:w-full w-auto rounded-md md:text-xl text-sm font-semibold text-centre hover:border-black hover:border-2 hover:bg-transparent hover:text-black"
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
  );
};

export default ReletedProduct;
