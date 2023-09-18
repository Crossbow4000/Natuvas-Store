import { useEffect } from 'react'
import Head from 'next/head';

import getFeaturedItems from '../data/featured.js'

import NavigationBar from '../components/home/navigationBar/navigationBar.js'
import HeroSection from '../components/home/heroSection/heroSection.js'
import WelcomeSection from '../components/home/welcomeSection/welcomeSection.js'
import FeaturedSection from '../components/home/featuredSection/featuredSection.js'
import SplashText1 from '../components/home/splashText1/splashText1.js'
import SplashText2 from '../components/home/splashText2/splashText2.js';

export default function Home({ featuredItems }) {

  useEffect(() => { window.scrollTo(0, 80) }, []);

  return (
    <div>
      <Head>
        <title>Natuvas | Nature Canvases</title>
      </Head>

      <NavigationBar />
      <HeroSection />
      <WelcomeSection />
      <FeaturedSection featuredItems={featuredItems} />
      <SplashText1 />
      <SplashText2 />
    </div>
  );
}

export async function getStaticProps() {
  const printfulApiKey = await process.env.PRINTFUL;
  const printfulResponse = await fetch('https://api.printful.com/store/products?limit=100', {
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + printfulApiKey,}
  })
  .then(response => { return response.json() })

  return {
    props: {
      featuredItems: printfulResponse,
    },
  };
}