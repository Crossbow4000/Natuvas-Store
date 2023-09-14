import Head from 'next/head';
import HeroSection from '../components/home/heroSection/heroSection.js'

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
        <title>Create Next App</title>
      </Head>

      <HeroSection />
    </div>
  );
}

export async function getStaticProps() {
  const printfulApiKey = await process.env.PRINTFUL;
  const printfulResponse = await fetch('https://api.printful.com/store/products', {
    method: 'GET',
    headers: {'Authorization': 'Bearer ' + printfulApiKey,}
  })
  .then(response => { return response.json() })

  return {
    props: {
      printfulResponse: printfulResponse,
    },
  };
}