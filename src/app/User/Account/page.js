"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Components = () => {
  const [Email, SetEmail] = useState();
  const [Firstname, SetFirstname] = useState();
  const [Lastname, SetLastname] = useState();
  const [Phone, SetPhone] = useState();
  const [Address, SetAddress] = useState();
  const [City, SetCity] = useState("Choose a city");
  const [Loading, SetLoadings] = useState(false);
  const [Error, SetError] = useState();
  const Route = useRouter();
  const [User, SetUser] = useState();
  const url = "https://baraa-ecom.onrender.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/user/information`, {
          credentials: "include",
        });
        const data = await res.json();
        SetUser(data.user);
        if (data.user) {
          SetEmail(data.user.email);
          SetFirstname(data.user.firstName);
          SetLastname(data.user.lastName);
        }
        if (data.user?.address) {
          SetAddress(data.user.address.address);
          SetPhone(data.user.address.phone.split("+212")[1]);
          SetCity(data.user.address.city);
        } else {
          console.log("enter");
          SetError({
            error: ["You Must Enter Your Current Address"],
            type: "error",
          });
        }
        console.log(data);
        SetLoadings(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const Login = async (login) => {
    if (!login?.firstname && login?.firstname !== "") {
      SetError({ error: ["firstname is required"], type: "error" });
    }
    if (!login?.lastName && login?.lastName !== "") {
      SetError({ error: ["lastName is required"], type: "error" });
    }
    if (!login?.address.phone && login?.address.phone !== "") {
      SetError({ error: ["phone is required"], type: "error" });
    }
    if (!login?.address.address && login?.address.address !== "") {
      SetError({ error: ["address is required"], type: "error" });
    }
    if (!login?.address.city && login?.address.city !== "") {
      SetError({ error: ["city is required"], type: "error" });
    }
    try {
      const res = await fetch(`${url}/user/updateUser`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        credentials: "include",
        body: JSON.stringify(login), // Serialize Cart object to JSON string
      });

      const data = await res.json(); // Parse response body as JSON
      if (data.user) {
        SetEmail(data.user.email);
        SetFirstname(data.user.firstName);
        SetLastname(data.user.lastName);
      }
      if (data.user?.address?.phone) {
        SetAddress(data.user.address.address);
        SetPhone(data.user.address.phone.split("+212")[1]);
        SetCity(data.user.address.city);
      }
      if (data?.message) {
        SetError({ error: [data?.message], type: "sucssus" });
      }
      if (data?.errors?.length > 0) {
        const error = data?.message
          ? [data?.message]
          : data?.errors.map((item) => item.msg);
        SetError({ error, type: "error" });
      }
    } catch (error) {
      // Log detailed error information
      SetError(error);
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  };
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full px-4 space-y-8 mt-5">
        <div className="space-y-2 text-start">
          <h1 className="text-5xl font-bold uppercase text-start items-start cursor-pointer text-black">
            Profile
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            Update your information
          </p>
        </div>
        {Loading ? (
          <>
            {Error?.type ? (
              <div
                className={`w-full border rounded text-sm p-4 flex justify-between ${
                  Error.type === "error"
                    ? "bg-red-50 border-red-400 text-red-800"
                    : "bg-green-50 border-green-400 text-green-800"
                }`}
              >
                <div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>
                      <span className="font-bold">Info : </span>
                      {Error?.error.map((item, index) => (
                        <span key={index}>
                          {item}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div onClick={() => SetError()} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    color={Error.type === "error" ? "red" : "green"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            ) : null}
            <div className="p-2 space-y-6 flex flex-col items-center justify-center">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 flex flex-col items-start">
                    <label htmlFor="first-name" className="font-medium">
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="px-3 form-control outline-none w-full h-10 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
                      required
                      value={Firstname}
                      onChange={(e) => SetFirstname(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="font-medium">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="px-3 form-control outline-none w-full h-10 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
                      required
                      value={Lastname}
                      onChange={(e) => SetLastname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" typeof="email" className="font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="example@example.com"
                    className="px-3 form-control outline-none w-full h-10 opacity-80 text-black bg-gray-100 cursor-not-allowed placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
                    type="email"
                    value={Email}
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="Address"
                  typeof="Address"
                  className="font-medium"
                >
                  Address Information
                </label>{" "}
                <div className="space-y-2 flex flex-col items-start px-4">
                  <label htmlFor="Address" className="font-medium text-sm">
                    address
                  </label>
                  <input
                    id="Address"
                    className="px-3 form-control outline-none w-full h-10 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
                    required
                    value={Address}
                    placeholder="put your home address"
                    onChange={(e) => SetAddress(e.target.value)}
                  />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone-number"
                      className="font-medium text-sm"
                    >
                      Phone
                    </label>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-base">+212</span>{" "}
                      <input
                        id="phone-number"
                        placeholder="12345678"
                        className="px-3 form-control outline-none w-full h-10 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
                        required
                        value={Phone}
                        onChange={(e) => SetPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="city" className="font-medium text-sm">
                      City
                    </label>
                    <select
                      className="px-3 form-control outline-none w-full bg-white h-10 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
                      onChange={(e) => SetCity(e.target.value)}
                      value={City}
                    >
                      <option value="Casablanca">Casablanca</option>
                      <option value="Merakech">Merakech</option>
                      <option value="Agadir">Agadir</option>
                      <option value="Tanger">Tanger</option>
                      <option value="Another City">Another City</option>
                    </select>
                  </div>
                </div>
                <button
                  className={`${
                    !Lastname || !Firstname || !Phone || !City || !Address
                      ? "cursor-not-allowed"
                      : ""
                  } w-11/12 mt-5 bg-black hover:bg-[#2b2a2a] text-white font-semibold rounded-full p-3 text-2xl`}
                  onClick={() =>
                    Login({
                      firstName: Firstname,
                      lastName: Lastname,
                      address: {
                        address: Address,
                        city: City,
                        phone: `+212${Phone}`,
                      },
                    })
                  }
                >
                  Update
                </button>{" "}
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
    </div>
  );
};

export default Components;
