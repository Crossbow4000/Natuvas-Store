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
  const printfulApiKey = process.env.PRINTFUL;
  console.log(printfulApiKey)

  const allItemsResponse = await fetch(`https://api.printful.com/products?limit=100`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + printfulApiKey,
    },
  });
  const allItemsData = await allItemsResponse.json();

  const featuredItemsList = await Promise.all(
    featuredItems.map(async (productId) => {
      const response = await fetch(`https://api.printful.com/products/`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + printfulApiKey,
        },
      });
      const responseData = await response.json();

      return { "name": "Image", "image": "responseData.data[0].image" };
    })
  );

  console.log(allItemsData);

  return {
    props: {
      featuredItems: featuredItemsList,
    },
  };
}
