import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const token = request.cookies.get('authToken')?.value
  const userRole = request.cookies.get('userRole')?.value
  
  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    if (!token || userRole !== 'OWNER') {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  // Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  // Redirect to home if already logged in
  if ((pathname === '/login' || pathname === '/register') && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/login', '/register'],
}
