import { ThemeProvider } from "next-themes"
import Layout from "../components/layout/layout"
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>

        <Component  {...pageProps} />
      </Layout>



    </ThemeProvider>

  )
}

export default MyApp
