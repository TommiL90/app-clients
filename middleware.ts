import { checkUserAuthenticated } from '@/functions/checkUserAuthenticated'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {

  const accessToken: boolean = checkUserAuthenticated()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-api-key', 'test')

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // if (request.nextUrl.pathname.endsWith('/information')) {
  //   return NextResponse.redirect(new URL('/information/characters', request.url))
  // }

  if (request.nextUrl.pathname.startsWith('/home')) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return response
}
