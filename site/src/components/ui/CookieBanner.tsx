'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShow(false)
  }

  return (
    <div className={`cookie-banner ${show ? 'show' : ''}`}>
      <div className="flex-1 md:mr-8 mb-4 md:mb-0">
        <h4 className="font-bold text-lg mb-1">Nós valorizamos sua privacidade</h4>
        <p className="text-sm text-gray-600">
          Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{' '}
          <Link href="/privacy-policy" className="underline hover:text-primary">
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
      <div className="flex gap-3 w-full md:w-auto">
        <button 
          onClick={accept}
          className="flex-1 md:flex-none px-8 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-hover transition-colors"
        >
          Aceitar
        </button>
        <button 
          onClick={reject}
          className="flex-1 md:flex-none px-8 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Recusar
        </button>
      </div>
    </div>
  )
}
