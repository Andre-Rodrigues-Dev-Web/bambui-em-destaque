import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'src', 'data', 'homeContent.json')

export async function GET() {
  try {
    const fileContents = await fs.readFile(filePath, 'utf-8')
    const json = JSON.parse(fileContents)
    return NextResponse.json(json)
  } catch (error) {
    return NextResponse.json(
      { message: 'Não foi possível ler o arquivo JSON de conteúdo.' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const formatted = JSON.stringify(data, null, 2)
    await fs.writeFile(filePath, formatted, 'utf-8')
    return NextResponse.json({ message: 'Conteúdo salvo com sucesso.' })
  } catch (error) {
    return NextResponse.json(
      { message: 'Não foi possível salvar o arquivo JSON. Verifique o conteúdo enviado.' },
      { status: 500 }
    )
  }
}
