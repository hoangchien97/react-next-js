import Head from 'next/head';
import Layout from '@components/layout';

function ArenaDetails() {
  return (
    <div>
      <Head>
        <title>RedFox Arena Detail</title>
        <meta name="description" content="RedFox Auction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>Arena Detail</Layout>
    </div>
  );
}

export default ArenaDetails;
