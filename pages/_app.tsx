import { ThemeProvider } from "next-themes"
import PageLayout from "../layouts/page-layout/page-layout"
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <PageLayout>
        <Component  {...pageProps} />
      </PageLayout>
    </ThemeProvider>

  )
}

export default MyApp
