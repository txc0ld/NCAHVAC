import { NextResponse, type NextRequest } from "next/server";

/**
 * Content negotiation for agents (acceptmarkdown.com): requests that ask for
 * `text/markdown` are rewritten to the /md/* markdown renditions of each page
 * (including a markdown 404 for unknown paths). Every negotiated response —
 * HTML and markdown — carries `Vary: Accept` so CDNs cache the two variants
 * separately.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accept = request.headers.get("accept") ?? "";

  if (/\btext\/markdown\b/.test(accept) && !pathname.startsWith("/md")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/md" : `/md${pathname}`;
    return NextResponse.rewrite(url);
  }

  const response = NextResponse.next();
  response.headers.append("Vary", "Accept");
  return response;
}

export const config = {
  // Skip API routes, Next internals and static files (anything with a dot).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
