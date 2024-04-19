"use client";
import Image from "next/image";
import Bg from "./../../../public/The-Lifestyle-TV-Fest-Banner-2.jpg";
import Link from "next/link";
import Carousel from "react-multi-carousel";

const CategoryImage = ({ data }) => {
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
    <div className="container mx-auto">
      <div className="bg-white w-full h-auto shadow-lg md:rounded-md">
        <div className="flex flex-col items-center">
          <div className="bg-slate-400 w-full h-auto flex items-center justify-center md:rounded-md p-2">
            <h3 className="text-white block w-full text-center text-2xl md:text-3xl font-semibold">
              {data.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 w-full h-full overflow-hidden">
            {Array.from({ length: 2 }, (_, i) => (
              <Link key={i} href="/Tv">
                <Image
                  src={data.image}
                  alt={i}
                  priority={true}
                  className="w-auto h-auto cursor-pointer rounded-md"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryImage;
