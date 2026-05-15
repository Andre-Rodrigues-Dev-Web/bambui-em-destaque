import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { message: 'Credenciais do administrador não configuradas.' },
        { status: 500 }
      )
    }

    if (email === adminEmail && password === adminPassword) {
      const cookieStore = await cookies()
      cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60,
      })

      return NextResponse.json({ message: 'Login bem-sucedido' })
    }

    return NextResponse.json(
      { message: 'Email ou senha incorretos.' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao processar login.' },
      { status: 500 }
    )
  }
}
