import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/sections/Hero'
import MissionVision from '@/components/sections/MissionVision'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionVision />
      <Services />
      <Gallery />
    </>

  )
}
