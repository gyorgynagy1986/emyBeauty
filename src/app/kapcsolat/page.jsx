import React from 'react'
import Hero from '@/components/layouts/kapcsolat/hero/Hero'
import ContactSection from '@/components/layouts/kapcsolat/contactForm/ContactSection' 

export const metadata = {
    title: 'Kapcsolat - Emy kozmetika',
    openGraph: {
      title: 'Kapcsolat - Emy kozmetika',
      description: '',
    },
  }

const page = () => {
  return (
    <>
    <Hero />
    <ContactSection />
    </>
  )
}

export default page