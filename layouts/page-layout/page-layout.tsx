import React, { FC, ReactNode } from 'react'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'

interface Props{
  children: ReactNode
}
const PageLayout:FC<Props> = ({children}) => {
  return (
    <main className="max-w-screen-xl m-auto">
      <Header/>
      {children}
      <Footer/>
    </main>
  )
}

export default PageLayout
