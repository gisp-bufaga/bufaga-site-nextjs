import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // A/B Testing Logic
  // Controlla se c'è già un bucket assegnato nei cookie
  const bucket = request.cookies.get('ab_test_bucket')?.value

  const response = NextResponse.next()

  // Se non c'è un bucket, assegnane uno (50/50)
  if (!bucket) {
    const newBucket = Math.random() < 0.5 ? 'a' : 'b'
    response.cookies.set('ab_test_bucket', newBucket, {
      maxAge: 60 * 60 * 24 * 30, // 30 giorni
      path: '/',
    })
    
    // Aggiungi header per analytics
    response.headers.set('X-AB-Test-Variant', newBucket)
  } else {
    response.headers.set('X-AB-Test-Variant', bucket)
  }

  return response
}

// Specifica su quali path applicare il middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
