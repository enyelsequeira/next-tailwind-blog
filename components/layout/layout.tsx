import React, { FC } from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'

const Layout: FC = ({children}) => {
  return (
    <main className="max-w-screen-xl m-auto border-black border-4">
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}

export default Layout
