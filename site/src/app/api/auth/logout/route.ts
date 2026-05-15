import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ADMIN_SESSION_COOKIE } from '@/lib/adminAuth'

export async function POST() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete(ADMIN_SESSION_COOKIE)
    return NextResponse.json({ message: 'Logout bem-sucedido' })
  } catch {
    return NextResponse.json(
      { message: 'Erro ao fazer logout.' },
      { status: 500 }
    )
  }
}
