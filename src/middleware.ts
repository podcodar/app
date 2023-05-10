import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // add origin path to redirect when not session available
  const headers = new Headers(request.headers);
  headers.set("x-url", request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers }
  });
};

export const config = {
  matcher: ["/admin/:path*"]
};
