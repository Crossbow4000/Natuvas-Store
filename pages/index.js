import Head from 'next/head';

export default function Home({ printfulResponse }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      {printfulResponse}
      
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
  .then(data => { return JSON.stringify(data) })

  return {
    props: {
      printfulResponse: printfulResponse,
    },
  };
}