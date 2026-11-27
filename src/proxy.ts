import { NextResponse, type NextRequest } from "next/server";

const cookieOptions = { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" } as const;

export function prefersSpanish(header: string | null): boolean {
  if (!header) return false;
  const [first] = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.slice(2)) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return first.tag.startsWith("es");
}

export function proxy(request: NextRequest): NextResponse {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/en") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/es") {
    const response = NextResponse.next();
    response.cookies.set("lang", "es", cookieOptions);
    return response;
  }

  if (searchParams.get("lang") === "en") {
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set("lang", "en", cookieOptions);
    return response;
  }

  const cookie = request.cookies.get("lang")?.value;
  const spanish = cookie === "es" || (!cookie && prefersSpanish(request.headers.get("accept-language")));
  return spanish
    ? NextResponse.redirect(new URL("/es", request.url))
    : NextResponse.rewrite(new URL("/en", request.url));
}

export const config = { matcher: ["/", "/en", "/es"] };
