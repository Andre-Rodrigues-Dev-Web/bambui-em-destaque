import { Event } from '@/types'
import Image from 'next/image'

interface CityEventsProps {
  events: Event[]
}

export default function CityEvents({ events }: CityEventsProps) {
  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100" aria-labelledby="eventos-heading">
      <h2 id="eventos-heading" className="section-title">Eventos da cidade</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden group relative">
            <Image 
              src={event.image_url} 
              alt={event.title || 'Evento'} 
              fill
              loading="lazy" 
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
