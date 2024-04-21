import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host");
  const token = request.cookies.get("token");
  console.log(token);
  const signinRedirectUrl = `https://${host}/Signin`;
  const homeRedirectUrl = `https://${host}`;

  // Check if the user is authenticated but trying to access "/Signin" or "/Register"
  if (
    (request.nextUrl.pathname === "/Signin" ||
      request.nextUrl.pathname === "/Register") &&
    token
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
    !token
  ) {
    return NextResponse.redirect(signinRedirectUrl);
  }

  // If none of the above conditions are met, allow the request to proceed
  return NextResponse.next();
}
