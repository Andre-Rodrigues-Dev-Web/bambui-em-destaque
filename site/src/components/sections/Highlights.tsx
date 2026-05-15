import { Highlight } from '@/types'
import { FaWhatsapp, FaFacebook, FaTelegram } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'

interface HighlightsProps {
  highlights: Highlight[]
}

export default function Highlights({ highlights }: HighlightsProps) {
  if (!highlights || highlights.length === 0) return null

  return (
    <section className="mb-10" aria-label="Destaques principais">
      <div className="highlights-grid">
        {highlights.map((item) => (
          <article key={item.id} className="highlight-item group">
            <div className={`highlight-img ${item.type === 'large' ? 'large' : 'small'}`}>
              <Image 
                src={item.image_url} 
                alt={item.title} 
                fill
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <h2 className={`${item.type === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-4 text-gray-800 leading-tight group-hover:text-primary transition-colors`}>
                {item.title}
              </h2>
              <div className="flex gap-3 mb-4">
                {item.share_links.whatsapp && (
                  <Link href={item.share_links.whatsapp} className="share-btn whatsapp">
                    <FaWhatsapp size={16} /> <span>Compartilhar</span>
                  </Link>
                )}
                {item.share_links.telegram && (
                  <Link href={item.share_links.telegram} className="share-btn telegram">
                    <FaTelegram size={16} />
                  </Link>
                )}
                {item.share_links.facebook && (
                  <Link href={item.share_links.facebook} className="share-btn facebook">
                    <FaFacebook size={16} />
                  </Link>
                )}
              </div>
              <Link href={item.link} className="btn-news">
                {item.type === 'large' ? 'Confira história' : 'Acessar notícias'}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
