'use client'

import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch('/api/admin/content')
        if (!response.ok) {
          throw new Error(`Falha ao carregar conteúdo: ${response.status}`)
        }

        const data = await response.json()
        setContent(JSON.stringify(data, null, 2))
      } catch (error) {
        setErrorMessage('Não foi possível carregar o conteúdo. Verifique o servidor.')
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [])

  async function handleSave() {
    setStatusMessage(null)
    setErrorMessage(null)

    try {
      const parsed = JSON.parse(content)
      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.message || 'Falha ao salvar o conteúdo')
      }

      setStatusMessage('Conteúdo salvo com sucesso no arquivo JSON.')
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Erro ao salvar. Verifique se o JSON está válido.'
      )
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Painel Admin</h1>
          <p className="mt-2 text-slate-600">
            Edite os dados do site e salve o arquivo JSON de conteúdo.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          {isLoading ? (
            <div className="text-slate-700">Carregando conteúdo...</div>
          ) : (
            <>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Conteúdo JSON
              </label>
              <textarea
                className="h-[650px] w-full rounded-3xl border border-slate-300 bg-slate-950 p-4 text-sm text-white outline-none placeholder:text-slate-500"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                spellCheck={false}
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  {statusMessage && <p className="text-sm text-emerald-600">{statusMessage}</p>}
                  {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
                </div>
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Salvar JSON
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
