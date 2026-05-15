import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email e senha são obrigatórios.' },
        { status: 400 }
      )
    }

    const adminEmail = process.env.ADMIN_EMAIL?.trim()
    const adminPassword = process.env.ADMIN_PASSWORD?.trim()

    if (!adminEmail || !adminPassword) {
      console.error('Variáveis de ambiente ADMIN_EMAIL ou ADMIN_PASSWORD não configuradas')
      return NextResponse.json(
        { message: 'Erro de configuração do servidor.' },
        { status: 500 }
      )
    }

    const emailMatch = email.trim() === adminEmail
    const passwordMatch = password.trim() === adminPassword

    if (emailMatch && passwordMatch) {
      const cookieStore = await cookies()
      cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60,
        path: '/',
      })

      return NextResponse.json({ message: 'Login bem-sucedido' })
    }

    return NextResponse.json(
      { message: 'Email ou senha incorretos.' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Erro ao processar login:', error)
    return NextResponse.json(
      { message: 'Erro ao processar requisição.' },
      { status: 500 }
    )
  }
}
