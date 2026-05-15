import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete('admin_session')
    return NextResponse.json({ message: 'Logout bem-sucedido' })
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao fazer logout.' },
      { status: 500 }
    )
  }
}
