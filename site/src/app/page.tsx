import Highlights from "@/components/sections/Highlights";
import CityPhotos from "@/components/sections/CityPhotos";
import Hospitality from "@/components/sections/Hospitality";
import CityEvents from "@/components/sections/CityEvents";
import Sidebar from "@/components/layout/Sidebar";
import Newsletter from "@/components/sections/Newsletter";
import { Highlight, Photo, Hotel, Event, Ad } from "@/types";
import { createClient } from '@/lib/supabase'

async function getHomeData() {
  const supabase = await createClient()
  const { data: highlightsFromDb, error } = await supabase.from('highlights').select('*')

  if (error) {
    console.error('Supabase fetch failed:', error)
  }

  const highlights: Highlight[] = highlightsFromDb ?? [
    {
      id: '1',
      title: 'Preparativos para a EXPO Bambuí 2026 a todo vapor!',
      image_url: 'https://jornalbambui.com.br/wp-content/uploads/2026/04/expo-bambui.jpg',
      link: 'https://jornalbambui.com.br',
      type: 'large',
      share_links: { whatsapp: '#', telegram: '#' }
    },
    {
      id: '2',
      title: 'IFMG Campus Bambuí inaugura o CanastraHub para inovação tecnológica',
      image_url: 'https://jornalbambui.com.br/wp-content/uploads/2026/04/canastrahub.jpg',
      link: 'https://jornalbambui.com.br',
      type: 'small',
      share_links: { whatsapp: '#', facebook: '#' }
    }
  ]

  const photos: Photo[] = [
    { id: '1', image_url: 'https://picsum.photos/seed/bambui1/400/300', alt: 'Cidade 1' },
    { id: '2', image_url: 'https://picsum.photos/seed/bambui2/400/300', alt: 'Cidade 2' },
    { id: '3', image_url: 'https://picsum.photos/seed/bambui3/400/300', alt: 'Cidade 3' },
    { id: '4', image_url: 'https://picsum.photos/seed/bambui4/400/300', alt: 'Cidade 4' },
    { id: '5', image_url: 'https://picsum.photos/seed/bambui5/400/300', alt: 'Cidade 5' },
    { id: '6', image_url: 'https://picsum.photos/seed/bambui6/400/300', alt: 'Cidade 6' },
  ]

  const hotels: Hotel[] = [
    { id: '1', name: 'Hotel A', image_url: 'https://picsum.photos/seed/hotelA/400/300', link: '#' },
    { id: '2', name: 'Hotel B', image_url: 'https://picsum.photos/seed/hotelB/400/300', link: '#' },
    { id: '3', name: 'Hotel C', image_url: 'https://picsum.photos/seed/hotelC/400/300', link: '#' },
  ]

  const events: Event[] = [
    { id: '1', image_url: 'https://picsum.photos/seed/event1/800/450' },
    { id: '2', image_url: 'https://picsum.photos/seed/event2/800/450' },
  ]

  const ads: Ad[] = [
    {
      id: 'ad1',
      type: 'native',
      label: 'Patrocinado',
      title: 'Velance: A tecnologia que sua empresa precisa',
      description: 'Sistemas modernos, sites rápidos e marketing digital de resultados.',
      image_url: 'https://picsum.photos/seed/ad1/300/250',
      link: 'https://velance.com.br'
    }
  ]

  return { highlights, photos, hotels, events, ads }
}

export default async function Home() {
  const { highlights, photos, hotels, events, ads } = await getHomeData()

  return (
    <main className="min-h-screen">
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <Highlights highlights={highlights} />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <div className="flex flex-col gap-8">
            <CityPhotos photos={photos} />
            <Hospitality hotels={hotels} />
            <CityEvents events={events} />
          </div>
          
          <Sidebar ads={ads} />
        </div>
      </div>
      
      <Newsletter />
    </main>
  );
}
