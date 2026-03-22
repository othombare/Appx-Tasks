import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {   // 👈 Capital L
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout   // 👈 match name