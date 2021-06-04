import Head from 'next/head';
import styles from '@styles/Home.module.scss';
import Link from 'next/link';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@components/layout';

export default function Home() {
  const { t } = useTranslation('about');
  return (
    <div className={styles.container}>
      <Head>
        <title>RedFox Auction</title>
        <meta name="description" content="RedFox Auction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <Link href="/about">{t('title')}</Link>
          <Link href="/home">Home call API using axios</Link>
          <Link href="/arena-details">Arena Details</Link>
        </main>
      </Layout>
    </div>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['about']))
    }
  };
};
