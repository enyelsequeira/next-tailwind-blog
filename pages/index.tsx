import Head from "next/head";
import Banner from "../components/banner/banner";
import Hero from "../components/hero/hero";
import Social from "../components/social-media/social-media";


export default function Home() {
 

  return (
    <>
      <Head>
        <title>My homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Social/>
      <Banner/>
      
    </>
  );
}
