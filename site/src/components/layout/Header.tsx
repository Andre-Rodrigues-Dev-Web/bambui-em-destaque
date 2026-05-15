'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { 
  Search, Sun, Menu, X, 
  Home, Map, GraduationCap, 
  Heart, Landmark, Building2, 
  Calendar, Bus, MonitorPlay 
} from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

const navLinks = [
  { name: 'Destaques', href: '/', icon: <Home size={18} />, active: true },
  { name: 'Conheça Bambuí', href: '/conheca', icon: <Map size={18} /> },
  { name: 'Educação', href: '/educacao', icon: <GraduationCap size={18} /> },
  { name: 'Saúde', href: '/saude', icon: <Heart size={18} /> },
  { name: 'Política', href: '/politica', icon: <Landmark size={18} /> },
  { name: 'Empresas da cidade', href: '/empresas', icon: <Building2 size={18} /> },
  { name: 'Eventos', href: '/eventos', icon: <Calendar size={18} /> },
  { name: 'Horários de ônibus', href: '/onibus', icon: <Bus size={18} /> },
  { name: 'Mídias', href: '/midias', icon: <MonitorPlay size={18} /> },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full">
      {/* Header Banner */}
      <div className="header-banner min-h-[200px] flex flex-col justify-between">
        <div className="top-bar py-4">
          <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
            <nav className="hidden md:flex gap-5 text-[15px] font-bold text-primary">
              <Link href="/sobre" className="hover:text-primary-hover">Sobre-Nós</Link>
              <Link href="/parceiros" className="hover:text-primary-hover">Seja nosso parceiro</Link>
              <Link href="/contato" className="hover:text-primary-hover">Contato</Link>
            </nav>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm pr-5 border-r border-black/10">
                <Sun className="text-orange-400" size={18} />
                <span>Bambuí: 24°C</span>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-800 hover:text-primary"><FaFacebook size={20} /></Link>
                <Link href="#" className="text-gray-800 hover:text-primary"><FaInstagram size={20} /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="logo-section py-8 flex justify-center">
          <Link href="/">
            <Image 
              src="https://raw.githubusercontent.com/Andre-Rodrigues-Dev-Web/bambui-em-destaque/main/site/assets/imagens/logo.png" 
              alt="Logo Bambuí em Destaque"
              width={280}
              height={140}
              className="h-[120px] md:h-[140px] w-auto drop-shadow-md"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`main-nav transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-5 text-white text-[14px] lg:text-[15px] font-bold transition-colors hover:bg-white/10 ${link.active ? 'bg-white/10' : ''}`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button className="text-white p-4 border-l border-white/20 hover:bg-white/10">
            <Search size={22} />
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-white/10 animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-white/5">
                  <Link 
                    href={link.href}
                    className="flex items-center gap-3 px-6 py-4 text-white font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
