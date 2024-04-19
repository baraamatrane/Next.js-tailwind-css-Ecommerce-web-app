import React from "react";

const AboutProduct = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-black text-xl md:text-2xl font-semibold text-start lg:px-7 px-1">
        About This Product :
      </h2>
      <ul className="lg:px-16 px-7 lg:w-1/2 w-full flex flex-col gap-6 items-center justify-start">
        <li className="text-black text-start font-medium text-sm md:text-base list-disc">
          SUPERCHARGED BY M3 PRO OR M3 MAX — The Apple M3 Pro chip, with an up
          to 12-core CPU and up to 18-core GPU, delivers amazing performance for
          demanding workflows like manipulating gigapixel panoramas or compiling
          millions of lines of code. M3 Max, with an up to 16-core CPU and up to
          40-core GPU, drives extreme performance for the most advanced
          workflows like rendering intricate 3D content or developing
          transformer models with billions of parameters.
        </li>
        <li className="text-black text-start font-medium text-sm md:text-base list-disc">
          UP TO 18 HOURS OF BATTERY LIFE — Go all day thanks to the
          power-efficient design of Apple silicon. The MacBook Pro laptop
          delivers the same exceptional performance whether it’s running on
          battery or plugged in. (Battery life varies by use and configuration.
          See apple.com/batteries for more information.)
        </li>
        <li className="text-black text-start font-medium text-sm md:text-base list-disc">
          BRILLIANT PRO DISPLAY — The 14.2-inch Liquid Retina XDR display
          features Extreme Dynamic Range, over 1000 nits of brightness for
          stunning HDR content, up to 600 nits of brightness for SDR content,
          and pro reference modes for doing your best work on the go. (The
          display has rounded corners at the top. When measured diagonally, the
          screen is 14.2 inches. Actual viewable area is less.)
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default AboutProduct;
