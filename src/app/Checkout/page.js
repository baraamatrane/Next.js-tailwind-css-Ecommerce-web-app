"use client";
import Image from "next/image";
import Mac from "../../../public/mbp16-gray.png";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const [Loading, setLoadings] = useState(false);
  const [Payment, setPayment] = useState(false);
  const [Order, setOrder] = useState();
  const Route = useRouter();
  const url = "https://baraa-ecom.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/Cart/Get`, {
          credentials: "include",
        });
        const data = await res.json();
        setOrder(data.FindCartItem);
        if (data?.message) {
          return Route.push("/Cart");
        }
        setLoadings(true);
        console.log(data.FindCartItem);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const Confirm = async (order) => {
    try {
      const Updateurl =
        Payment === "cash"
          ? {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Specify JSON content type
              },
              credentials: "include",
              body: JSON.stringify(order), // Serialize Cart object to JSON string
            }
          : { credentials: "include" };
      const res = await fetch(
        Payment === "cash"
          ? `${url}/Order/AddCash`
          : `${url}/Order/Stripe/StripeCheckout`,
        Updateurl
      );
      if (!res.ok) {
        // Check if the request was successful
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json(); // Parse response body as JSON
      // Optionally, return or further process the data
      if (data?.url) {
        Route.push(data?.url);
      }
      if (data?.CreateOrder) {
        Route.push("/");
      }
    } catch (error) {
      // Log detailed error information
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  };
  return (
    <div className="lg:p-5 p-1 mt-8 w-full flex flex-col gap-7">
      {Loading ? (
        <>
          <h2 className="text-black text-xl lg:text-2xl font-semibold text-start">
            Checkout ({Order.CartTotalItems} item) :
          </h2>
          <div className="w-full flex lg:flex-row flex-col gap-5 lg:p-4 p-0">
            <div className="lg:w-10/12 w-full flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-black text-start text-xl lg:text-2xl font-medium">
                  1.Address
                </h4>
                <div className="w-full flex justify-between">
                  <h4 className="text-black text-start text-lg lg:text-xl font-medium px-4">
                    {`${Order.user.firstName} ${Order.user.lastName}`}
                  </h4>
                  <a
                    href="/User/Account"
                    className="text-black text-start text-lg underline cursor-pointer lg:text-xl font-medium px-4"
                  >
                    Change
                  </a>
                </div>
                <h4 className="text-gray-500 text-start text-base lg:text-lg font-medium px-4">
                  {Order.user.address.address} | {Order.user.address.city} |{" "}
                  {Order.user.address.phone}
                </h4>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <h4 className="text-black text-start text-xl lg:text-2xl font-medium">
                    1.Items
                  </h4>
                  <a
                    href="/Cart"
                    className="text-black text-start text-lg underline cursor-pointer lg:text-xl font-medium px-4"
                  >
                    Change
                  </a>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                  {Order.cartItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 border-2 border-[#e5e5e5] p-2 overflow-hidden"
                    >
                      <Image
                        src={`${url}/Product/Images${item.product.imageCover}`}
                        alt="Macbook"
                        width="140"
                        height="70"
                        className="lg:w-[140px] h-auto w-20"
                      />
                      <div>
                        <h3 className="text-black lg:text-lg font-medium text-base w-auto max-h-10 truncate text-start">
                          {item.product.title}
                        </h3>
                        <h3 className="text-black lg:text-lg font-normal text-base w-full text-start">
                          quantity : {item.quantity}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-black text-start text-xl lg:text-2xl font-medium">
                  3.Payment method
                </h4>
                <div className="space-y-2">
                  <div className="flex gap-2 px-5">
                    <input
                      type="checkbox"
                      checked={Payment === "cash"}
                      onChange={(e) => {
                        if (Payment !== "cash") {
                          setPayment("cash");
                        } else {
                          setPayment("");
                        }
                      }}
                    />
                    <h3 className="text-black lg:text-lg font-medium text-base w-full text-start">
                      Cash On Delevery
                    </h3>{" "}
                  </div>{" "}
                  <span className="lg:text-base font-normal text-sm text-gray-600 px-[41px]">
                    Delivery between
                    <span className="text-black font-medium">
                      {" "}
                      March 23
                    </span>{" "}
                    and
                    <span className="text-black font-medium"> March 25</span>
                  </span>
                  <div className="flex gap-2 px-5">
                    <input
                      type="checkbox"
                      checked={Payment === "card"}
                      onChange={(e) => {
                        if (Payment !== "card") {
                          setPayment("card");
                        } else {
                          setPayment("");
                        }
                      }}
                    />

                    <h3 className="text-black lg:text-lg font-medium text-base w-full text-start">
                      Pay With Card
                    </h3>
                  </div>{" "}
                  <span className="lg:text-base font-normal text-sm text-gray-600 px-[41px]">
                    (BaraaEcom accepts all major credit and debit cards)
                  </span>
                </div>
              </div>
            </div>
            <div className="static lg:sticky top-20 lg:w-1/3 w-full h-max lg:bg-white lg:shadow-2xl lg:rounded-lg lg:p-7 gap-3 flex flex-col items-start">
              <h2 className="text-black text-xl lg:text-2xl font-semibold text-start">
                Order Summary :
              </h2>
              <h4 className="text-black w-full text-start text-xl lg:text-2xl font-medium">
                items ({Order.CartTotalItems}) : {Order.CartTotalPrice} $
              </h4>
              <h4 className="text-black w-full text-start text-xl lg:text-2xl font-medium">
                Shipping : 4 $
              </h4>
              <hr className="border-gray-700 lg:w-10/12 w-full" />
              <h4 className="text-black w-full text-start text-xl lg:text-2xl font-semibold">
                Total : {4 + Order.CartTotalPrice} $
              </h4>
              <a
                onClick={() =>
                  Confirm({
                    address: {
                      address: Order.user.address.address,
                      city: Order.user.address.city,
                      phone: Order.user.address.phone,
                    },
                  })
                }
                className={`${
                  Payment === "cash" || Payment === "card"
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                } text-white text-center flex items-center justify-center gap-3 h-12 bg-black p-2 w-full rounded-full lg:text-xl text-sm font-semibold text-centre hover:bg-[#29292a]`}
                style={{ transition: "0.3s" }}
              >
                Confirm Order
              </a>
            </div>
          </div>
        </>
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
  );
};

export default Checkout;
