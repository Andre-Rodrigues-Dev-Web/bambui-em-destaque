import { Photo } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

interface CityPhotosProps {
  photos: Photo[]
}

export default function CityPhotos({ photos }: CityPhotosProps) {
  return (
    <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8" aria-labelledby="photos-heading">
      <h2 id="photos-heading" className="section-title">Fotos atuais da cidade</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item group relative overflow-hidden">
            <Image 
              src={photo.image_url} 
              alt={photo.alt} 
              fill
              loading="lazy" 
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 360px"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
      <Link href="/fotos" className="btn-news mt-4">Confira mais fotos</Link>
    </section>
  )
}
