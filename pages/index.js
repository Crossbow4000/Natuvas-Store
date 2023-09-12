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
  });

  return {
    props: {
      printfulResponse: printfulResponse.json.toString(),
    },
  };
}