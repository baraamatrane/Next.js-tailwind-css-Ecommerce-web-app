"use client";

import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const url = "http://localhost:4000";
const Review = ({ data }) => {
  const Data = [
    { numbre: 433, numStar: 5 },
    { numbre: 324, numStar: 4 },
    { numbre: 204, numStar: 3 },
    { numbre: 134, numStar: 2 },
    { numbre: 35, numStar: 1 },
  ];
  const Reviews = [
    {
      author: "Baraa L3azi",
      date: "2/19/2024",
      text: "Computer turned on and set up just fine. Installed a few games and once the game got past the first splash screen the computer restarted. Happened with every game I tried. Also one out of seven fans didnt work and tech support said that was causing it to overheat. Highly dissatisfied. Will change review if replacement is what was advertised but not getting my hopes up.",
      star: 4,
    },
    {
      author: "Baraa L3azi",
      date: "2/19/2024",
      text: "Computer turned on and set up just fine. Installed a few games and once the game got past the first splash screen the computer restarted. Happened with every game I tried. Also one out of seven fans didnt work and tech support said that was causing it to overheat. Highly dissatisfied. Will change review if replacement is what was advertised but not getting my hopes up.",
      star: 4,
    },
    {
      author: "Baraa L3azi",
      date: "2/19/2024",
      text: "Computer turned on and set up just fine. Installed a few games and once the game got past the first splash screen the computer restarted. Happened with every game I tried. Also one out of seven fans didnt work and tech support said that was causing it to overheat. Highly dissatisfied. Will change review if replacement is what was advertised but not getting my hopes up.",
      star: 4,
    },
    {
      author: "Baraa L3azi",
      date: "2/19/2024",
      text: "Computer turned on and set up just fine. Installed a few games and once the game got past the first splash screen the computer restarted. Happened with every game I tried. Also one out of seven fans didnt work and tech support said that was causing it to overheat. Highly dissatisfied. Will change review if replacement is what was advertised but not getting my hopes up.",
      star: 4,
    },
  ];
  const [Review, setReviews] = useState([]);
  const [Loading, setLoadings] = useState(false);
  const [ReviewPage, setReviewPage] = useState(1);
  const url = "https://baraa-ecom.onrender.com";
  const getReviews = async (id, page) => {
    console.log(page);
    try {
      const res = await fetch(`${url}/Review/${id}?page=${page}&limit=4`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setReviews(data.FindReview);
      setLoadings(true);
      console.log(data.FindReview);
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  };
  useEffect(() => {
    getReviews(data._id, ReviewPage);
  }, []);
  return (
    <div className="w-full h-auto flex flex-col p-2 gap-8">
      {" "}
      <h2 className="text-black text-xl md:text-2xl font-semibold text-start lg:px-7 px-1">
        Ratings & Reviews ({data.ratingsQuantity}) :
      </h2>
      {data.ratingsQuantity === 0 ? (
        <h1 className="md:text-4xl text-2xl font-semibold text-center items-center text-black">
          There is no Review yet !
        </h1>
      ) : (
        <div className="w-full md:flex-row flex-col p-2 flex md:items-start items-center justify-center gap-2">
          {" "}
          <div className="w-1/2 flex flex-col items-center justify-center gap-3">
            <div className="w-full flex flex-col items-center justify-center md:gap-3 gap-0 -mb-3">
              <h1 className="md:text-6xl text-3xl font-semibold uppercase text-center items-center cursor-pointer text-black">
                {data.ratingsAverage} / 5.0
              </h1>
              <div className="flex w-[140px] md:w-[230px] h-auto md:-mt-4">
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
                          data.ratingsAverage === 5
                            ? "0"
                            : data.ratingsAverage > i
                            ? "0"
                            : "100%"
                        } 0 0)`,
                      }}
                    />
                  </svg>
                ))}
              </div>
            </div>
            <hr className="border-gray-700 md:w-1/2 w-11/12 rotate-0" />
            <div className="w-full flex flex-col justify-center gap-1 mt-1">
              {Data.map((data) => (
                <div
                  className="flex items-center justify-center gap-3"
                  key={data.numbre}
                >
                  <h4 className="text-black text-start text-lg md:text-xl font-medium">
                    ({data.numbre})
                  </h4>
                  <div className="flex items-start justify-start w-[120px] md:w-[180px] h-auto">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                        color={`${
                          data.numStar === 5
                            ? "gold"
                            : data.numStar > i
                            ? "gold"
                            : "#c7c7cd"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {Loading ? (
            Review.length === 0 ? (
              <h1 className="md:text-4xl text-2xl font-semibold text-center items-center text-black">
                There is no client comment yet !
              </h1>
            ) : (
              <div className="w-full h-auto flex flex-col gap-6 items-center justify-center">
                <div className="w-full max-h-[50%] overflow-hidden grid grid-cols-1 gap-3">
                  {" "}
                  {Review.map((item, i) => (
                    <div
                      className="flex flex-col items-center justify-center gap-2 border-2 border-[#e5e5e5] p-3"
                      key={i}
                    >
                      <div className="w-full flex items-center justify-between">
                        <div className="flex flex-col items-start justify-start">
                          <h3 className="text-black block w-full text-start text-xl md:text-2xl font-semibold">
                            {item.User.firstName} {item.User.lastName}
                          </h3>{" "}
                          <span className="md:text-[16px] font-normal text-[13px] -mt-1">
                            At {item.updatedAt.split("T")[0]}
                          </span>
                        </div>
                        <div className="flex w-[100px] md:w-[170px] h-auto">
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
                                    item.ratings === 5
                                      ? "0"
                                      : item.ratings > i
                                      ? "0"
                                      : "100%"
                                  } 0 0)`,
                                }}
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <h4 className="text-blacks w-full text-start text-base md:text-lg font-medium px-14">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>{" "}
                <nav aria-label="Page navigation example">
                  <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                      <a
                        onClick={() => {
                          setReviewPage((prev, callback) => {
                            const newPage = prev === 1 ? prev : prev - 1;
                            getReviews(data._id, newPage);
                          });
                        }}
                        className={`flex items-center justify-center px-4 h-10 ms-0 ${
                          Math.ceil(Review.length / 4) <= ReviewPage
                            ? "bg-gray-300 cursor-not-allowed"
                            : "cursor-pointer bg-black hover:bg-[#2d2929] "
                        } leading-tight text-white rounded-s-lg `}
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                          />
                        </svg>
                      </a>
                    </li>
                    {Array.from({ length: 5 }, (_, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          const isPage = Math.ceil(Review.length / 4);
                          if (isPage > i + 1) {
                            setReviewPage((prev, callback) => {
                              const newPage = i;
                              getReviews(data._id, newPage);
                            });
                          }
                        }}
                      >
                        <a
                          className={`flex items-center justify-center px-4 h-10 ms-0 ${
                            Math.ceil(Review.length / 4) <= i
                              ? "bg-gray-300 cursor-not-allowed"
                              : "cursor-pointer bg-black hover:bg-[#2d2929] "
                          } leading-tight text-white`}
                        >
                          {i + 1}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        onClick={() => {
                          const isPage = Review.length / 4;
                          if (isPage > Page) {
                            setReviewPage((prev, callback) => {
                              const newPage = prev + 1;
                              getReviews(data._id, newPage);
                            });
                          }
                        }}
                        className={`flex items-center justify-center px-4 h-10 ms-0 ${
                          Math.ceil(Review.length / 4) <= ReviewPage
                            ? "bg-gray-300 cursor-not-allowed"
                            : "cursor-pointer bg-black hover:bg-[#2d2929] "
                        } leading-tight text-white rounded-e-lg `}
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
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
      )}
    </div>
  );
};

export default Review;
