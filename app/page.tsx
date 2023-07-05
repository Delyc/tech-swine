import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/sections/Hero'
import MissionVision from '@/components/sections/MissionVision'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Video from '@/components/sections/Video'
import Footer from '@/components/layouts/Footer'
import WhatWeOffer from '@/components/sections/WhatWeOffer'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionVision />
      <WhatWeOffer />
      {/* <Services /> */}
      <Gallery />
      {/* <Video /> */}
      <Footer />
    </>
  )
}
