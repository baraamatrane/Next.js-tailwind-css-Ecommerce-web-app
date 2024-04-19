"use client";
import Image from "next/image";
import Wishlistimg from "../../../../public/wishlist.png";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Function from "@/app/Function";
const Components = () => {
  const [Loading, SetLoadings] = useState(false);
  const [Wishlist, SetWishlist] = useState();
  const url = "https://baraa-ecom.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/User/GetWishlist`, {
          credentials: "include",
        });
        const data = await res.json();
        SetWishlist(data.Wishlist);
        console.log(data);
        SetLoadings(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full p-4">
      <div
        className={`${
          Loading
            ? Wishlist?.length === 0
              ? " flex justify-center items-center"
              : "grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5"
            : ""
        }`}
      >
        {Loading ? (
          Wishlist?.length === 0 ? (
            <div className="flex flex-col justify-center items-center gap-5">
              <Image
                src={Wishlistimg}
                alt="Cart-Wishlistimg"
                width="130"
                height="100"
                className="w-44 h-auto bg-white"
              />
              <h2 className="text-black text-xl lg:text-2xl font-semibold text-end">
                Your Wishlist is Empty
              </h2>
            </div>
          ) : (
            Wishlist.map((item, i) => (
              <div
                key={i}
                className="flex relative flex-col items-center p-1 hover:shadow-2xl md:w-full w-[94%] md:md:rounded-md cursor-pointer"
              >
                <Image
                  src={`${url}/Product/Images${item.imageCover}`}
                  alt={item.title}
                  width="200"
                  height="100"
                  className="w-11/12 h-auto bg-center bg-cover duration-500"
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
                    </div>
                    <div
                      onClick={async () => {
                        const data = await Function.DeleteWishlit(item._id);
                        SetWishlist(data?.Wishlist);
                      }}
                      className=" absolute top-0 right-3 shadow-md flex justify-end items-center w-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-auto"
                        color="red"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>{" "}
                    </div>
                    <div className="flex gap-[1px] w-[80px] md:w-[110px]">
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
                    onClick={async () => {
                      await Function.AddItemCart({
                        product: item._id,
                        color: item.colors[0],
                        quantity: 1,
                      });
                    }}
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
            ))
          )
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
  );
};

export default Components;
