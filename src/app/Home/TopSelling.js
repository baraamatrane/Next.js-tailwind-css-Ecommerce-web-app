"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Mac from "../../../public/mbp16-gray.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
const TopSelling = ({ url }) => {
  const [Product, setProducts] = useState([]);
  const [Loading, setLoadings] = useState(false);
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

  const products = [
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
    },
    {
      image: Mac,
      title: "Iphone 12 pro max lakher nadi ba9i jdid ",
      price: 44.0,
      reducePrice: 70.0,
      quantity: 100,
      sold: 70,
      ratings: 4.5,
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

  return (
    <div className="w-full h-auto relative bg-white">
      <div className="w-full flex flex-col px-3 items-center gap-4">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            color="black"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
            />
          </svg>
          <h2 className="text-black text-2xl md:text-4xl font-semibold text-center">
            Best <span className="text-slate-400">Sellers</span>
          </h2>
        </div>
        <div className="container max-w-screen-xl flex items-center justify-center mx-auto overflow-hidden">
          {Loading ? (
            <Carousel
              responsive={responsive}
              containerClass="flex gap-5 flex justify-center items-center w-full px-2 py-2 z-10"
            >
              {Product.map((product, index) => (
                <Link
                  href={`Product/${product._id}`}
                  key={product.title}
                  className="flex flex-col items-center p-1 hover:shadow-2xl md:w-full w-[94%] md:rounded-md cursor-pointer"
                >
                  <Image
                    src={`${url}/Product/Images${product.imageCover}`}
                    alt={product.title}
                    width="150"
                    height="140"
                    className="w-auto h-auto  bg-center bg-cover duration-500"
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
                      <div className="flex gap-[1px] w-[55px] md:w-[73px]">
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
                    <div className="flex flex-1 flex-col items-start">
                      <span className="md:text-[13px] font-normal text-[9px] px-[2px]">
                        {product.sold} Remaining articles
                      </span>
                      <div className="bg-gray-200 w-full rounded-full h-[6px]">
                        <div
                          className={`bg-orange-400 opacity-${product.sold} w-[${product.sold}%] rounded-full h-[6px]`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Link>
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
        <a
          href="/Product/BestSellers"
          className="text-white text-center bg-black p-2 md:w-[150px] w-auto rounded-full md:text-xl text-sm font-semibold text-centre hover:border-black hover:border-2 hover:bg-transparent hover:text-black"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default TopSelling;
