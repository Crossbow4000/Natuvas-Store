import Head from 'next/head';
import NavigationBar from '../components/home/navigationBar/navigationBar.js'
import HeroSection from '../components/home/heroSection/heroSection.js'
import WelcomeSection from '../components/home/welcomeSection/welcomeSection.js'


/* 
printfulResponse.result.map((item, i) => 
  <ItemCard itemImageURL={item.thumbnail_url} itemName={item.name}/>
) 
*/

export default function Home({ printfulResponse }) {
  const storeObjects = [];

  return (
    <div>
      <Head>
        <title>Natuvas | Nature Canvases</title>
      </Head>

      <NavigationBar />
      <HeroSection />
      <WelcomeSection />
    </div>
  );
}

// export async function getStaticProps() {
//   const printfulApiKey = await process.env.PRINTFUL;
//   const printfulResponse = await fetch('https://api.printful.com/store/products', {
//     method: 'GET',
//     headers: {'Authorization': 'Bearer ' + printfulApiKey,}
//   })
//   .then(response => { return response.json() })

//   return {
//     props: {
//       printfulResponse: printfulResponse,
//     },
//   };
// }