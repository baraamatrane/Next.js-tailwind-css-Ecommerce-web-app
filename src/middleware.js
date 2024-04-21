import { NextResponse } from "next/server";

export async function middleware(request) {
  // Function to fetch token information
  const Token = async () => {
    try {
      const res = await fetch(
        `https://baraa-ecom.onrender.com/user/information`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch token information
  const tokenData = await Token();

  // Extract token from the request headers or cookies
  const user = tokenData?.user;
  const host = request.headers.get("host");

  // Construct absolute redirect URLs
  const signinRedirectUrl = `https://${host}/Signin`;
  const homeRedirectUrl = `https://${host}`;

  // Check if the user is authenticated but trying to access "/Signin" or "/Register"
  if (
    (request.nextUrl.pathname === "/Signin" ||
      request.nextUrl.pathname === "/Register") &&
    user
  ) {
    return NextResponse.redirect(homeRedirectUrl);
  }

  // Check if the user is not authenticated but trying to access certain routes
  if (
    (request.nextUrl.pathname === "/User/Account" ||
      request.nextUrl.pathname === "/User/Orders" ||
      request.nextUrl.pathname === "/User/Wishlist" ||
      request.nextUrl.pathname === "/User/ChangePassword" ||
      request.nextUrl.pathname === "/Checkout") &&
    !user
  ) {
    return NextResponse.redirect(signinRedirectUrl);
  }

  // If none of the above conditions are met, allow the request to proceed
  return NextResponse.next();
}
