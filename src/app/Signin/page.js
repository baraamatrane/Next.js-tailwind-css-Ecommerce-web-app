"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Component() {
  const [Email, Setemail] = useState();
  const [Password, Setpassword] = useState();
  const [Error, SetError] = useState();
  const Route = useRouter();
  const url = "https://baraa-ecom.onrender.com";
  const Login = async (login) => {
    if (!login?.email && login?.email !== "") {
      SetError("Email is required");
    }
    if (!login?.password && login?.password !== "") {
      SetError("Password is required");
    }
    try {
      const res = await fetch(`${url}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        credentials: "include",
        body: JSON.stringify(login), // Serialize Cart object to JSON string
      });

      const data = await res.json(); // Parse response body as JSON
      // Optionally, return or further process the data
      if (data.token) {
        Route.push("/");
        Route.refresh();
      }
      if (data?.message || data?.errors?.length > 0) {
        const error = data?.message
          ? [data?.message]
          : data?.errors.map((item) => item.msg);
        SetError(error);
        console.log(data);
      }

      return data;
    } catch (error) {
      // Log detailed error information
      SetError(error);
      console.error("Error fetching data:", error);
      // Optionally, rethrow the error to propagate it further
      throw error;
    }
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-3xl md:w-1/3 px-4 space-y-8 mt-5">
        <div className="space-y-2 text-center">
          <h1 className="text-5xl font-bold uppercase text-center items-center cursor-pointer text-black">
            Baraa <br /> Ecom
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            Welcome Back
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="md:p-8 p-3 space-y-6 flex flex-col items-center justify-center">
            {Error?.length >= 0 ? (
              <div className="w-full bg-red-50 border border-red-400 rounded text-red-800 text-sm p-4 flex justify-between">
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
                      <span className="font-bold">Info:</span>
                      {Error?.map((item, index) => (
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
            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <label htmlFor="email" typeof="email" className="font-medium">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="example@example.com"
                  required
                  className="px-3 form-control outline-none w-full h-10 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
                  type="email"
                  onChange={(e) => Setemail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  id="password"
                  required
                  placeholder="************"
                  className="px-3 form-control outline-none w-full h-10 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
                  type="password"
                  onChange={(e) => Setpassword(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2 flex items-center justify-center">
              <div className="flex items-center space-x-2 text-sm">
                {" "}
                <label className="mb-0 font-medium" htmlFor="terms">
                  You accept the
                  <Link
                    className="underline px-1 font-medium text-slate-500"
                    href="#"
                  >
                    terms and conditions
                  </Link>
                </label>
              </div>
            </div>
            <button
              onClick={() =>
                Login({
                  email: Email,
                  password: Password,
                })
              }
              className={`w-full bg-black ${
                !Email || !Password ? "cursor-not-allowed" : ""
              } hover:bg-[#2b2a2a] text-white font-semibold rounded-full p-3 md:text-2xl text-xl`}
            >
              Sign In
            </button>
          </div>
          <div className="text-center font-medium">
            New to website ?
            <Link className="underline text-slate-500" href="/Register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
