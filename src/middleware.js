import { NextResponse } from "next/server";

export function middleware(request) {
  const referer = request.headers.get("Referer");

  // Check if the user is authenticated but trying to access "/Signin" or "/Register"
  if (
    (request.nextUrl.pathname === "/Signin" ||
      request.nextUrl.pathname === "/Register") &&
    request.cookies.get("token")
  ) {
    return NextResponse.redirect("http://localhost:3000");
  }
  console.log(request.cookies.get("mt"));
  if (
    (request.nextUrl.pathname === "/User/Account" ||
      request.nextUrl.pathname === "/User/Orders" ||
      request.nextUrl.pathname === "/User/Wishlist" ||
      request.nextUrl.pathname === "/User/ChangePassword" ||
      request.nextUrl.pathname === "/Checkout") &&
    !request.cookies.get("token")
  ) {
    return NextResponse.redirect("http://localhost:3000/Signin");
  }

  // If none of the above conditions are met, allow the request to proceed
  return NextResponse.next();
}
