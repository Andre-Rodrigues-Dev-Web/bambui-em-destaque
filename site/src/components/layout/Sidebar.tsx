import { Ad } from '@/types'
import { Ambulance, Shield, Flame, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface SidebarProps {
  ads: Ad[]
}

const utilityPhones = [
  { name: 'SAMU: 192', icon: <Ambulance size={18} className="text-red-500" /> },
  { name: 'Polícia: 190', icon: <Shield size={18} className="text-blue-500" /> },
  { name: 'Bombeiros: 193', icon: <Flame size={18} className="text-orange-500" /> },
  { name: 'CEMIG: 0800 721 0116', icon: <Zap size={18} className="text-yellow-500" /> },
]

export default function Sidebar({ ads }: SidebarProps) {
  return (
    <aside className="flex flex-col gap-8" role="complementary" aria-label="Lateral">
      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-bold text-primary border-b-2 border-gray-100 pb-2">Publicidades</h3>
        
        {ads.map((ad) => (
          <div key={ad.id}>
            {ad.type === 'native' ? (
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg">
                <span className="text-[10px] uppercase text-gray-400 tracking-wider block mb-3">{ad.label || 'Patrocinado'}</span>
                {ad.image_url && (
                  <div className="relative w-full h-40 mb-4 rounded overflow-hidden">
                    <Image 
                      src={ad.image_url} 
                      alt={ad.title || 'Anúncio'} 
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h4 className="font-bold text-primary mb-2">{ad.title}</h4>
                <p className="text-xs text-gray-500 mb-4">{ad.description}</p>
                <Link href={ad.link || '#'} className="text-xs font-bold text-accent flex items-center gap-1 hover:underline">
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold border-2 border-dashed border-gray-200">
                Publicidade
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-primary border-b-2 border-gray-100 pb-3 mb-5">Telefones Úteis</h3>
        <ul className="flex flex-col gap-4">
          {utilityPhones.map((phone, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
              {phone.icon}
              <span>{phone.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
