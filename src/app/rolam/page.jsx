import React from 'react'
import Hero from '@/components/layouts/about/hero/Hero'
import Marceting from '@/components/layouts/about/marketing/Marketing'
import Marceting2 from '@/components/layouts/about/marketing/Marketing2'
import Banner from "@/components/banner/Banner";

const page = () => {
  return (
    <>
    <Hero />
    <Banner />
    <Marceting />
    <Banner />
    <Marceting2 />
    </>
  )
}

export default page