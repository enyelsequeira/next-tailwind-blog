import { ThemeProvider } from "next-themes"
import Head from "next/head"
import PageLayout from "../layouts/page-layout/page-layout"
import '../styles/global.css'

const meta = {
  title: 'E.S.Codes ',
  description: 'Blog about how to learn to code and what can you do to improve further',
  image: '/icon.png'


}

function MyApp({ Component, pageProps }) {


  <Head>
    <title>Home page of ${meta.title}</title>
    <link rel="icon" href="/icon.jpg" sizes="32x32" />
    <meta name="robots" content="follow, index" />
    <meta name="description" content={meta.description} />
    <meta property="og:site_name" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:image" content={meta.image} />
    <link rel="icon" href={meta.image} sizes="32x32" />
  </Head>

  return (
    <ThemeProvider attribute="class">
      <PageLayout>
        <Component  {...pageProps} />
      </PageLayout>
    </ThemeProvider>

  )
}

export default MyApp
