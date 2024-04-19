/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Mac from "../../../public/mbp16-gray.png";
import NotFound from "../../../public/Product Not Found.png";
import { TailSpin } from "react-loader-spinner";
import Function from "../Function";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = ({ searchParams }) => {
  const products = [
    {
      title: "Iphone 14 pro max 256Gb New version",
      price: 104.22,
      PriceDiscoust: 84.33,
      discout: 20,
      image: Mac,
    },
  ];
  const [Sidebar, SetSidebar] = useState(false);
  const [Product, setProducts] = useState([]);
  const [Category, setCategorys] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState(
    searchParams?.Category || ""
  );
  const [SelectedBrand, setSelectedBrand] = useState(searchParams?.Brand || "");
  const [SelectedRating, setSelectedRating] = useState(
    parseInt(searchParams?.ratingsAverage)
  );
  const [Brand, setBrands] = useState([]);
  const [Maxprice, setMaxprice] = useState(
    parseInt(searchParams.max_Price) || 0
  );
  const [Minprice, setMinprice] = useState(
    parseInt(searchParams.min_Price) || 0
  );
  const [Loading, setLoadings] = useState(false);
  const [CategoryLoading, setCategoryLoadings] = useState(false);
  const [BrandLoading, setBrandLoadings] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const Sort = [
    { value: "", name: "Sort by : Featured" },
    { value: "SortPrice=1", name: "Price: Low to High" },
    { value: "SortPrice=-1", name: "Price: High to Low" },
    { value: "RantingSort=1", name: "Review: Low to High" },
    { value: "RantingSort=-1", name: "Review: High to Low" },
  ];
  const [Page, setPages] = useState(1);
  const Route = useRouter();
  const url = "https://baraa-ecom.onrender.com";
  const GetCategory = async () => {
    try {
      const res = await fetch(`${url}/Category/Get?limit=10`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setCategorys(data.FindCategory);
      setCategoryLoadings(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async (page) => {
    try {
      var urlParams = "";
      if (searchParams?.min_Price && parseInt(searchParams?.min_Price) > 0) {
        urlParams = `${urlParams}&min_price=${Minprice}`;
      }
      if (searchParams?.max_Price && parseInt(searchParams?.max_Price) > 0) {
        urlParams = `${urlParams}&max_price=${Maxprice}`;
      }
      // Apply category filter if category is provided
      if (
        searchParams?.Category &&
        searchParams?.Category !== "" &&
        SelectedCategory !== ""
      ) {
        urlParams = `${urlParams}&category=${SelectedCategory}`;
      }
      if (
        (searchParams?.SortPrice && parseInt(searchParams?.SortPrice) === 1) ||
        parseInt(searchParams?.SortPrice) === -1
      ) {
        urlParams = `${urlParams}&price=${searchParams.SortPrice}`;
      }
      if (
        (searchParams?.RantingSort &&
          parseInt(searchParams?.RantingSort) === 1) ||
        parseInt(searchParams?.RantingSort) === -1
      ) {
        urlParams = `${urlParams}&RantingSort=${searchParams.RantingSort}`;
      }
      if (
        searchParams?.Brand &&
        searchParams?.Brand !== "" &&
        SelectedBrand !== ""
      ) {
        urlParams = `${urlParams}&brand=${SelectedBrand}`;
      }
      if (
        searchParams?.ratingsAverage &&
        parseInt(searchParams?.ratingsAverage) > 0
      ) {
        urlParams = `${urlParams}&ratingsAverage=${SelectedRating}`;
      }

      setLoadings(false);
      const res = await fetch(
        `${url}/Product/Get?keyword=${searchParams?.keyword}&page=${
          page || 1
        }&limit=20${urlParams}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setProducts(data.FindProduct || data.FindCategoryProduct);
      setLoadings(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const GetBrand = async () => {
    try {
      const res = await fetch(`${url}/Brand/Get?limit=10`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setBrands(data.FindBrand);
      setBrandLoadings(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const GetAll = async () => {
      await fetchData();
    };
    GetAll();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  useEffect(() => {
    const GetAll = async () => {
      await GetCategory();
      await GetBrand();
    };
    GetAll();
  }, []);
  const Side = () => {
    SetSidebar((prev) => !prev);
  };

  return (
    <div className="w-full mt-5">
      <div className="flex flex-col gap-10 p-2">
        <h3 className="text-black w-full text-start text-xl md:text-2xl font-semibold px-9">
          Over than 10000 results for
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className="text-gray-400"> "{searchParams.keyword}"</span>
        </h3>
        <div className="w-full flex md:flex-row flex-col justify-start gap-6 items-start">
          <div className="md:w-1/3 w-full flex items-start md:bg-white md:shadow-black md:shadow-lg md:rounded-lg ">
            <div
              className="md:hidden flex items-center cursor-pointer gap-3"
              onClick={() => Side()}
            >
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
              <h3 className="text-black text-start text-xl md:text-2xl font-semibold">
                Filter
              </h3>
            </div>

            <div className="w-full hidden md:flex md:flex-col items-start justify-start p-4 gap-1">
              <div className="w-full flex justify-between">
                {" "}
                <h3 className="text-black text-start text-xl md:text-2xl font-semibold">
                  Shipping
                </h3>{" "}
                <button
                  onClick={() => {
                    setSelectedBrand("");
                    setSelectedCategory("");
                    setSelectedOption("");
                    setSelectedRating("");
                    Route.push(`${window.location.href.split("&")[0]}`);
                  }}
                  className="text-white text-center bg-black hover:bg-[#2d2d2d] p-2 w-auto rounded-md text-xl font-semibold"
                >
                  Reset
                </button>
              </div>
              <div className="flex items-center gap-2 px-10">
                <input
                  type="checkbox"
                  id="option2"
                  name="options"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                <h4 className="text-black w-full text-start text-base md:text-lg font-medium">
                  Shipping fees
                </h4>
              </div>
              <div className="flex items-center gap-2 px-10">
                <input
                  type="checkbox"
                  id="option1"
                  name="options"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <h4 className="text-black w-full text-start text-base md:text-lg font-medium">
                  Free shipping
                </h4>
              </div>
              <h3 className="text-black text-start text-xl md:text-2xl font-semibold">
                Categories
              </h3>
              <div
                className={`flex flex-col gap-1 ${
                  CategoryLoading ? "text-start" : "text-center"
                } w-full max-h-24 overflow-y-auto`}
              >
                {CategoryLoading ? (
                  Category.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-10">
                      <input
                        type="checkbox"
                        checked={SelectedCategory === item._id}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategory(item._id);
                            if (searchParams.Category) {
                              const urlSearchParams = new URLSearchParams(
                                window.location.search
                              );
                              urlSearchParams.delete("Category");
                              const updatedUrl = `${
                                window.location.pathname
                              }?${urlSearchParams.toString()}`;
                              Route.push(`${updatedUrl}&Category=${item._id}`);
                            } else {
                              Route.push(
                                `${window.location.href}&Category=${item._id}`
                              );
                            }
                          } else {
                            setSelectedCategory("");
                            const urlSearchParams = new URLSearchParams(
                              window.location.search
                            );
                            urlSearchParams.delete("Category");
                            const updatedUrl = `${
                              window.location.pathname
                            }?${urlSearchParams.toString()}`;
                            Route.push(`${updatedUrl}`);
                          }
                        }}
                      />
                      <h4 className="text-black w-full text-start text-sm md:text-lg font-medium">
                        {item.name}
                      </h4>
                    </div>
                  ))
                ) : (
                  <h2 className="text-center">Loading...</h2>
                )}
              </div>
              <h3 className="text-black text-start text-xl md:text-2xl font-semibold">
                Brand
              </h3>
              <div
                className={`flex flex-col gap-1 ${
                  Loading ? "text-start" : "text-center"
                } w-full max-h-24 overflow-y-auto`}
              >
                {BrandLoading ? (
                  Brand.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 px-10">
                      <input
                        type="checkbox"
                        checked={SelectedBrand === item._id}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrand(item._id);
                            if (searchParams.Category) {
                              const urlSearchParams = new URLSearchParams(
                                window.location.search
                              );
                              urlSearchParams.delete("Brand");
                              const updatedUrl = `${
                                window.location.pathname
                              }?${urlSearchParams.toString()}`;
                              Route.push(`${updatedUrl}&Brand=${item._id}`);
                            } else {
                              Route.push(
                                `${window.location.href}&Brand=${item._id}`
                              );
                            }
                          } else {
                            setSelectedBrand("");
                            const urlSearchParams = new URLSearchParams(
                              window.location.search
                            );
                            urlSearchParams.delete("Brand");
                            const updatedUrl = `${
                              window.location.pathname
                            }?${urlSearchParams.toString()}`;
                            Route.push(`${updatedUrl}`);
                          }
                        }}
                      />
                      <h4 className="text-black w-full text-start text-base md:text-lg font-medium">
                        {item.name}
                      </h4>
                    </div>
                  ))
                ) : (
                  <h2 className="text-center">Loading...</h2>
                )}
              </div>
              <h3 className="text-black text-start text-xl md:text-2xl font-semibold">
                Price
              </h3>
              <div className="w-full flex justify-around items-center gap-2 px-8">
                <input
                  className="form-control outline-none w-16 text-black placeholder:text-black"
                  type="number"
                  placeholder="min"
                  min={0}
                  value={Minprice}
                  onChange={(e) => setMinprice(e.target.value)}
                />
                <span className="text-black text-xl">-</span>
                <input
                  className="form-control outline-none w-16 text-black placeholder:text-black"
                  type="number"
                  placeholder="max"
                  min={0}
                  value={Maxprice}
                  onChange={(e) => setMaxprice(e.target.value)}
                />
                <button
                  onClick={() => {
                    if (
                      !searchParams.min_Price &&
                      !searchParams.max_Price &&
                      Maxprice > 0 &&
                      Minprice > 0 &&
                      Maxprice > Minprice
                    ) {
                      const price = `&min_Price=${Minprice}&max_Price=${Maxprice}`;
                      Route.push(`${window.location.href}${price}`);
                    } else {
                      if (
                        Maxprice > 0 &&
                        Maxprice > Minprice &&
                        !searchParams.max_Price
                      ) {
                        Route.push(
                          `${window.location.href}&max_Price=${Maxprice}`
                        );
                      }
                      if (
                        Minprice > 0 &&
                        Maxprice > Minprice &&
                        !searchParams.min_Price
                      ) {
                        Route.push(
                          `${window.location.href}&min_Price=${Minprice}`
                        );
                      }
                    }
                    if (searchParams.min_Price || searchParams.max_Price) {
                      if (Maxprice > 0 && Maxprice > Minprice && Minprice > 0) {
                        const urlSearchParams = new URLSearchParams(
                          window.location.search
                        );
                        urlSearchParams.delete("min_Price");
                        urlSearchParams.delete("max_Price");
                        const updatedUrl = `${
                          window.location.pathname
                        }?${urlSearchParams.toString()}`;
                        Route.push(
                          `${updatedUrl}&min_Price=${Minprice}&max_Price=${Maxprice}`
                        );
                      } else {
                        if (
                          Maxprice > 0 &&
                          Maxprice > Minprice &&
                          !searchParams.max_Price
                        ) {
                          const urlSearchParams = new URLSearchParams(
                            window.location.search
                          );
                          urlSearchParams.delete("max_Price");
                          const updatedUrl = `${
                            window.location.pathname
                          }?${urlSearchParams.toString()}`;
                          Route.push(`${updatedUrl}&max_Price=${Maxprice}`);
                        }
                        if (
                          Minprice > 0 &&
                          Maxprice > Minprice &&
                          !searchParams.min_Price
                        ) {
                          const urlSearchParams = new URLSearchParams(
                            window.location.search
                          );
                          urlSearchParams.delete("min_Price");
                          const updatedUrl = `${
                            window.location.pathname
                          }?${urlSearchParams.toString()}`;
                          Route.push(`${updatedUrl}&min_Price=${Minprice}`);
                        }
                      }
                    }
                  }}
                  className="flex justify-center items-center gap-2 text-white text-center bg-black hover:bg-[#2d2d2d] p-1 w-16 rounded-md md:text-xl text-sm font-semibold text-centre"
                >
                  Ok
                </button>
              </div>
              <h3 className="text-black text-start text-xl md:text-2xl font-semibold">
                Ratings
              </h3>
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer px-8"
                  onClick={(e) => {
                    if (SelectedRating !== index + 1) {
                      setSelectedRating(index + 1);
                      if (searchParams?.ratingsAverage) {
                        const urlSearchParams = new URLSearchParams(
                          window.location.search
                        );
                        urlSearchParams.delete("ratingsAverage");
                        const updatedUrl = `${
                          window.location.pathname
                        }?${urlSearchParams.toString()}`;
                        Route.push(`${updatedUrl}&ratingsAverage=${index + 1}`);
                      } else {
                        Route.push(
                          `${window.location.href}&ratingsAverage=${index + 1}`
                        );
                      }
                    } else {
                      setSelectedRating("");
                      const urlSearchParams = new URLSearchParams(
                        window.location.search
                      );
                      urlSearchParams.delete("ratingsAverage");
                      const updatedUrl = `${
                        window.location.pathname
                      }?${urlSearchParams.toString()}`;
                      Route.push(`${updatedUrl}`);
                    }
                  }}
                >
                  <input
                    className="px-4"
                    type="checkbox"
                    checked={SelectedRating === index + 1}
                  />
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10"
                      color={`${
                        i === 5 ? "gold" : index + 1 > i ? "gold" : "#c7c7cd"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <span className="text-black text-base font-medium hover:text-yellow-400">
                    & Up
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-end justify-end">
              <form className="max-w-auto">
                <select
                  id="countries"
                  defaultValue="Sort"
                  className="bg-white w-auto shadow-md text-black text-sm md:text-base font-semibold rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5"
                  onChange={(e) => {
                    const SortQuery = searchParams?.RantingSort
                      ? "RantingSort"
                      : "SortPrice";
                    if (e.target.value !== "") {
                      if (
                        !searchParams?.RantingSort &&
                        !searchParams?.SortPrice
                      ) {
                        Route.push(`${window.location.href}&${e.target.value}`);
                      } else {
                        const urlSearchParams = new URLSearchParams(
                          window.location.search
                        );

                        urlSearchParams.delete(SortQuery);
                        const updatedUrl = `${
                          window.location.pathname
                        }?${urlSearchParams.toString()}`;
                        Route.push(`${updatedUrl}&${e.target.value}`);
                      }
                    } else {
                      const urlSearchParams = new URLSearchParams(
                        window.location.search
                      );
                      urlSearchParams.delete(SortQuery);
                      const updatedUrl = `${
                        window.location.pathname
                      }?${urlSearchParams.toString()}`;
                      Route.push(`${updatedUrl}`);
                    }
                  }}
                >
                  {Sort.map((item, i) => (
                    <option
                      key={i}
                      value={item.value}
                      className="text-sm md:text-base font-semibold"
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <>
              {Loading ? (
                !Product || Product.length === 0 ? (
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                      src={NotFound}
                      alt="Product-Not-Found"
                      width={400}
                      height={300}
                      className="w-[400px] h-auto"
                    />
                    <h4 className="text-black md:text-2xl text-lg font-medium text-center">
                      Product Not Found
                    </h4>
                  </div>
                ) : (
                  <>
                    <div
                      className={`w-full grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 items-start justify-start`}
                    >
                      {Product.map((product, i) => (
                        <div
                          key={product._id}
                          className="flex flex-col items-center p-1 hover:shadow-2xl md:w-full w-[94%] md:md:rounded-md cursor-pointer"
                        >
                          <Link href={`Product/${product._id}`}>
                            <Image
                              src={`${url}/Product/Images${product.imageCover}`}
                              alt={product.title}
                              width="150"
                              height="140"
                              className="w-full h-auto bg-center bg-cover duration-500"
                            />
                            <div className="container mx-auto flex flex-1 flex-col gap-1 p-0 md:p-2">
                              <h4 className="relative px-1 text-black md:text-sm text-xs font-medium w-auto whitespace-nowrap overflow-hidden text-ellipsis">
                                {product.title}
                              </h4>
                              <div className="flex justify-between items-center p-1">
                                <div>
                                  <h3 className="text-black md:text-lg font-semibold text-sm text-start -mb-3">
                                    {product.price} $
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
                                <div className="flex w-[60px] md:w-[110px] h-auto">
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
                              <div className=" absolute top-3 right-3 flex justify-end items-center bg-black rounded-md w-auto">
                                <span className="text-white text-xs font-normal p-1">
                                  30%
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center">
                      <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-px h-10 text-base">
                          <li>
                            <a
                              onClick={() => {
                                setPages((prev, callback) => {
                                  const newPage = prev === 1 ? prev : prev - 1;
                                  fetchData(newPage);
                                });
                              }}
                              className={`flex items-center justify-center px-4 h-10 ms-0 ${
                                Math.ceil(Product.length / 20) <= Page
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
                                const isPage = Math.ceil(Product.length / 20);
                                if (isPage > i + 1) {
                                  setPages((prev, callback) => {
                                    const newPage = i + 1;
                                    fetchData(newPage);
                                  });
                                }
                              }}
                            >
                              <a
                                className={`flex items-center justify-center px-4 h-10 ms-0 ${
                                  Math.ceil(Product.length / 20) < i + 1
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "cursor-pointer  bg-black hover:bg-[#2d2929] "
                                } leading-tight text-white`}
                              >
                                {i + 1}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a
                              onClick={() => {
                                const isPage = Product.length / 20;
                                if (isPage > Page) {
                                  setPages((prev, callback) => {
                                    const newPage = prev + 1;
                                    fetchData(newPage);
                                  });
                                }
                              }}
                              className={`flex items-center justify-center px-4 h-10 ms-0 ${
                                Math.ceil(Product.length / 20) <= Page
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
                  </>
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
            </>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 pointer-events-auto bg-white shadow-xl w-full h-screen ${
          Sidebar ? "left-0" : "left-[-100%]"
        }`}
        style={{ zIndex: "9999", transition: "0.4s" }}
      >
        <div className="flex items-center justify-between p-3">
          <svg
            onClick={() => Side()}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <h3 className="text-black text-start text-xl md:text-2xl font-semibold">
            Filter
          </h3>
          <button className="flex justify-center items-center gap-2 text-white text-center bg-black hover:bg-[#2d2d2d] p-1 w-16 rounded-md md:text-xl text-sm font-semibold text-centre">
            Reset
          </button>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1 px-8">
          <h3 className="text-black text-start text-base md:text-2xl font-semibold">
            Shipping
          </h3>
          <div className="flex items-center gap-2 px-10">
            <input type="checkbox" />
            <h4 className="text-black w-full text-start text-sm md:text-lg font-medium">
              Shipping fees
            </h4>
          </div>
          <div className="flex items-center gap-2 px-10">
            <input type="checkbox" />
            <h4 className="text-black w-full text-start text-sm md:text-lg font-medium">
              Free shipping
            </h4>
          </div>
          <h3 className="text-black text-start text-base md:text-2xl font-semibold">
            Categories
          </h3>
          <div className="flex flex-col gap-1 items-start w-full max-h-24 overflow-y-auto">
            {Product.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-10">
                <input type="checkbox" />
                <h4 className="text-black w-full text-start text-sm md:text-lg font-medium">
                  {item.category?.name}
                </h4>
              </div>
            ))}
          </div>
          <h3 className="text-black text-start text-base md:text-2xl font-semibold">
            Brand
          </h3>
          <div className="flex flex-col gap-1 items-start w-full max-h-24 overflow-y-auto">
            <div className="flex items-center gap-2 px-10">
              <input type="checkbox" />
              <h4 className="text-black w-full text-start text-sm md:text-lg font-medium">
                Apple
              </h4>
            </div>
            <div className="flex items-center gap-2 px-10">
              <input type="checkbox" />
              <h4 className="text-black w-full text-start text-sm md:text-lg font-medium">
                Sumsung
              </h4>
            </div>
            <div className="flex items-center gap-2 px-10">
              <input type="checkbox" />
              <h4 className="text-black w-full text-start text-sm md:text-lg font-medium">
                Hp
              </h4>
            </div>
            <div className="flex items-center gap-2 px-10">
              <input type="checkbox" />
              <h4 className="text-black w-full text-start text-sm md:text-lg font-medium">
                Dell
              </h4>
            </div>
          </div>
          <h3 className="text-black text-start text-base md:text-2xl font-semibold">
            Price
          </h3>
          <div className="w-full flex justify-around items-center gap-2 px-8">
            <input
              className="form-control outline-none w-16 text-black placeholder:text-black"
              type="number"
              placeholder="min"
            />
            <span className="text-black text-base">-</span>
            <input
              className="form-control outline-none w-16 text-black placeholder:text-black"
              type="number"
              placeholder="max"
            />
            <button className="flex justify-center items-center gap-2 text-white text-center bg-black hover:bg-[#2d2d2d] p-1 w-16 rounded-md md:text-base text-sm font-semibold text-centre">
              Ok
            </button>
          </div>
          <h3 className="text-black text-start text-base md:text-2xl font-semibold">
            Price
          </h3>
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="flex items-center cursor-pointer px-8">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  color={`${
                    i === 5 ? "gold" : index + 1 > i ? "gold" : "#c7c7cd"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="text-black text-sm font-medium hover:text-yellow-400">
                & Up
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center m-1">
          <button
            onClick={() => Side()}
            className="flex justify-center items-center gap-2 text-white text-center bg-black hover:bg-[#2d2d2d] p-1 w-10/12 rounded-md md:text-base text-sm font-semibold text-centre"
          >
            Show 110,000+ results
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
