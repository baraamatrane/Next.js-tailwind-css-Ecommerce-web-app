"use client";
import { useState } from "react";

const Components = () => {
  const [Error, SetError] = useState();
  const [Password, SetPassword] = useState();
  const [Confirm, SetConfirm] = useState();
  const [Change, SetChange] = useState();
  const url = "https://baraa-ecom.onrender.com";
  const ChangePassword = async (pass) => {
    if (!pass?.password && pass?.password !== "") {
      SetError({ error: ["password is required"], type: "error" });
    }
    if (!pass?.newpassword && pass?.newpassword !== "") {
      SetError({ error: ["New password is required"], type: "error" });
    }
    if (pass?.newpassword !== pass?.confirmpassword) {
      SetError({
        error: ["Confirme Password not match to password"],
        type: "error",
      });
    }

    try {
      const res = await fetch(`${url}/user/Changepassword`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        credentials: "include",
        body: JSON.stringify(pass), // Serialize Cart object to JSON string
      });

      const data = await res.json(); // Parse response body as JSON
      if (data?.message === "Password changed") {
        SetError({ error: [data?.message], type: "sucssus" });
        SetPassword("");
        SetChange("");
        SetConfirm("");
      } else {
        SetError({ error: [data?.message], type: "error" });
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
      <div className="flex flex-col gap-2 px-3">
        <h1 className="md:text-4xl text-3xl font-bold text-start items-start cursor-pointer text-black">
          Change password
        </h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-base text-sm">
          To change the password for your BARAA account, use this form.
        </p>
      </div>
      <div className="p-2 space-y-6 flex flex-col items-center justify-center">
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
        <div className="space-y-4 md:w-1/2 w-11/12">
          <div className="space-y-2">
            <label htmlFor="password" typeof="password" className="font-medium">
              Current password
            </label>
            <input
              placeholder="Enter your current password"
              className="px-3 form-control outline-none w-full h-10 opacity-80 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
              type="password"
              value={Password}
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" typeof="password" className="font-medium">
              New password
            </label>
            <input
              placeholder="Enter your New password"
              className="px-3 form-control outline-none w-full h-10 opacity-80 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
              type="password"
              value={Change}
              onChange={(e) => SetChange(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" typeof="password" className="font-medium">
              Confirm password
            </label>
            <input
              placeholder="Confirm your new password"
              className="px-3 form-control outline-none w-full h-10 opacity-80 text-black placeholder:text-slate-400 border-2 border-[#e4e4e7] rounded-md"
              type="password"
              value={Confirm}
              onChange={(e) => SetConfirm(e.target.value)}
            />
          </div>
          <button
            onClick={() =>
              ChangePassword({
                password: Password,
                newpassword: Change,
                confirmpassword: Confirm,
              })
            }
            className={`${
              !Password || !Change || !Confirm || Change !== Confirm
                ? "cursor-not-allowed"
                : ""
            } w-full mt-5 bg-black hover:bg-[#2b2a2a] text-white font-semibold rounded-full p-3 text-2xl`}
          >
            Update
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Components;
