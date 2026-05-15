import Highlights from "@/components/sections/Highlights";
import CityPhotos from "@/components/sections/CityPhotos";
import Hospitality from "@/components/sections/Hospitality";
import CityEvents from "@/components/sections/CityEvents";
import Sidebar from "@/components/layout/Sidebar";
import Newsletter from "@/components/sections/Newsletter";
import { Highlight, Photo, Hotel, Event, Ad } from "@/types";
import homeContent from "@/data/homeContent.json";
import { createStaticServerSupabaseClient } from '@/lib/supabase'

type HomeContent = {
  highlights: Highlight[];
  photos: Photo[];
  hotels: Hotel[];
  events: Event[];
  ads: Ad[];
};

async function getHomeData() {
  const fallbackContent: HomeContent = homeContent as HomeContent;
  let content: HomeContent = { ...fallbackContent };

  const useSupabase = process.env.NEXT_PUBLIC_USE_SUPABASE === 'true'
  if (!useSupabase) {
    return content
  }

  try {
    const supabase = createStaticServerSupabaseClient()
    const { data: highlightsFromDb, error } = await supabase.from('highlights').select('*')

    if (!error && highlightsFromDb) {
      content.highlights = highlightsFromDb as Highlight[]
    } else if (error) {
      console.warn('Supabase query failed, using JSON content:', error)
    }
  } catch (error) {
    console.error('Supabase not available, using JSON content:', error)
  }

  return content
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
