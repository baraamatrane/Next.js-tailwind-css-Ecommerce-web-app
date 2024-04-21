import { NextResponse } from "next/server";

export function middleware(request) {
  const referer = request.headers.get("Referer");

  // Extract token from the request headers or cookies
  const token =
    request.headers
      .get("cookie")
      ?.split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1] || request.cookies?.token;

  // Check if the user is authenticated but trying to access "/Signin" or "/Register"
  if (
    (request.nextUrl.pathname === "/Signin" ||
      request.nextUrl.pathname === "/Register") &&
    token
  ) {
    return NextResponse.redirect(request.headers.get("host"));
  }

  // Check if the user is not authenticated but trying to access certain routes
  if (
    (request.nextUrl.pathname === "/User/Account" ||
      request.nextUrl.pathname === "/User/Orders" ||
      request.nextUrl.pathname === "/User/Wishlist" ||
      request.nextUrl.pathname === "/User/ChangePassword" ||
      request.nextUrl.pathname === "/Checkout") &&
    !token
  ) {
    return NextResponse.redirect(`${request.headers.get("host")}/Signin`);
  }

  // If none of the above conditions are met, allow the request to proceed
  return NextResponse.next();
}
