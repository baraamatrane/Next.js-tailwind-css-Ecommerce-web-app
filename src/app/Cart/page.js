/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Mac from "../../../public/mbp16-gray.png";
import Cart from "../../../public/Cart.png";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ReletedProduct from "../Product/[ProductId]/ReletedProduct";
import Link from "next/link";
import Function from "../Function";
const page = () => {
  const Data = [
    {
      title: "MacBook Pro 14” and 16” 256 GB PCIe-based S 3.2 GHz 8-core Apple",
      image: Mac,
      price: 44.44,
      color: "green",
    },
    {
      title: "MacBook Pro 14” and 16” 256 GB PCIe-based S 3.2 GHz 8-core Apple",
      image: Mac,
      price: 44.44,
      color: "green",
    },
    {
      title: "MacBook Pro 14” and 16” 256 GB PCIe-based S 3.2 GHz 8-core Apple",
      image: Mac,
      price: 44.44,
      color: "green",
    },
    {
      title: "MacBook Pro 14” and 16” 256 GB PCIe-based S 3.2 GHz 8-core Apple",
      image: Mac,
      price: 44.44,
      color: "green",
    },
  ];
  const [Cartitem, setCarts] = useState();
  const [Loading, setLoadings] = useState(false);
  const [Success, setSuccess] = useState(null);
  const url = "https://baraa-ecom.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/Cart/Get`, {
          credentials: "include",
        });
        const data = await res.json();
        setCarts(data.FindCartItem || data);
        setLoadings(true);

        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const AddSuccess = (type) => {
    setSuccess(
      type !== "error"
        ? "Product added successfully in Cart"
        : "Product Deleted successfully in Cart"
    );
    setTimeout(() => {
      setSuccess(null);
    }, 2000);
  };
  const handleIncrement = async (index, id) => {
    const data = await Function.UpdateCart({ quantity: 1 }, id);
    AddSuccess();
    setCarts(data.UpdateCartItem);
    const element = document.querySelector(`.quantity${index}`);
    if (element) {
      const currentValue = parseInt(element.textContent, 10); // Parse the current value as a number
      const newValue = currentValue + 1;
      element.textContent = newValue;
    } else {
      console.error(`Element with class .quantity${index} not found`);
    }
  };
  const DeleteCart = async (index, id) => {
    const data = await Function.DeleteCart(id);
    AddSuccess("error");
    setCarts(data.DeleteCartItem ? data.DeleteCartItem : data);
  };
  const handleDecrement = async (index, id) => {
    const data = await Function.UpdateCart({ quantity: -1 }, id);
    AddSuccess("error");
    setCarts(data.UpdateCartItem);
    const element = document.querySelector(`.quantity${index}`);
    if (element && parseInt(element.textContent) !== 1) {
      const currentValue = parseInt(element.textContent, 10); // Parse the current value as a number
      const newValue = currentValue - 1;
      element.textContent = newValue;
    } else {
      element.disabled = false;
      console.error(`Element with class .quantity${index} not found`);
    }
  };

  return (
    <div
      className={`lg:p-5 p-1 mt-8 flex flex-col ${
        Cartitem?.FindCartItem
          ? "items-start justify-start"
          : "items-center justify-center"
      } `}
    >
      {Success ? (
        <div
          id="alert-border-3"
          className={`flex items-center fixed top-20 left-8 z-50 p-4 mb-4 ${
            Success === "Product added successfully in Cart"
              ? "text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
              : " text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
          }`}
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ms-3 text-sm font-medium">{Success}</div>
          <button
            type="button"
            className={`ms-auto -mx-1.5 -my-1.5 bg-green-50 ${
              Success === "Product added successfully in Cart"
                ? "text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200"
                : "text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200"
            } inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700`}
            data-dismiss-target="#alert-border-3"
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              color={`${
                Success === "Product added successfully in Cart"
                  ? "green"
                  : "red"
              }`}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : null}
      {Loading ? (
        Cartitem?.message || Cartitem?.cartItems?.length === 0 ? (
          <>
            <Image
              src={Cart}
              alt="Cart-Empty"
              width="200"
              height="100"
              className="w-72 h-auto bg-white"
            />
            <h2 className="text-black text-xl lg:text-2xl font-semibold text-start">
              Your Cart is Empty !
            </h2>
          </>
        ) : (
          <>
            <h2 className="text-black text-xl lg:text-2xl font-semibold text-start">
              Shopping Cart :
            </h2>
            <div className="w-full flex lg:flex-row flex-col gap-5 lg:p-4 p-0">
              <div className="w-full flex flex-col gap-5 items-center justify-center">
                {Cartitem.cartItems.map((item, i) => (
                  <div
                    key={i}
                    className={`lg:w-10/12 w-full product${i} lg:items-center border-2 border-[#e5e5e5] lg:p-3 p-1 flex gap-10 items-start`}
                  >
                    <Link href={`Product/${item._id}`}>
                      <Image
                        src={`${url}/Product/Images${item.product.imageCover}`}
                        alt="CartImage1"
                        width={300}
                        height={100}
                        className="lg:w-[300px] h-auto w-36"
                      />
                    </Link>
                    <div className="w-full flex flex-row items-start justify-between">
                      <div className="w-full flex flex-col items-start gap-3 justify-between">
                        <h3 className="text-black lg:text-2xl font-semibold text-base w-full text-start">
                          {item.product.title}
                        </h3>{" "}
                        <div className="flex items-center justify-center gap-2">
                          <h3 className="text-black lg:text-lg font-semibold text-md text-start">
                            color :{" "}
                          </h3>{" "}
                          <div
                            className="lg:w-7 lg:h-7 h-4 w-4 rounded-full cursor-pointer"
                            style={{ backgroundColor: item.color }}
                          ></div>
                        </div>{" "}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleDecrement(i, item._id)}
                            disabled={item.quantity === 1 ? true : false}
                            className="text-white increase disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer rounded-md lg:w-8 lg:h-8 p-1 bg-black flex items-center justify-center"
                          >
                            <svg
                              className="lg:w-6 w-4 h-auto"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 12H6"
                              />
                            </svg>
                          </button>
                          <span
                            className={`text-black quantity${i} lg:text-[20px] font-medium text-[15px] text-start`}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrement(i, item._id)}
                            className="text-white decrease cursor-pointer rounded-md lg:w-8 lg:h-8 p-1 bg-black flex items-center justify-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="lg:w-6 w-4 h-auto"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="w-full flex flex-col items-end gap-10 justify-between">
                        {" "}
                        <h3 className="text-black lg:text-xl lg:font-semibold font-bold text-xs text-start">
                          {item.product.price} $
                        </h3>
                        <svg
                          onClick={() => DeleteCart(i, item._id)}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="lg:w-8 w-5 h-auto hover:text-red-600 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="static lg:sticky top-20 lg:w-1/3 w-full h-max lg:bg-white lg:shadow-2xl lg:rounded-lg lg:p-7 gap-3 flex flex-col items-start">
                <h4 className="text-blacks w-full text-start text-xl lg:text-2xl font-medium px-7">
                  items ({Cartitem?.CartTotalItems}) :{" "}
                  {Cartitem?.CartTotalPrice} $
                </h4>
                <h4 className="text-blacks w-full text-start text-xl lg:text-2xl font-medium px-7">
                  Shipping : 44 $
                </h4>
                <hr className="border-gray-700 lg:w-10/12 w-full" />
                <h4 className="text-blacks w-full text-start text-xl lg:text-2xl font-semibold px-7">
                  Total : {Cartitem?.CartTotalPrice + 44} $
                </h4>
                <a
                  href="/Checkout"
                  className="text-white text-center flex items-center justify-center gap-3 h-12 bg-black p-2 w-full rounded-full lg:text-xl text-sm font-semibold text-centre hover:bg-[#29292a]"
                  style={{ transition: "0.3s" }}
                >
                  Proceed to checkout{" "}
                </a>
              </div>
            </div>{" "}
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
      {Loading && (
        <ReletedProduct
          Productid={
            Cartitem?.cartItems?.length > 0
              ? Cartitem.cartItems[0].product.category._id
              : null
          }
          SetData={(data) => {
            setCarts(data);
            console.log(Cartitem);
          }}
          SetSuccess={() => AddSuccess()}
        />
      )}
    </div>
  );
};

export default page;
