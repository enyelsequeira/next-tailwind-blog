import React, { FC } from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

const PageLayout: FC = ({children}) => {
  return (
    <main className="max-w-screen-xl m-auto border-black border-4">
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}

export default PageLayout
