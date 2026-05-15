import { NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE, getAdminCredentials } from '@/lib/adminAuth'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { message: 'Requisição inválida.' },
        { status: 400 }
      )
    }

    const { email, password } = body

    if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
      return NextResponse.json(
        { message: 'Email e senha são obrigatórios.' },
        { status: 400 }
      )
    }

    const credentials = getAdminCredentials()
    if (!credentials) {
      console.error('Variáveis de ambiente ADMIN_EMAIL ou ADMIN_PASSWORD não configuradas')
      return NextResponse.json(
        { message: 'Erro de configuração do servidor.' },
        { status: 500 }
      )
    }

    const emailMatch = email.trim() === credentials.email
    const passwordMatch = password.trim() === credentials.password

    if (emailMatch && passwordMatch) {
      const response = NextResponse.json({ message: 'Login bem-sucedido' })
      response.cookies.set(ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60,
        path: '/',
      })

      return response
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
