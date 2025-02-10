import React from 'react'
import PriceTable from '@/components/layouts/prices/PriceTable'

export const metadata = {
  title: 'Árak - Emy kozmetika',
  openGraph: {
    title: 'Árak - Emy kozmetika',
    description: 'Árak',
  },
}

const page = () => {
  return (
    <>
    <PriceTable />
    </>
  )
}

export default page