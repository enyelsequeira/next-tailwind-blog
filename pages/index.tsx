import Head from "next/head";
import Banner from "../components/banner/banner";
import Hero from "../components/hero/hero";
import Social from "../components/social-media/social-media";


export default function Home() {
 


  return (
    
    <>
        <Head>
        <title>Home page of E.S.Codes</title>
        <link rel="icon" href="/icon.jpg" sizes="32x32" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content="this is the starter page of the blog E.S.CODES" />
        <meta property="og:description" content="this is the starter page of the blog E.S.CODES" />
      
       
      </Head>
  
      <Hero/>
      <Social/>
      <Banner/>
      
    </>
  );
}
