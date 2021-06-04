import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useSelector } from 'react-redux';
import { getTierByCountry } from '@services/http-client/home';
import { selectIsMobile } from '@stores/slices/common';
import { TopFeature } from '@interfaces/home';

interface HomeProps {
  feature: TopFeature[];
  employees: any;
}

function Home(props: HomeProps) {
  const isMobile = useSelector(selectIsMobile);

  console.log('props', props);

  return (
    <>
      <Head>
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Home RedFox</title>
      </Head>
      <div>
        {isMobile ? 'Home Mobile' : 'Home Desktop'}
        <p>Tier Feature VN</p>
        <div>
          {props.feature.map((tier) => (
            <p key={tier.id}>{tier.title}</p>
          ))}
        </div>

        <div>
          {props.employees.map((emp: any) => (
            <p key={emp.id}>{emp.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await getTierByCountry({ country: 'VN' });

    const res = await fetch('https://5d3c0087552bfb00148e054a.mockapi.io/employees');
    const employees = await res.json();

    return {
      props: {
        feature: data.data.feature,
        employees
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

export default Home;
