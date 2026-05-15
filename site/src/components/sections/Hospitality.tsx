import { Hotel } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

interface HospitalityProps {
  hotels: Hotel[]
}

export default function Hospitality({ hotels }: HospitalityProps) {
  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8" aria-labelledby="hospedagens-heading">
      <h2 id="hospedagens-heading" className="section-title">Hospedagens</h2>
      <div className="hospitality-grid">
        {hotels.map((hotel) => (
          <article key={hotel.id} className="text-center group">
            <div className="aspect-[4/3] bg-gray-100 mb-4 rounded-lg overflow-hidden relative">
              <Image 
                src={hotel.image_url} 
                alt={hotel.name} 
                fill
                loading="lazy" 
                sizes="(max-width: 1024px) 50vw, 260px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">{hotel.name}</h3>
            <Link href={hotel.link} className="btn-news w-full">Visualizar</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
