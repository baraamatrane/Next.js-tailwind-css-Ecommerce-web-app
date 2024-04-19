"use client";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import BrandLogo from "../../../public/adidas.png";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Brand = ({ url }) => {
  const responsive = {
    superLargeDesktop: {
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
  const [Brand, setBrands] = useState([]);
  const [Loading, setLoadings] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/Brand/Get`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setBrands(data.FindBrand);
        setLoadings(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-auto relative bg-white">
      <div className="w-full flex flex-col items-center gap-12">
        <h2 className="text-black text-2xl md:text-4xl font-semibold text-center">
          Discover our <span className="text-slate-400">official stores</span>
        </h2>
        <div className="relative w-full ">
          {Loading ? (
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={1000} // Adjust this value as needed
              infinite={true}
              arrows={false}
              className="flex justify-start items-start ml-14 md:ml-[94px]"
            >
              {Brand.map((item, i) => (
                <Image
                  key={i}
                  src={`${url}/Brand/Images${item.image}`}
                  alt={item.name}
                  className="cursor-pointer bg-white relative hover:w-56 md:w-[200px] md:h-auto w-[130px] h-auto"
                  width="140"
                  height="100"
                  style={{ transition: "0.3s" }}
                />
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
          href="/Brand/BestSellers"
          className="text-white text-center bg-black p-2 md:w-[150px] w-auto rounded-full md:text-xl text-sm font-semibold text-centre hover:border-black hover:border-2 hover:bg-transparent hover:text-black"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Brand;
