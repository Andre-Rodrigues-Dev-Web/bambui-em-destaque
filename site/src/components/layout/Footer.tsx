import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="footer-grid">
          <div className="flex flex-col gap-5">
            <Image 
              src="https://raw.githubusercontent.com/Andre-Rodrigues-Dev-Web/bambui-em-destaque/main/site/assets/imagens/logo.png" 
              alt="Logo Bambuí em Destaque"
              width={160}
              height={80}
              className="h-20 w-auto"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Bambuí em Destaque é um site com objetivo de centralizar informações da cidade, promovendo o
              turismo, comércio local e a história da nossa região.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary font-bold text-lg">Navegação interna</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-gray-500 text-sm hover:text-primary hover:pl-1 transition-all">Início</Link></li>
              <li><Link href="/historia" className="text-gray-500 text-sm hover:text-primary hover:pl-1 transition-all">História da cidade</Link></li>
              <li><Link href="/empresas" className="text-gray-500 text-sm hover:text-primary hover:pl-1 transition-all">Empresas da cidade</Link></li>
              <li><Link href="/eventos" className="text-gray-500 text-sm hover:text-primary hover:pl-1 transition-all">Agendas de eventos</Link></li>
              <li><Link href="/onibus" className="text-gray-500 text-sm hover:text-primary hover:pl-1 transition-all">Horários de ônibus</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-primary font-bold text-lg">Navegação externa</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="https://jornalbambui.com.br" className="text-gray-500 text-sm hover:text-primary hover:pl-1 transition-all">Confira as notícias da cidade</Link></li>
              <li><Link href="#" className="text-gray-500 text-sm hover:text-primary hover:pl-1 transition-all">Serviços públicos</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-[13px]">
            &copy; {new Date().getFullYear()} Bambuí em Destaque. Todos os direitos reservados. | Desenvolvido pela <strong className="text-primary">Velance</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
