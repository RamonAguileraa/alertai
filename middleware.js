import { NextResponse } from 'next/server';

// TODO: Integrate with Supabase Auth or your authentication system
// This middleware protects private routes and handles authentication

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/pricing',
    '/privacy',
    '/terms',
    '/contact',
    '/login',
    '/signup',
    '/forgot-password',
    '/api/webhooks', // Webhook endpoints are public but should verify signatures
    '/api/auth' // Authentication endpoints
  ];

  // Admin routes that require admin privileges
  const adminRoutes = [
    '/admin'
  ];

  // Dashboard routes that require authentication
  const protectedRoutes = [
    '/dashboard'
  ];

  // Check if the current path is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route)
  );

  // Check if the current path is an admin route
  const isAdminRoute = adminRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );

  // For public routes, allow access
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // TODO: Get authentication token from request
  // This would typically come from cookies, headers, or session
  const token = request.cookies.get('auth-token')?.value;
  const userRole = request.cookies.get('user-role')?.value;

  // Check if user is authenticated
  if (!token && (isProtectedRoute || isAdminRoute)) {
    // Redirect to login page for protected routes
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Check admin access for admin routes
  if (isAdminRoute && userRole !== 'admin') {
    // Redirect to dashboard or show 403 error
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // TODO: Verify token validity with your auth system
  // This is a placeholder - in production you would:
  // 1. Verify the JWT token signature
  // 2. Check token expiration
  // 3. Validate user session
  // 4. Check user permissions

  // For now, we'll allow access if a token exists
  // In production, you might want to verify the token here:
  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   // Add user info to request headers for use in API routes
  //   const requestHeaders = new Headers(request.headers);
  //   requestHeaders.set('x-user-id', decoded.userId);
  //   requestHeaders.set('x-user-role', decoded.role);
  //   
  //   return NextResponse.next({
  //     request: {
  //       headers: requestHeaders,
  //     },
  //   });
  // } catch (error) {
  //   // Invalid token, redirect to login
  //   const loginUrl = new URL('/login', request.url);
  //   loginUrl.searchParams.set('redirect', pathname);
  //   return NextResponse.redirect(loginUrl);
  // }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
