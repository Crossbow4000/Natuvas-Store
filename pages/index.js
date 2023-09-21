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
  321653917, // 0008,
  321653923  // 0011
]

export async function getStaticProps() {
  const printfulApiKey = await process.env.PRINTFUL

  const allItems = await fetch(`https://api.printful.com/v2/sync-products?limit=100`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + printfulApiKey },
  })
  .then(response => { return response.json() })

  const featuredItemsList = await Promise.all(
    featuredItems.map(async (productId) => {
      const response = await fetch(`https://api.printful.com/v2/sync-products/${productId}`, {
        headers: {
          'Authorization': 'Bearer ' + printfulApiKey,
          'Content-Type': 'application/json',
        },
      });

      data = response.json().data

      return { "name": data.name, "thumbnail": data.thumbnail_url }
    })
  );

  return {
    props: {
      featuredItems: featuredItemsList,
    },
  }
}