import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { cookies } from 'next/headers'
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE } from '@/lib/adminAuth'

const filePath = path.join(process.cwd(), 'src', 'data', 'homeContent.json')

async function isAuthenticated() {
  const cookieStore = await cookies()
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)
  return session?.value === ADMIN_SESSION_VALUE
}

export async function GET() {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    return NextResponse.json(
      { message: 'Não autorizado' },
      { status: 401 }
    )
  }

  try {
    const fileContents = await fs.readFile(filePath, 'utf-8')
    const json = JSON.parse(fileContents)
    return NextResponse.json(json)
  } catch {
    return NextResponse.json(
      { message: 'Não foi possível ler o arquivo JSON de conteúdo.' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    return NextResponse.json(
      { message: 'Não autorizado' },
      { status: 401 }
    )
  }

  try {
    const data = await request.json()
    const formatted = JSON.stringify(data, null, 2)
    await fs.writeFile(filePath, formatted, 'utf-8')
    return NextResponse.json({ message: 'Conteúdo salvo com sucesso.' })
  } catch {
    return NextResponse.json(
      { message: 'Não foi possível salvar o arquivo JSON. Verifique o conteúdo enviado.' },
      { status: 500 }
    )
  }
}
