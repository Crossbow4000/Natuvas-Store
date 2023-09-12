import Head from 'next/head';

export default function Home({ printfulApiKey }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      {printfulApiKey}
      
    </div>
  );
}

export async function getStaticProps() {
  const printfulApiKey = process.env.PRINTFUL;

  return {
    props: {
      printfulApiKey,
    },
  };
}