'use client'

import { useState } from 'react'
import MarketplaceSelect from './MarketplaceSelect'
import ProductTable from './ProductTable'

export default function SelectableTable({ marketplaceProducts }) {
  const [marketplace, setMarketplace] = useState('amazon')

  return (
    <>
      <MarketplaceSelect marketplace={marketplace} setMarketplace={setMarketplace} />

      <ProductTable {...marketplaceProducts[marketplace]} />
    </>
  )
}
