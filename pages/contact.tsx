import Head from 'next/head'
import React from 'react'
import Form from '../components/form/form'

const Contact = () => {
  return (
    <>
    <Head>
    <title>Contact form to share your thought and reach out to the E.S.CODED</title>
    <link rel="icon" href="/icon.jpg" sizes="32x32" />
    <meta name="robots" content="follow, index" />
    <meta name="description" content="Form that will help you get in touch with the developer if you need to" />
    <meta property="og:description"content="Form that will help you get in touch with the developer if you need to" />
  
   
  </Head>
      <Form/>
    </>
  )
}

export default Contact
