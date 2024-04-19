"use client";
import Link from "next/link";

const Sidebar = ({ props, UpdateSideBar }) => {
  const toggleSubmenu = (i) => {
    const elements = document.querySelectorAll(".item" + i);
    elements.forEach((element) => {
      element.classList.toggle("hidden");
      element.classList.toggle("flex");
    });
    const arrow = document.querySelectorAll(".arrow" + i);
    arrow.forEach((element) => {
      element.classList.toggle("rotate-0");
      element.classList.toggle("rotate-90");
    });
  };

  return (
    <>
      <div
        id="sidebar"
        className={`fixed top-0 right-0 bottom-0 opacity-100 pointer-events-auto bg-white shadow-xl overflow-hidden w-[88%] md:w-[40%]
       xl:w-[25%] h-screen bg-blend-overlay ${
         props ? "left-0" : "left-[-95%]"
       }`}
        style={{ zIndex: "9999", transition: "0.4s" }}
      >
        <div
          className="absolute top-[6px] right-0 cursor-pointer"
          onClick={UpdateSideBar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            z="600"
            color="white"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>{" "}
        <div className="flex flex-col gap-4 overflow-y-auto">
          <Link href="/Account">
            <div className="bg-black hover:bg-[#2e2e2e] w-full h-11 cursor-pointer">
              <div className="flex items-center justify-start gap-2 px-8 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <h2 className="text-white text-center text-lg md:text-2xl font-semibold">
                  Hello, Barae
                </h2>
              </div>
            </div>
          </Link>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col  gap-2">
              <h3 className="text-black block w-full text-start text-xl md:text-2xl font-semibold px-9">
                Categories
              </h3>
              <div className="flex flex-col items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <div className="flex flex-col w-full gap-2" key={i}>
                    <div
                      className="flex items-center group justify-between w-full hover:bg-gray-200 h-11 cursor-pointer"
                      onClick={() => toggleSubmenu(i)}
                    >
                      <h4 className="text-black w-full text-start text-base md:text-lg font-medium px-14">
                        Electronics
                      </h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        color="gray"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-5 h-5 -pl-4 group-hover:text-gray-800 mr-3 arrow${i} transform rotate-0`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div
                      className={`hidden flex-col item${i} items-center justify-center w-full`}
                      style={{ transition: "0.4s" }}
                    >
                      <Link
                        href="/Your-Account"
                        className="w-full hover:bg-zinc-100 block"
                      >
                        <h3 className="text-black p-2 cursor-pointer text-center text-xs md:text-sm">
                          Your Account
                        </h3>
                      </Link>
                      <Link
                        href="/Your-Account"
                        className="w-full hover:bg-zinc-100 block"
                      >
                        <h3 className="text-black p-2 cursor-pointer text-center text-xs md:text-sm">
                          Your Account
                        </h3>
                      </Link>
                    </div>
                  </div>
                ))}
                <hr className="border-gray-700 w-full px-9" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col  gap-2">
              <h3 className="text-black block w-full text-start text-xl md:text-2xl font-semibold px-9">
                Help & Settings
              </h3>
              <div className="flex flex-col items-center">
                <div className="flex flex-col w-full gap-2">
                  <Link href="/Account">
                    <div className="flex items-center group justify-between w-full hover:bg-gray-200 h-11 cursor-pointer">
                      <h4 className="text-blacks w-full text-start text-base md:text-lg font-medium px-14">
                        Your Account
                      </h4>
                    </div>
                  </Link>
                  <div className="flex items-center group justify-between w-full hover:bg-gray-200 h-11 cursor-pointer">
                    <h4 className="text-blacks w-full text-start text-base md:text-lg font-medium px-14">
                      Customer Service
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar"></div>
    </>
  );
};

export default Sidebar;
