import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";
export function middleware(request: NextRequest) {
  const cookie = cookies().get("user");

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
