import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add compression headers
  const acceptEncoding = request.headers.get("accept-encoding") || "";

  if (acceptEncoding.includes("br")) {
    response.headers.set("Content-Encoding", "br");
  } else if (acceptEncoding.includes("gzip")) {
    response.headers.set("Content-Encoding", "gzip");
  }

  return response;
}

// Only apply middleware to static assets
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
