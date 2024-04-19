import BG1 from "../../../public/DB_CAN.jpg";
import BG2 from "../../../public/DB.png";
import Image from "next/image";
import Link from "next/link";

const Offer = () => {
  const Offer = [BG1, BG2, BG1, BG2];

  return (
    <div className="flex flex-col items-center gap-8 w-full p-3">
      <div className="flex items-center gap-2">
        <h2 className="text-black text-2xl md:text-4xl font-semibold text-center">
          New <span className="text-slate-400">Offers</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-2">
        {Offer.map((offer, index) => (
          <Link href="/Product/BestSellers" key={index}>
            <div className="relative hover:opacity-70 transition-opacity flex items-end justify-center">
              <Image
                src={offer}
                alt={index}
                priority={true}
                className="w-full h-full bg-center bg-cover duration-500 cursor-pointer"
              />
              <button
                href="/Product/BestSellers"
                className="absolute text-black bg-[#eaeaea] hover:text-white mb-2 text-center hover:bg-black p-1 md:p-2 w-auto rounded-xl lg:text-lg text-xs font-semibold text-centre border-black border-2"
              >
                Learn more
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offer;
