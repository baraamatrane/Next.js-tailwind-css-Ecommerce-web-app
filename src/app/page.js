import Image from "next/image";
import Carousel from "./Home/Carousel";
import TopSelling from "./Home/TopSelling";
import Offer from "./Home/Offer";
import Brand from "./Home/Brand";
import Bg from "./../../public/The-Lifestyle-TV-Fest-Banner-2.jpg";
import Bg1 from "./../../public/Screenshot-268-889x420.png";
import Mac from "../../public/mbp16-gray.png";
import Iphone from "../../public/61d2f85b92b57c0004c64745.png";
import Categoryoffer from "./Home/Categoryoffer";
import CategoryImage from "./Home/CategoryImage";
import React from "react";

export default function page() {
  const data = [
    {
      ImageOffer: { title: "Our Best Tv", image: Bg },
      Offer: {
        title: "TV",
        product: {
          title: "MACBOOK 2023 New version",
          price: 444.22,
          PriceDiscoust: 334.33,
          discout: 40,
          image: Mac,
        },
      },
    },
    {
      ImageOffer: { title: "Telephony - New & Discounts", image: Bg1 },
      Offer: {
        title: "TV",
        product: {
          title: "Iphone 14 pro max 256Gb New version",
          price: 104.22,
          PriceDiscoust: 84.33,
          discout: 20,
          image: Iphone,
        },
      },
    },
  ];

  return (
    <div className="w-full flex flex-1 flex-col items-center justify-between gap-[71px]">
      <Carousel />
      <TopSelling url={process.env.BACK_END_URL} />
      <Offer />
      <Brand url={process.env.BACK_END_URL} />
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <CategoryImage data={item.ImageOffer} />
          <Categoryoffer data={item.Offer} url={process.env.BACK_END_URL} />
        </React.Fragment>
      ))}
    </div>
  );
}
