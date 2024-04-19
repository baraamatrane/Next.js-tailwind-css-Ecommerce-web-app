"use client";
import Image from "next/image";
import Mac from "../../../../public/mbp16-gray.png";
import Empty from "../../../../public/empty.png";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
const Components = () => {
  const [Loading, SetLoadings] = useState(false);
  const [Order, Setorder] = useState();
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
        const res = await fetch(`${url}/Order/GetUser`, {
          credentials: "include",
        });
        const data = await res.json();
        Setorder(data.FindOrder);
        SetLoadings(true);

        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      className={`w-full ${
        Loading
          ? Order?.message
            ? " flex justify-center items-center"
            : "grid grid-cols-1"
          : ""
      } gap-4 md:p-0 p-3`}
    >
      {Loading ? (
        Order?.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-5">
            <Image
              src={Empty}
              alt="Cart-Empty"
              width="200"
              height="100"
              className="w-72 h-auto bg-white"
            />
            <h2 className="text-black text-xl lg:text-2xl font-semibold text-start">
              Your Have Any Order
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 space-y-4">
            {Order?.map((item, i) => (
              <div
                key={i}
                className="flex border-2 w-auto border-gray-400 gap-4 p-2"
              >
                <Image
                  src={`${url}/Product/Images${item.cartItems[0].product.imageCover}`}
                  alt="Mac"
                  width="240"
                  height="150"
                  className="w-200 h-auto"
                />
                <div className="w-full flex flex-col justify-between items-start">
                  <div className="flex flex-col items-start">
                    <h2 className="text-black w-10/12 text-lg md:text-xl font-medium leading-[22px] text-start">
                      {item.cartItems[0].product.title}
                    </h2>
                    <h3 className="text-gray-500 font-medium w-full text-xs md:text-sm">
                      Order {item._id}
                    </h3>
                  </div>
                  <h4
                    className={`text-white  ${getStatusColor(
                      item.status
                    )} p-2 rounded-lg text-start text-sm md:text-base font-medium`}
                  >
                    {item.status}
                  </h4>
                </div>
                <div className="w-full flex flex-col justify-between items-end">
                  {" "}
                  <a
                    href={`/User/Orders/${item._id}`}
                    className="text-black text-end text-lg md:text-xl font-medium underline cursor-pointer"
                  >
                    Details
                  </a>
                  <h3 className="text-gray-500 font-medium text-center text-base md:text-lg">
                    {item.updatedAt.split("T")[0]}
                  </h3>
                </div>
              </div>
            ))}{" "}
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
  );
};

export default Components;
