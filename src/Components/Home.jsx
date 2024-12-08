import React from 'react'
import Banner from './Banner'
import Header from './Header'
import HeaderSection from './HeaderSection'
import ProductListing from './ProductListing'
import OffCanvas from './OffCanvas'

export default function Home() {
  return (
    <>
        <Banner />
        <Header />
        <OffCanvas/>
        <HeaderSection/>
        <ProductListing title={"Best Selling Products"} type='1'/>
        <ProductListing title={"Top Selling Products"} type='2'/>
    </>
  )
}
