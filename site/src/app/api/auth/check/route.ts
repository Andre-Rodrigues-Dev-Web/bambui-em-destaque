import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE } from '@/lib/adminAuth'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get(ADMIN_SESSION_COOKIE)

    if (session?.value === ADMIN_SESSION_VALUE) {
      return NextResponse.json({ authenticated: true })
    }

    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    )
  } catch {
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    )
  }
}
