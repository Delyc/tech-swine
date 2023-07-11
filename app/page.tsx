import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/sections/Hero'
import MissionVision from '@/components/sections/MissionVision'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Video from '@/components/sections/Video'
import Footer from '@/components/layouts/Footer'
import WhatWeOffer from '@/components/sections/WhatWeOffer'
import HowItWorks from '@/components/sections/HowItWorks'
import Demo from '@/components/sections/Demo'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionVision />
      <HowItWorks />
      <WhatWeOffer />
      {/* <Services /> */}
      <Demo />
      <Gallery />
      {/* <Video /> */}
      <Footer />
    </>
  )
}
