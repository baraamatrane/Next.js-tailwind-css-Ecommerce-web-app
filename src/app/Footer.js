import Image from "next/image";
import Payment1 from "../../public/footer1.webp";
import Payment2 from "../../public/footer2.webp";

const Footer = () => {
  const Data = [
    {
      title: "Support",
      Sub: [
        "Downloads",
        "FAQ",
        "Contact Us",
        "Troubleshooting",
        "Shipping/Warranty/Return",
        "Service Center",
      ],
    },
    {
      title: "Learn",
      Sub: [
        "Learning Center",
        "Guides & Tutorials",
        "Product Demos",
        "Webinars",
        "Customer Stories",
      ],
    },
    {
      title: "About Us",
      Sub: [
        "Our Story",
        "Vision & Mission",
        "Careers",
        "Press",
        "Blog",
        "Events",
      ],
    },
    {
      title: "Connect",
      Sub: [
        "Facebook",
        "Twitter",
        "Instagram",
        "LinkedIn",
        "YouTube",
        "Pinterest",
      ],
    },
    {
      title: "Legal",
      Sub: [
        "Privacy Policy",
        "Terms & Conditions",
        "Cookie Policy",
        "Refund Policy",
        "User Agreement",
      ],
    },
    {
      title: "Newsletter",
      Sub: ["Subscribe", "Unsubscribe", "Past Issues"],
    },
  ];
  return (
    <div className="w-full h-auto mx-auto mt-[60px]">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-gray-300 w-full h-auto p-4 flex flex-col md:flex-row items-start md:items-center md:justify-center justify-start md:gap-48 gap-7">
          <h1 className="md:text-2xl text-lg font-bold uppercase md:text-center text-start cursor-pointer text-black">
            Baraa <br /> Ecom
          </h1>
          <div className="flex flex-col w-auto items-start justify-center gap-3">
            <h4 className="text-blacks text-start text-sm md:text-base font-medium">
              Sign up for exclusive offers, original stories, events and more.
            </h4>
            <div className="flex items-start w-full">
              <input
                type="email"
                placeholder="Your email-address"
                className="p-[6px] w-full text-black text-sm md:text-base focus:outline-none"
              ></input>
              <button className="text-white text-center w-[40%] h-auto bg-black p-[6px] md:p-[4px] md:text-xl text-sm font-semibold text-centre hover:bg-[#232220] border-none">
                See more
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white container mx-auto p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-start justify-around">
          {Data.map((item, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col items-center gap-3 justify-start"
            >
              <h4 className="text-blacks text-center text-base md:text-lg font-semibold">
                {item.title}
              </h4>
              <div className="relative w-auto flex flex-1 flex-col items-center gap-1 justify-center">
                {item.Sub.map((subItem, index) => (
                  <div
                    key={index}
                    className="w-auto flex items-cente flex-col group"
                  >
                    <h3 className="text-black cursor-pointer text-start text-xs md:text-sm">
                      {subItem}
                    </h3>
                    <hr
                      className="border-black h-[1px] left-0 w-0 group-hover:w-full"
                      style={{ transition: "0.3s" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="border-gray-700 w-[90%] mt-3" />
        <div className="container mx-auto p-7 flex gap-2 md:gap-0 flex-col md:flex-row items-center justify-center">
          <Image
            src={Payment1}
            alt="Payment1"
            className="md:w-auto h-auto w-80"
          />
          <Image
            src={Payment2}
            alt="Payment2"
            className="md:w-auto h-auto w-80"
          />
        </div>
        <h4 className="text-blacks text-start text-xs md:text-sm font-light mb-2">
          © 2023-2024 , BaraaEcom.com , Profile page{" "}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
