'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1500)
  }

  return (
    <section className="bg-gray-50 py-16 border-y border-gray-200">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-primary">Receba as notícias de Bambuí no seu e-mail</h3>
            <p className="text-gray-600">Inscreva-se em nossa newsletter e não perca nenhum destaque da cidade.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="btn-news whitespace-nowrap px-8 py-3 disabled:opacity-50"
            >
              {status === 'loading' ? 'Inscrito...' : 'Inscrever-se'}
            </button>
          </form>
        </div>
        {status === 'success' && (
          <p className="mt-4 text-green-600 font-semibold animate-in fade-in slide-in-from-top-2">
            Obrigado por se inscrever!
          </p>
        )}
      </div>
    </section>
  )
}
