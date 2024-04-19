"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useRouter, useRouter as useRouterNavigation } from "next/navigation";
import Function from "../Function";
import dotenv from "dotenv";
const Navbar = ({ searchParams }) => {
  const Arayy = [
    {
      Category: "Electronics",
      subcatevories: [
        "ckjdbckjdnc",
        "jhchjdbjh",
        "bckjlndkjcbkdjb",
        "hjvjhvjhbjv",
      ],
    },
    {
      Category: "Electronics",
      subcatevories: [
        "ckjdbckjdnc",
        "jhchjdbjh",
        "bckjlndkjcbkdjb",
        "hjvjhvjhbjv",
      ],
    },
    {
      Category: "Electronics",
      subcatevories: [
        "ckjdbckjdnc",
        "jhchjdbjh",
        "bckjlndkjcbkdjb",
        "hjvjhvjhbjv",
      ],
    },
    {
      Category: "Electronics",
      subcatevories: [
        "ckjdbckjdnc",
        "jhchjdbjh",
        "bckjlndkjcbkdjb",
        "hjvjhvjhbjv",
      ],
    },
    {
      Category: "Electronics",
      subcatevories: [
        "ckjdbckjdnc",
        "jhchjdbjh",
        "bckjlndkjcbkdjb",
        "hjvjhvjhbjv",
      ],
    },
    {
      Category: "Electronics",
      subcatevories: [
        "ckjdbckjdnc",
        "jhchjdbjh",
        "bckjlndkjcbkdjb",
        "hjvjhvjhbjv",
      ],
    },
    {
      Category: "Electronics",
      subcatevories: [
        "ckjdbckjdnc",
        "jhchjdbjh",
        "bckjlndkjcbkdjb",
        "hjvjhvjhbjv",
      ],
    },
    {
      Category: "Electronics",
      subcatevories: [
        "ckjdbckjdnc",
        "jhchjdbjh",
        "bckjlndkjcbkdjb",
        "hjvjhvjhbjv",
      ],
    },
  ];
  const [User, Setuser] = useState();
  const [Cart, SetCart] = useState(0);
  const [UserToggle, SetUserToggle] = useState(null);
  const [Menutoggle, SetMenutoggle] = useState("");

  const [Sidebartoggle, SetSidebartoggle] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const routerNavigation = useRouterNavigation();
  const [keyword, setKeyword] = useState(
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)?.get("keyword") || ""
      : ""
  );
  const url = "https://baraa-ecom.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/Cart/Get`, {
          credentials: "include",
        });
        const data = await res.json();
        Setuser(data);
        console.log(data);
        SetCart(data?.FindCartItem?.CartTotalItems || 0);
        SetLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const UpdateSideBar = () => {
    SetSidebartoggle((prev) => !prev);
    document.body.classList.toggle("overlay", !Sidebartoggle);
    document.querySelector(".sidebar").classList.toggle("side", !Sidebartoggle);
  };
  // redirect to page with value
  // Show result
  // make filtretion
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the user menu or sidebar
      if (
        UserToggle &&
        !document.getElementById("toggle").contains(event.target)
      ) {
        SetUserToggle(false);
      }
      if (
        Sidebartoggle &&
        !document.getElementById("sidebar").contains(event.target)
      ) {
        UpdateSideBar();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [UserToggle, Sidebartoggle]);

  return (
    <>
      <div
        className="w-full md:px-8 px-0 gap-3 flex flex-col bg-white top-0 left-0  shadow-stone-950 shadow-md sticky"
        style={{ zIndex: "5000" }}
      >
        <div className="w-full px-8 gap-3 flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <svg
                onClick={UpdateSideBar}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                cursor="pointer"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 toggle"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <Link href="/">
                <h1 className="md:text-2xl text-lg font-bold uppercase text-center items-center cursor-pointer text-black">
                  L3AZI <br /> Ecom
                </h1>
              </Link>
            </div>

            <div className="flex justify-around gap-5 items-center w-auto">
              <div className="md:flex hidden  items-center justify-start gap-4 border-b-2 border-black w-full">
                <svg
                  disabled={keyword ? false : true}
                  color="black"
                  fontSize={"12"}
                  cursor={"pointer"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => {
                    if (keyword && keyword !== "") {
                      routerNavigation.push(
                        `/Search?keyword=${encodeURI(keyword)}`
                      );
                    }
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  className="form-control outline-none text-black placeholder:text-black"
                  type="text"
                  placeholder="Search..."
                  value={keyword} // Ensure that keyword is always defined
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              {Loading ? (
                !User?.FindCartItem?.user?.firstName || User?.user ? (
                  <Link href="/Signin" className="w-full">
                    <button
                      type="button"
                      className="text-white bg-[#050708] hover:bg-[#1d2021]/90 focus:ring-4 focus:outline-none focus:ring-[#1d2021]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1d2021]/60 dark:hover:bg-[#1d2021]/80"
                    >
                      Sign In
                    </button>
                  </Link>
                ) : (
                  <div className="ml-auto z-40 w-auto w-full">
                    <div
                      className="flex cursor-pointer"
                      onClick={() => SetUserToggle((prev) => !prev)}
                    >
                      <h2 className="text-black text-start text-lg md:text-2lg font-medium">
                        {`${User?.FindCartItem?.user.firstName} ${User?.FindCartItem?.user.lastName}`}
                      </h2>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.2}
                          stroke="currentColor"
                          className="w-5 h-5 md:block hidden "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                    {UserToggle ? (
                      <div
                        className="absolute h-auto w-auto bg-white shadow-stone-950 rounded-md shadow-md flex flex-col justify-around items-centre "
                        id="toggle"
                      >
                        <div className="flex flex-col justify-around items-start">
                          <Link href="/User/Account">
                            <div className="flex justify-around items-center gap-1 cursor-pointer hover:text-gray-400 text-sm md:text-lg p-2 w-full min-h-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="md:w-6 md:h-6 h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                              <h3 className="text-black text-start text-xs md:text-lg">
                                Your Account
                              </h3>
                            </div>
                          </Link>
                          <Link href="/User/Orders">
                            <div className="flex justify-around items-center gap-1 cursor-pointer hover:text-gray-400 text-sm md:text-lg p-2 w-full min-h-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="md:w-6 md:h-6 h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                                />
                              </svg>
                              <h3 className="text-black text-start  text-xs md:text-lg">
                                Your Orders
                              </h3>
                            </div>
                          </Link>
                          <Link href="/User/Wishlist">
                            <div className="flex justify-around items-center gap-1 cursor-pointer hover:text-gray-400 text-sm md:text-lg p-2 hover:w-full hover:h-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="md:w-6 md:h-6 h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                              </svg>
                              <h3 className="text-black text-start text-xs md:text-lg">
                                Your Wishlist
                              </h3>
                            </div>
                          </Link>
                        </div>
                        <hr className="border-gray-700 w-full" />
                        <div
                          onClick={async () => {
                            const data = await Function.Logout();
                            if (data?.message === "Logout sucssufully") {
                              routerNavigation.refresh();
                              routerNavigation.push("/");
                            }
                          }}
                          className="cursor-pointer"
                        >
                          <h3 className="text-red-600 font-bold flex text-centre text-xs md:text-lg justify-center cursor-pointer p-2">
                            Log Out
                          </h3>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )
              ) : null}
              <Link href="/Cart">
                <div className="flex cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    color="black"
                    strokeWidth={1.3}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <div className="w-4 h-4 absolute ml-4 rounded-full justify-around bg-black flex items-center text-center">
                    <p className="text-white text-centre text-sm ">{Cart}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-start gap-4 border-b-2 border-black w-full mb-2">
            <svg
              color="black"
              fontSize={"12"}
              cursor={"pointer"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => {
                if (keyword && keyword !== "") {
                  routerNavigation.push(
                    `/Search?keyword=${decodeURI(keyword)}`
                  );
                }
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              className="form-control outline-none text-black placeholder:text-black"
              type="text"
              placeholder="Search..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>{" "}
        </div>
      </div>
      <Sidebar props={Sidebartoggle} UpdateSideBar={UpdateSideBar} />
    </>
  );
};

export default Navbar;
