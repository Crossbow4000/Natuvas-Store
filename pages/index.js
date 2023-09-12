import Head from 'next/head';

export default function Home({ printfulResponse }) {
  const storeObjects = [];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      {printfulResponse.result.map((item, i) => 
        <div>
          <h1>{item.name}</h1>
          <img src={item.thumbnail_url} alt={"An image of " + item.name}/>
        </div>
      )}

      {JSON.stringify(printfulResponse.result)}
      
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