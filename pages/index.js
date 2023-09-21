import { useEffect } from 'react'
import Head from 'next/head'

import NavigationBar from '../components/home/navigationBar/navigationBar.js'
import HeroSection from '../components/home/heroSection/heroSection.js'
import WelcomeSection from '../components/home/welcomeSection/welcomeSection.js'
import FeaturedSection from '../components/home/featuredSection/featuredSection.js'
import SplashText1 from '../components/home/splashText1/splashText1.js'
import SplashText2 from '../components/home/splashText2/splashText2.js'

export default function Home({ featuredItems, propId }) {

  useEffect(() => { window.scrollTo(0, 80) }, [])

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
      {JSON.stringify(propId)}
    </div>
  )
}

const featuredItems = [ 
  320175557, // 0008,
  320175562  // 0011
]


export async function getStaticProps() {
  const printfulApiKey = await process.env.PRINTFUL

  const featuredItemsList = await fetch(`https://api.printful.com/v2/sync-products`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + printfulApiKey },
  })
  .then(response => { return response.json() })
  .then(data => { return JSON.stringify(data) })

  return {
    props: {
      featuredItems: featuredItemsList,
    },
  }
}