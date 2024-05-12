import { MiddlewareConfig } from 'next/dist/build/analysis/get-page-static-info';
import { NextResponse } from 'next/server';

// I believe middleware runs before the api handlers and pages and it could be async if needed.
// It can be usefull for user session management(if it's not too complicated), redirects, logging, analytics.
export function middleware(request: Request) {
  console.log('Hello from middleware!');

  // return Response.json({ message: 'Hello from middleware!' });

  // We can use NextResponse redirect or rewrite functionality. Second parameter of the URL function is "base".
  return NextResponse.redirect(new URL('/', request.url));
}

// MiddlewareConfig doesn't have matcher property but matchers, so I don't think it should use here.
export const config = {
  // It can be just '/about' for only about page, or we can use below path to match all the sub routes.
  matcher: ['/about/:path*'],
};
