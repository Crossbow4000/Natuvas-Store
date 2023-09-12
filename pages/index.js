import Head from 'next/head';

export default function Home({ printfulApiKey }) {
  const myEnvVar = process.env.PRINTFUL;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      {myEnvVar}
      
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
