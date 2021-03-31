
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    const meta = {
      title: 'Enyel Sequeira blog',
      description: 'Blog about how to learn to code and what can you do to improve further',

    }
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,500;0,600;0,700;1,600&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-body-light dark:bg-body-dark text-words-light dark:text-words-dark ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument