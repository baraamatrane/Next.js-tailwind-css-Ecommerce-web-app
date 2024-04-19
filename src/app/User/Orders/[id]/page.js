"use client";
import Image from "next/image";
import Mac from "../../../../../public/mbp16-gray.png";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ErrorComponents from "@/app/Error";
export default function Page({ params }) {
  const [Loading, SetLoadings] = useState(false);
  const [Order, Setorder] = useState();
  const [Error, SetError] = useState();

  const url = "https://baraa-ecom.onrender.com";
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "Processing":
        return "bg-blue-500";
      case "Shipped":
        return "bg-purple-500";
      case "Delivered":
        return "bg-green-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-300"; // Default color for unknown status
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/Order/${params.id}`, {
          credentials: "include",
        });
        const data = await res.json();
        Setorder(data.IdOrder);
        SetLoadings(true);
        if (data?.errors) {
          SetError("error");
        }
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      className={`w-full flex ${
        Error ? "justify-center items-center" : ""
      } flex-col gap-4`}
    >
      {Loading ? (
        Error ? (
          <ErrorComponents />
        ) : (
          <>
            <h1 className="text-4xl font-bold uppercase text-start items-start cursor-pointer text-black">
              Order Deteils
            </h1>
            <div className="flex flex-col items-start gap-4 px-6">
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-black font-medium text-center text-base md:text-lg">
                  Order n° {params.id}
                </h3>
                <h3 className="text-gray-500 font-medium text-center text-xs md:text-sm">
                  {Order.OrderQuantity} Articals
                </h3>
                <h3 className="text-gray-500 font-medium text-center text-xs md:text-sm">
                  Performed on {Order.createdAt.split("T")[0]}
                </h3>
                <h3 className="text-gray-500 font-medium text-center text-xs md:text-sm">
                  Total: {Order.totalOrderPrice} $
                </h3>
                <h4
                  className={`text-white  ${getStatusColor(
                    Order.status
                  )} p-2 rounded-lg text-start text-sm md:text-base font-medium`}
                >
                  {Order.status}
                </h4>
              </div>
              <h3 className="text-black font-medium text-center text-base md:text-lg">
                Items in your order :
              </h3>
              <div className="w-full grid md:grid-cols-2 grid-cols-1 p-4 gap-4">
                {Order.cartItems.map((item, i) => (
                  <div
                    key={i}
                    className="w-full border-2 border-gray-400 flex md:flex-row flex-col gap-4 p-2"
                  >
                    <Image
                      src={`${url}/Product/Images${item.product.imageCover}`}
                      alt="Mac"
                      width="250"
                      height="150"
                      className="w-200 h-auto"
                    />
                    <div className="flex flex-col justify-between items-start">
                      <div className="flex flex-col items-start">
                        <h2 className="text-black text-lg md:text-xl font-medium leading-[22px] text-start">
                          {item.product.title}
                        </h2>
                        <h3 className="text-black font-medium text-center text-xs md:text-sm">
                          Quantity : {item.quantity}
                        </h3>
                        <h3 className="text-black font-semibold text-center text-base md:text-lg">
                          {item.product.price} $
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col justify-between items-end"></div>
              </div>
              <div className="flex md:flex-row flex-col justify-between gap-20 w-10/12 h-auto">
                <div className="flex md:w-1/2 w-fullè_reag flex-col border-2 border-gray-400">
                  <h3 className="text-black border-b-2 border-gray-400 font-semibold text-start p-2 text-base md:text-lg">
                    Payment
                  </h3>
                  <div className="flex flex-col gap-4 p-3">
                    <div className="flex flex-col">
                      <h3 className="text-black font-medium text-start text-base md:text-lg">
                        Payment method
                      </h3>
                      <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
                        {Order.paymentMethodType === "cash"
                          ? "Cash payment on delivery"
                          : "Bank Payment"}
                      </h3>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-black font-medium text-start text-base md:text-lg">
                        Payment details
                      </h3>
                      <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
                        Subtotal: {Order.totalOrderPrice} $
                      </h3>
                      <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
                        Delivery costs: 20
                      </h3>
                      <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
                        Total: {Order.totalOrderPrice} $
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex md:w-1/2 w-fullè_reag flex-col border-2 border-gray-400">
                  <h3 className="text-black border-b-2 border-gray-400 font-semibold text-start p-2 text-base md:text-lg">
                    Delivery
                  </h3>
                  <div className="flex flex-col gap-4 p-3">
                    <div className="flex flex-col">
                      <h3 className="text-black font-medium text-start text-base md:text-lg">
                        Delivery method
                      </h3>
                      <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
                        Home delivery
                      </h3>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-black font-medium text-start text-base md:text-lg">
                        Delivery address
                      </h3>
                      <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
                        {`${Order.user.firstName} ${Order.user.lastName}`}
                      </h3>
                      <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
                        {Order.shippingAddress.address}
                      </h3>
                      <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
                        {Order.shippingAddress.city}
                      </h3>
                    </div>
                    {/* <div className="flex flex-col">
    <h3 className="text-black font-medium text-start text-base md:text-lg">
      Shipping Details
    </h3>
    <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
      Shipped by OURI SHOP
    </h3>
    <h3 className="text-gray-500 font-medium text-start text-sm md:text-base px-2">
      Delivery between July 15 and July 17
    </h3>
  </div> */}
                  </div>
                </div>
              </div>
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
    </div>
  );
}
