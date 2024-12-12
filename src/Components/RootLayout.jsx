import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from './Banner'
import Header from './Header'

export default function RootLayout() {
  return (
    <>
        <Banner/>
        <Header/>
      
        <Outlet/>
    </>
  )
}
